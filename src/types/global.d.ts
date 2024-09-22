declare global {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  type OvjectType<T = any> = Record<string, T>;
  type FilterPatternResult = (id: string | unknown) => boolean;
}

export {};
