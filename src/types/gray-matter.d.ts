// gray-matter@2 ships no type declarations. Minimal typing for our usage:
// matter(raw) -> { data, content }.
declare module "gray-matter" {
  interface GrayMatterFile {
    data: Record<string, unknown>;
    content: string;
    excerpt?: string;
    orig: string | Buffer;
  }
  function matter(input: string | Buffer, options?: Record<string, unknown>): GrayMatterFile;
  export = matter;
}
