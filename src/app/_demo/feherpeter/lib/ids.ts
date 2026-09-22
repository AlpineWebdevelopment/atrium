let counter = 0;

/** Session-unique id for things created in the browser (posts, comments, lessons). */
export function uid(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${(counter++).toString(36)}`;
}
