import { DateTime } from 'luxon';
import { isNil } from 'lodash';

/**
 * extracts time zone from string
 * @param timezone [string] - url string
 * @example
 * extractTimezone("(UTC +03:00) Europe/Kiev");
 * // returns "Europe/Kiev"
 * extractTimezone("(UTC +03:00) Europe/Kievvvv");
 * // returns ""
 */
export const extractTimezone = (timezone: string): string => {
  const regExp = new RegExp('([A-Za-z]+\\/[A-Za-z]+)', 'g');
  const startIndex = timezone.search(regExp);
  const removeLeftSide = timezone.slice(startIndex);
  const lastIndex = removeLeftSide.indexOf(' ');

  return lastIndex !== -1
    ? removeLeftSide.slice(undefined, lastIndex)
    : removeLeftSide;
};

/**
 * checks time zone
 * @param timezone [string] - url string
 * @example
 * checkTimezone("Europe/Kiev");
 * // returns true
 * checkTimezone("(UTC +03:00) Europe/Kiev");
 * // returns true
 * checkTimezone("Europe/Kievvv");
 * // returns false
 * @return bool
 */
export const checkTimezone = (timezone: string): boolean => {
  return (
    !isNil(timezone) &&
    DateTime.local({ zone: extractTimezone(timezone) }).isValid
  );
};
