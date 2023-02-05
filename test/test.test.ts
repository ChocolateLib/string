import { describe, it, expect } from '@jest/globals';
import { stringByteLength, stringByteLimit, stringLimitReplace } from "../src/index";

describe('Byte Length', function () {
    it('asdf is 4 bytes', function () {
        expect(stringByteLength('asdf')).toStrictEqual(4);
    });
    it('asdfæø is 8 bytes', function () {
        expect(stringByteLength('asdfæø')).toStrictEqual(8);
    });
    it('asdfæø💕💕 is 16 bytes', function () {
        expect(stringByteLength('asdfæø💕💕')).toStrictEqual(16);
    });
});

describe('Byte Limit', function () {
    it('asdf is 2 bytes', function () {
        expect(stringByteLimit('asdf', 2)).toStrictEqual('as');
    });
    it('asdfæø is 8 bytes', function () {
        expect(stringByteLimit('asdfæø', 5)).toStrictEqual('asdf');
    });
    it('asdfæø💕💕 is 16 bytes', function () {
        expect(stringByteLimit('asdfæø💕💕', 10)).toStrictEqual('asdfæø');
    });
});


describe('Length replace', function () {
    it('Limit to longer', function () {
        expect(stringLimitReplace('Lorem ipsum dolor sit amet orci aliquam.', 50)).toStrictEqual('Lorem ipsum dolor sit amet orci aliquam.');
    });
    it('Limit to same', function () {
        expect(stringLimitReplace('Lorem ipsum dolor sit amet orci aliquam.', 40)).toStrictEqual('Lorem ipsum dolor sit amet orci aliqu...');
    });
    it('Limit to less', function () {
        expect(stringLimitReplace('Lorem ipsum dolor sit amet orci aliquam.', 20)).toStrictEqual('Lorem ipsum dolor...');
    });
    it('Limit to one', function () {
        expect(stringLimitReplace('Lorem ipsum dolor sit amet orci aliquam.', 1)).toStrictEqual('...');
    });
    it('Limit to zero', function () {
        expect(stringLimitReplace('Lorem ipsum dolor sit amet orci aliquam.', 0)).toStrictEqual('');
    });
    it('Limit to custom', function () {
        expect(stringLimitReplace('Lorem ipsum dolor sit amet orci aliquam.', 20, '❤️❤️❤️')).toStrictEqual('Lorem ipsum dolor❤️❤️❤️');
    });
});