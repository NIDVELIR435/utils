/**
 * Converts a number of bytes into a human-readable string format.
 *
 * @param {number} bytes - The number of bytes to be converted. If the value is 0 or falsy, the function returns '0 Bytes'.
 * @param {number} [decimals=2] - The number of decimal places to include in the formatted string. Defaults to 2. If a negative value is provided, it is treated as 0.
 * @returns {string} A string representing the size in appropriate units (e.g., 'KB', 'MB', 'GB').
 *
 * @example
 * formatBytes(1024); // Returns '1 KB'
 * formatBytes(1234, 3); // Returns '1.205 KB'
 */
export const formatBytes = (bytes: number, decimals = 2): string =>  {
    if (!bytes || bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
