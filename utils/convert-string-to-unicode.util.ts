enum Codes {
  A_BOLD = 0x1d5d4,
  A_ITALIC = 0x1d608,
  ZERO_BOLD = 0x1d7ce,
  A_NORMAL = 65,
  A_SMALL = 97,
  CHARACTERS_COUNT = 26,
  NUMBER_0 = 48,
  NUMBER_9 = 57,
}

const toItalic = (message: string): string => {
  return message
    .split('')
    .map((char) => char.charCodeAt(0))
    .map((utfCode) => {
      const isNormal =
        utfCode >= Codes.A_NORMAL &&
        utfCode < Codes.A_NORMAL + Codes.CHARACTERS_COUNT;

      const isSmall =
        utfCode >= Codes.A_SMALL &&
        utfCode < Codes.A_SMALL + Codes.CHARACTERS_COUNT;

      const isNum =
        utfCode >= Codes.NUMBER_0 && utfCode <= Codes.NUMBER_9;

      const normalCodePoint =
        Codes.A_ITALIC + (utfCode - Codes.A_NORMAL);

      const smallCodePoint =
        Codes.A_ITALIC +
        Codes.CHARACTERS_COUNT +
        (utfCode - Codes.A_SMALL);

      const numberCodePoint =
        Codes.ZERO_BOLD + (utfCode + Codes.NUMBER_0);

      // prettier-ignore
      const codePoint =
            isNormal ? normalCodePoint :
                isSmall ? smallCodePoint :
                    isNum ? numberCodePoint :
                        utfCode;

      return String.fromCodePoint(codePoint);
    })
    .join('');
};

const toBold = (message: string): string => {
  return message
    .split('')
    .map((char) => char.charCodeAt(0))
    .map((utfCode) => {
      const isNormal =
        utfCode >= Codes.A_NORMAL &&
        utfCode < Codes.A_NORMAL + Codes.CHARACTERS_COUNT;

      const isSmall =
        utfCode >= Codes.A_SMALL &&
        utfCode < Codes.A_SMALL + Codes.CHARACTERS_COUNT;

      const isNum =
        utfCode >= Codes.NUMBER_0 && utfCode <= Codes.NUMBER_9;

      const normalCodePoint =
        Codes.A_BOLD + (utfCode - Codes.A_NORMAL);

      const smallCodePoint =
        Codes.A_BOLD +
        Codes.CHARACTERS_COUNT +
        (utfCode - Codes.A_SMALL);

      const numberCodePoint =
        Codes.ZERO_BOLD + (utfCode + Codes.NUMBER_0);

      // prettier-ignore
      const codePoint =
            isNormal ? normalCodePoint :
                isSmall ? smallCodePoint :
                    isNum ? numberCodePoint :
                        utfCode;

      return String.fromCodePoint(codePoint);
    })
    .join('');
};

export function convertStringToUnicode(message: string): string {
  let result = message;
  let reStrong = new RegExp(
    /\*([a-zA-Z\d =,\-+!@#$%^&<>?/\\'":;}{\]\[~()]+)\*/, // *text*
    'g'
  );
  let reEm = new RegExp(
    /_([a-zA-Z\d =,\-+!@#$%^&<>?/\\'":;}{\]\[~()]+)_/, // _text_
    'g'
  );

  result = message.replaceAll(reStrong, (subString: string): string =>
    toBold(subString.replaceAll('*', ''))
  );
  result = result.replaceAll(reEm, (subString: string): string =>
    toItalic(subString.replaceAll('_', ''))
  );

  return result;
}
