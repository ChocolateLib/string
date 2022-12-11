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
