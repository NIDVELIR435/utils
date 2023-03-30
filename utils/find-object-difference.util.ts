import { toPairs, differenceWith, isEqual, fromPairs} from "lodash";

type ObjType = { [Key in string]: unknown };

/**
 * compare two objects and return difference
 * @param first [Object] - first object
 * @param second [Object] - second object
 * @example
 * objectDiff({ some: 1, some1: 3, some2: 4 }, { some: 1, some1: 3, some5: 2 })
 * // returns { some2: 4 }
 * @return Object - return different columns
 */
const objectDiff = (first: ObjType, second: ObjType): ObjType => {
    //Array<[string, unknown]> split in array by [ key, value ]
    const firstPairs = toPairs(first);
    const secondPairs = toPairs(second);

    //Array<[string, unknown]> receive difference
    const preResult = differenceWith(firstPairs, secondPairs, isEqual);

    // { [Key in string]: unknown }
    return fromPairs(preResult);
};
