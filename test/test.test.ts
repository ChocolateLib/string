import { describe, it, expect } from '@jest/globals';
import { stringByteLength } from "../src/index";

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