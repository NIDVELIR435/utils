import { get, has, isObject } from 'lodash';

/**
 * Recursively searches for a key in a nested object and returns its value.
 *
 * This function traverses an object and its nested properties to find
 * the first occurrence of the specified key. If found, it returns the corresponding value.
 *
 * @param obj - The object to search within.
 * @param key - The key to find in the object.
 * @returns The value of the key if found, otherwise `undefined`.
 *
 * @example
 * ```typescript
 * const data = {
 *   user: {
 *     profile: {
 *       name: "John Doe",
 *       age: 30
 *     }
 *   }
 * };
 *
 * findValueByKey(data, "name"); // Returns "John Doe"
 * findValueByKey(data, "age"); // Returns 30
 * findValueByKey(data, "nonexistent"); // Returns undefined
 * ```
 */
export const findValueByKey = (
    obj: object,
    key: string,
): string | undefined => {
    if (has(obj, key)) return get(obj, key);

    for (const value of Object.values(obj)) {
        if (isObject(value)) {
            const result = findValueByKey(value, key);
            if (result !== undefined) return result;
        }
    }
    return undefined;
};
