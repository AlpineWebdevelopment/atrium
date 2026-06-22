import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Advertorial, AdvertorialFrontmatter } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "advertorial");

function readAdvertorialFile(filename: string): Advertorial {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as AdvertorialFrontmatter, content };
}

export function getAdvertorialSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAdvertorialBySlug(slug: string): Advertorial | null {
  const mdx = path.join(CONTENT_DIR, `${slug}.mdx`);
  const md = path.join(CONTENT_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx)
    ? `${slug}.mdx`
    : fs.existsSync(md)
      ? `${slug}.md`
      : null;
  return file ? readAdvertorialFile(file) : null;
}
