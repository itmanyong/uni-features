import { resolve } from "node:path";
import { normalizePath } from "lib-features";

export function resolveRoot(...paths: string[]): string {
  return normalizePath(resolve(process.cwd(), ...paths));
}
