import { isNil } from 'lodash';

const regExpPermLink = new RegExp(
  '^(https)?(:\\/\\/)?((www|m)\\.)?facebook.com\\/groups\\/([a-z|A-Z|0-9|.|_]*)\\/(permalink)\\/([0-9]*)[\\/]{0,1}$'
);
const regExpPostLink = new RegExp(
  '^(https)?(:\\/\\/)?((www|m)\\.)?facebook.com\\/groups\\/([a-z|A-Z|0-9|.|_]*)\\/(posts)\\/([0-9]*)[\\/]{0,1}$'
);
const regExpLink = new RegExp(
  '^(https)?(:\\/\\/)?((www|m)\\.)?facebook.com\\/groups\\/([a-z|A-Z|0-9|.|_]*)\\/(permalink|posts)\\/([0-9]*)[\\/]{0,1}$'
);

/**
 * cut query params from link with"?"
 * @param link [string] -  url string
 * @example
 * cutRedundantPartOfLink ("https://www.facebook.com/groups/1111/permalink/2222?some--query");
 * // returns "https://www.facebook.com/groups/1111/permalink/2222"
 * @return string
 */
export const cutRedundantPartOfLink = (link: string = ''): string => {
  const index = link?.indexOf('?');

  return index !== -1 ? link?.slice(0, index) : link;
};

/**
 * check if url match with regexp pattern
 * @param link [string] -  url string
 * @example
 * isCorrectLink("https://www.facebook.com/groups/1111/permalink/2222");
 * // returns true
 * isCorrectLink("https://www.facebook.com/groups/1111/anouther_params/2222");
 * // returns false
 * @return bool
 */
export const isCorrectLink = (link?: string): boolean =>
  regExpLink.test(link ?? '');
/**
 * check if url is permalink pattern link
 * @param url [string] -  url string
 * @example
 *  * isPermLink("https://www.facebook.com/groups/1111/permalink/2222");
 *  *  // returns true
 *   * isPermLink("https://www.facebook.com/groups/1111/posts/2222");
 *  *  // returns false
 * @return bool
 */
export const isPermLink = (url?: string): boolean =>
  regExpPermLink.test(url ?? '');

/**
 * check if url is post pattern link
 * @param url [string] -  url string
 * @example
 *  * isPostLink("https://www.facebook.com/groups/1111/posts/2222");
 *  *  // returns true
 *   * isPostLink("https://www.facebook.com/groups/1111/permalink/2222");
 *  *  // returns false
 * @return bool
 */

export const isPostLink = (url?: string): boolean =>
  regExpPostLink.test(url ?? '');
/**
 * create special string from link
 * @example
 * getPostIdFromLink("https://www.facebook.com/groups/1111/posts/2222", 25);
 * // returns '25_2222'
 * getPostIdFromLink("https://www.facebook.com/groups/1111/posts/2222");
 * // returns '1111_2222'
 * getPostIdFromLink("https://www.facebook.com/groups/1111/anouther_link/2222");
 * // returns null
 * @return string | null
 */
export const getPostIdFromLink = (
  url: string,
  facebookId?: string
): string | null => {
  // if exist "?" cut part of string after this

  const urlFrom = url.indexOf('groups') + 7;
  const postPoint = url.indexOf('/posts');
  const permLinkPoint = url.indexOf('/permalink');

  const groupIdInPostLink = url.slice(urlFrom, postPoint);
  const groupIdInPermLink = url.slice(urlFrom, permLinkPoint);
  const postIdInPostLink = url.slice(postPoint + 7);
  const postIdInPermLink = url.slice(permLinkPoint + 11);

  if (!groupIdInPostLink.includes('permalink'))
    return !isNil(facebookId)
      ? `${facebookId}_${postIdInPostLink}`
      : `${groupIdInPostLink}_${postIdInPostLink}`;

  if (!groupIdInPermLink.includes('posts'))
    return !isNil(facebookId)
      ? `${facebookId}_${postIdInPermLink}`
      : `${groupIdInPermLink}_${postIdInPermLink}`;

  return null;
};
