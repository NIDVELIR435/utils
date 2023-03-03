import { get } from 'lodash';

export type RegexOneResult = {
    originalSrcData: string;
    originalBase64: string;
    mimeType: string;
};
export type PreparedResult = {
    originalSrcData: string;
    preparedString: string;
};

export const findBase64Inside = (
    htmlString: string
): RegexOneResult[] => {
    const baseRegex = new RegExp(
        /data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/gm
    );
    const result: RegexOneResult[] = [];

    let iterateResult = null;

    while ((iterateResult = baseRegex.exec(htmlString)) !== null) {
        const base64Regex = new RegExp(
            /base64,([a-zA-Z0-9,+,/]+={0,2})/gm
        );
        const mimeTypeRegex = new RegExp(
            /image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+/gm
        );

        const originalSrcData = get(iterateResult, '[0]', '');

        result.push({
            originalSrcData,
            originalBase64: get(
                base64Regex.exec(originalSrcData),
                '[1]',
                ''
            ),
            mimeType: get(mimeTypeRegex.exec(originalSrcData), '[0]', ''),
        } as RegexOneResult);
    }
    return result;
};

export const replaceBase64ByPattern = (
    originalString: string,
    preparedPattern: PreparedResult[]
): string => {
    let result = originalString;

    preparedPattern.map(({ preparedString, originalSrcData }) => {
        result = result.replace(originalSrcData, preparedString);
    });

    return result;
};
