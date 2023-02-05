/**Returns the byte length of a string accounting for encoding*/
export let stringByteLength = (string: string) => {
    let s = string.length;
    if (s > 2048) {
        return (new TextEncoder().encode(string)).length;
    } else {
        for (let i = s - 1; i >= 0; i--) {
            let code = string.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff) {
                s++;
            }
            else if (code > 0x7ff && code <= 0xffff) {
                s += 2;
            }
            if (code >= 0xDC00 && code <= 0xDFFF) {
                i--;
            }
        }
        return s;
    }
}

/**Returns the byte length of a string accounting for encoding*/
export let stringByteLimit = (string: string, limit: number) => {
    let encoder = new TextEncoder().encode(string);
    string = new TextDecoder().decode(encoder.slice(0, limit));
    if (string.at(-1)?.charCodeAt(0) === 65533) {
        return string.slice(0, -1);
    }
    return string;
}

/**Returns a string with the lenght limited, if the lenght is limited the removed characters are replaced with another string
 * the default replacer is ... ellipsis, and the lenght of the string is 
 * @param string the string to limit the lenght of
 * @param lenght the lenght to limit the string to
 * @param replace what the limited characters are replaced with*/
export let stringLimitReplace = (string: string, length: number, replace: string = '...') => {
    if (length === 0) {
        return '';
    }
    let strLen = [...new Intl.Segmenter().segment(string)].length;
    let replaceLen = [...new Intl.Segmenter().segment(replace)].length;
    if (strLen > length - replaceLen) {
        return string.substring(0, length - replaceLen) + replace;
    }
    return string;
}
/**Returns a string with the lenght limited, if the lenght is limited the removed characters are replaced with another string
 * the default replacer is ... ellipsis, and the lenght of the string is 
 * @param string the string to limit the lenght of
 * @param lenght the lenght to limit the string to
 * @param replace what the limited characters are replaced with*/
export let stringLimitReplace2 = (string: string, length: number, replace?: string) => {
    if (length === 0) {
        return '';
    }
    if (typeof replace === 'undefined') {
        let strLen = [...new Intl.Segmenter().segment(string)].length;
        if (strLen > length - 3) {
            return string.substring(0, length - 3) + '...';
        }
        return string;
    } else {
        let strLen = [...new Intl.Segmenter().segment(string)].length;
        let replaceLen = [...new Intl.Segmenter().segment(replace)].length;
        if (strLen > length - replaceLen) {
            return string.substring(0, length - replaceLen) + replace;
        }
        return string;
    }
}