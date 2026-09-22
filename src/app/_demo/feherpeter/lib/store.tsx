"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type {
  AcademyConfig,
  AcademyEvent,
  Course,
  Idea,
  Member,
  Post,
  PostCategory,
  Rank,
  Role,
  Tier,
  WeeklyTask,
} from "../data/types";
import { CONFIG } from "../data/config";
import { TIERS } from "../data/tiers";
import { RANKS } from "../data/ranks";
import { COURSES } from "../data/courses";
import { TASKS } from "../data/tasks";
import { EVENTS } from "../data/events";
import { POSTS } from "../data/posts";
import { IDEAS } from "../data/ideas";
import { MEMBERS, PERSONA_SEEDS, PETER_ID, ROLE_MEMBER } from "../data/members";
import { rankFor, roleTier } from "./access";
import { todayISO } from "./dates";
import { uid } from "./ids";

/* The whole session state in one place. Everything the admin can edit and
   everything a member can do lives here, seeded from /data and mirrored to
   localStorage so a refresh mid-demo loses nothing. A "Visszaállítás" in the
   role switcher wipes it back to the seed.

   In production the seed becomes a fetch and the setters become mutations;
   the screens keep the same hook. */

const STORAGE_KEY = "fpa-demo-v1";

interface Progress {
  completedLessons: string[];
  taskWeeksDone: number[];
  /** Points earned this session on top of the member's seed points. */
  bonusPoints: number;
  badges: string[];
  rsvps: string[];
  likedPosts: string[];
}

interface Persisted {
  role: Role;
  config: AcademyConfig;
  tiers: Tier[];
  ranks: Rank[];
  courses: Course[];
  tasks: WeeklyTask[];
  events: AcademyEvent[];
  posts: Post[];
  ideas: Idea[];
  progress: Record<string, Progress>;
  /** Extra comments added in-session, keyed by "course/lesson". */
  lessonComments: Record<string, { id: string; memberId: string; text: string; daysAgo: number }[]>;
  /** Assistant conversation, so it survives navigation. */
  chat: { id: string; from: "me" | "peter"; text: string; lesson?: { courseSlug: string; lessonSlug: string }; priority?: boolean }[];
}

function seedProgress(): Record<string, Progress> {
  const out: Record<string, Progress> = {};
  for (const s of PERSONA_SEEDS) {
    out[s.memberId] = {
      completedLessons: s.completedLessons,
      taskWeeksDone: s.taskWeeksDone,
      bonusPoints: 0,
      badges: s.badges,
      rsvps: [],
      likedPosts: [],
    };
  }
  return out;
}

function seed(): Persisted {
  return {
    role: "vendeg",
    config: CONFIG,
    tiers: TIERS,
    ranks: RANKS,
    courses: COURSES,
    tasks: TASKS,
    events: EVENTS,
    posts: POSTS,
    ideas: IDEAS,
    progress: seedProgress(),
    lessonComments: {},
    chat: [],
  };
}

function load(): Persisted | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    // Merge over the seed so a new field in a later build never crashes an
    // older saved session.
    return { ...seed(), ...parsed };
  } catch {
    return null;
  }
}

function save(p: Persisted) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* private mode, quota — the demo keeps working from memory */
  }
}


export interface Store extends Persisted {
  hydrated: boolean;
  /** The signed-in member for the current role (null for Vendég). */
  me: Member | null;
  myTier: ReturnType<typeof roleTier>;
  myProgress: Progress;
  myPoints: number;
  myRank: Rank;
  myStreak: number;
  today: string;
  members: Member[];

  setRole: (r: Role) => void;
  reset: () => void;

  completeLesson: (courseSlug: string, lessonSlug: string) => void;
  uncompleteLesson: (courseSlug: string, lessonSlug: string) => void;
  isLessonDone: (courseSlug: string, lessonSlug: string) => boolean;
  completeTask: (week: number) => void;
  uncompleteTask: (week: number) => void;
  isTaskDone: (week: number) => boolean;
  toggleRsvp: (eventId: string) => void;

  addPost: (category: PostCategory, title: string, text: string) => void;
  addPostComment: (postId: string, text: string) => void;
  toggleLike: (postId: string) => void;
  addLessonComment: (courseSlug: string, lessonSlug: string, text: string) => void;

  pushChat: (msg: Persisted["chat"][number]) => void;
  clearChat: () => void;

  updateConfig: (patch: Partial<AcademyConfig>) => void;
  setTiers: (t: Tier[]) => void;
  setRanks: (r: Rank[]) => void;
  setCourses: (c: Course[]) => void;
  setTasks: (t: WeeklyTask[]) => void;
  setEvents: (e: AcademyEvent[]) => void;
  setIdeas: (i: Idea[]) => void;
}

const Ctx = createContext<Store | null>(null);

const EMPTY_PROGRESS: Progress = {
  completedLessons: [],
  taskWeeksDone: [],
  bonusPoints: 0,
  badges: [],
  rsvps: [],
  likedPosts: [],
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Persisted>(seed);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const loaded = load() ?? seed();
    // `?szerep=belso` opens a page straight in a given role — handy for
    // demo deep links and for screenshots.
    try {
      const r = new URLSearchParams(window.location.search).get("szerep");
      if (r && ["vendeg", "alap", "halado", "belso", "admin"].includes(r)) loaded.role = r as Role;
    } catch {}
    // Hydration: the seed renders on the server, the saved session replaces it
    // once we are in the browser. That is one deliberate setState per mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loaded);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) save(state);
  }, [state, hydrated]);

  const patch = useCallback((fn: (p: Persisted) => Partial<Persisted>) => {
    setState((p) => ({ ...p, ...fn(p) }));
  }, []);

  const meId = ROLE_MEMBER[state.role];
  const me = useMemo(() => (meId ? (MEMBERS.find((m) => m.id === meId) ?? null) : null), [meId]);
  const myProgress = (meId && state.progress[meId]) || EMPTY_PROGRESS;

  const patchProgress = useCallback(
    (fn: (pr: Progress) => Partial<Progress>) => {
      if (!meId) return;
      patch((p) => {
        const cur = p.progress[meId] ?? EMPTY_PROGRESS;
        return { progress: { ...p.progress, [meId]: { ...cur, ...fn(cur) } } };
      });
    },
    [meId, patch],
  );

  const pts = state.config.points;
  const myPoints = (me?.points ?? 0) + myProgress.bonusPoints;
  const myRank = rankFor(state.ranks, myPoints);
  // A streak is consecutive task weeks ending at the current week (or last
  // week — this week's task may still be open).
  const myStreak = useMemo(() => {
    const done = new Set(myProgress.taskWeeksDone);
    let w = state.config.currentWeek;
    if (!done.has(w)) w -= 1;
    let n = 0;
    while (w >= 1 && done.has(w)) {
      n++;
      w--;
    }
    return n;
  }, [myProgress.taskWeeksDone, state.config.currentWeek]);

  const today = todayISO(state.config.academyStart, state.config.currentWeek);

  const store: Store = {
    ...state,
    hydrated,
    me,
    myTier: roleTier(state.role, me),
    myProgress,
    myPoints,
    myRank,
    myStreak,
    today,
    members: MEMBERS,

    setRole: (role) => patch(() => ({ role })),
    reset: () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setState(seed());
    },

    isLessonDone: (c, l) => myProgress.completedLessons.includes(`${c}/${l}`),
    completeLesson: (c, l) =>
      patchProgress((pr) => {
        const key = `${c}/${l}`;
        if (pr.completedLessons.includes(key)) return {};
        const badges = pr.badges.includes("Első lecke") ? pr.badges : [...pr.badges, "Első lecke"];
        return {
          completedLessons: [...pr.completedLessons, key],
          bonusPoints: pr.bonusPoints + pts.lesson,
          badges,
        };
      }),
    uncompleteLesson: (c, l) =>
      patchProgress((pr) => {
        const key = `${c}/${l}`;
        if (!pr.completedLessons.includes(key)) return {};
        return {
          completedLessons: pr.completedLessons.filter((k) => k !== key),
          bonusPoints: pr.bonusPoints - pts.lesson,
        };
      }),

    isTaskDone: (w) => myProgress.taskWeeksDone.includes(w),
    completeTask: (w) =>
      patchProgress((pr) => {
        if (pr.taskWeeksDone.includes(w)) return {};
        const weeks = [...pr.taskWeeksDone, w].sort((a, b) => a - b);
        const bonus = pr.taskWeeksDone.includes(w - 1) ? pts.streakBonus : 0;
        const badges = [...pr.badges];
        if (!badges.includes("Első hét")) badges.push("Első hét");
        return { taskWeeksDone: weeks, bonusPoints: pr.bonusPoints + pts.task + bonus, badges };
      }),
    uncompleteTask: (w) =>
      patchProgress((pr) => {
        if (!pr.taskWeeksDone.includes(w)) return {};
        const bonus = pr.taskWeeksDone.includes(w - 1) ? pts.streakBonus : 0;
        return { taskWeeksDone: pr.taskWeeksDone.filter((x) => x !== w), bonusPoints: pr.bonusPoints - pts.task - bonus };
      }),

    toggleRsvp: (id) =>
      patchProgress((pr) => ({
        rsvps: pr.rsvps.includes(id) ? pr.rsvps.filter((x) => x !== id) : [...pr.rsvps, id],
      })),

    addPost: (category, title, text) => {
      if (!meId) return;
      patch((p) => ({
        posts: [{ id: uid("p"), memberId: meId, category, title, text, daysAgo: 0, likes: 0, comments: [] }, ...p.posts],
      }));
      patchProgress((pr) => ({ bonusPoints: pr.bonusPoints + pts.post }));
    },
    addPostComment: (postId, text) => {
      if (!meId) return;
      patch((p) => ({
        posts: p.posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, { id: uid("c"), memberId: meId, text, daysAgo: 0 }] }
            : post,
        ),
      }));
      patchProgress((pr) => ({ bonusPoints: pr.bonusPoints + pts.comment }));
    },
    toggleLike: (postId) => {
      if (!meId) return;
      const liked = myProgress.likedPosts.includes(postId);
      patch((p) => ({
        posts: p.posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + (liked ? -1 : 1) } : post)),
      }));
      patchProgress((pr) => ({
        likedPosts: liked ? pr.likedPosts.filter((x) => x !== postId) : [...pr.likedPosts, postId],
      }));
    },
    addLessonComment: (c, l, text) => {
      if (!meId) return;
      const key = `${c}/${l}`;
      patch((p) => ({
        lessonComments: {
          ...p.lessonComments,
          [key]: [...(p.lessonComments[key] ?? []), { id: uid("lc"), memberId: meId, text, daysAgo: 0 }],
        },
      }));
      patchProgress((pr) => ({ bonusPoints: pr.bonusPoints + pts.comment }));
    },

    pushChat: (msg) => patch((p) => ({ chat: [...p.chat, msg] })),
    clearChat: () => patch(() => ({ chat: [] })),

    updateConfig: (cfg) => patch((p) => ({ config: { ...p.config, ...cfg } })),
    setTiers: (tiers) => patch(() => ({ tiers })),
    setRanks: (ranks) => patch(() => ({ ranks })),
    setCourses: (courses) => patch(() => ({ courses })),
    setTasks: (tasks) => patch(() => ({ tasks })),
    setEvents: (events) => patch(() => ({ events })),
    setIdeas: (ideas) => patch(() => ({ ideas })),
  };

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore outside StoreProvider");
  return s;
}

export { PETER_ID };
