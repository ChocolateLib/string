let stringLimitReplace = (string, length, replace = '...') => {
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

let stringLimitReplace2 = (string, length, replace) => {
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


let stringLimitReplace3 = (string, length, replace = '...') => {
    if (length === 0) {
        return '';
    }
    if (string.length > length - replace.length) {
        return string.substring(0, length - replace.length) + replace;
    }
    return string;
}

let cont = document.createElement('div')
let stringLimitReplace4 = (string, length, replace = '...') => {
    if (length === 0) {
        return '';
    }
    cont.textContent = string;
    cont.getBoundingClientRect();

    return string;
}