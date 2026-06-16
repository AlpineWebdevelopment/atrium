import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post, PostFrontmatter } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as PostFrontmatter, content };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readPostFile)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime(),
    );
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const mdx = path.join(CONTENT_DIR, `${slug}.mdx`);
  const md = path.join(CONTENT_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx) ? `${slug}.mdx` : fs.existsSync(md) ? `${slug}.md` : null;
  return file ? readPostFile(file) : null;
}
