export const shortenNumber = (num): string => {
    let prefix = (num < 0) ? "-" : "";

    const format = {
        T: 1000000000000,
        B: 1000000000,
        M: 1000000,
        K: 1000
    }

    const replaceFunc = (word: 'T' | 'B' | 'M' | 'K') =>
        prefix + (num / format[word])
            .toFixed(1)
            .replace(/\.0$/, "") + word;

    num = Math.abs(num);
    if (num >= format.T) return replaceFunc("T")
    if (num >= format.B) return replaceFunc("B")
    if (num >= format.M) return replaceFunc("M")
    if (num >= format.K) return replaceFunc("K")

    return prefix + num;
};


console.log(shortenNumber("12322222")); // => 12.3M

