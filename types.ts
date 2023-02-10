export type Require<
  T extends Record<string, unknown>,
  K extends keyof T
> = Omit<T, K> & { [_K in K]-?: Exclude<T[_K], null | undefined> };
