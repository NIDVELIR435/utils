import { isNil } from 'lodash';

export enum DefaultPagination {
    LIMIT = 1000,
    BIGGEST_LIMIT = 5000,
    OFFSET = 0,
}


export const isAllowedLimit = (
  limit: number,
  {
    customMaxLimit,
  }: { customMaxLimit?: number | DefaultPagination } = {}
): number => {
  const defaultLimit =
    !isNil(customMaxLimit) &&
    customMaxLimit <= DefaultPagination.BIGGEST_LIMIT
      ? customMaxLimit
      : DefaultPagination.LIMIT;

  return limit > defaultLimit ? defaultLimit : limit;
};
