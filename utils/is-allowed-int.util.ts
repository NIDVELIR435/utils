export enum IntMaxLength {
    INT_1 = 127,
    INT_2 = 32767,
    INT_4 = 2147483647,
    INT_8 = 9223372036854775807,
}

/**
 * checks integer and return boolean if it is allowed according to sql range
 * @param value [string] - int
 * @param intLength [IntMaxLength] - int
 * @example
 * IsAllowedInt (2147483647, IntMaxLength.INT_4);
 * // returns true
 * IsAllowedInt (2147483648, IntMaxLength.INT_4);
 * // returns false
 * @return boolean
 */
export const IsAllowedInt = (value: number | string, intLength: IntMaxLength): value is number => {
    const int = Number(value);

    return !isNaN(int)
        ? int >= -intLength && int <= intLength
        : false;
}
