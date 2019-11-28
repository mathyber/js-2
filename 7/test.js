const fearNotLetter = require('./index');

const assert = require('assert');

describe("fearNotLetter", function() {

    it('Тип возвращаемых данных должен быть строковым', () => {
        assert.equal(typeof fearNotLetter("abce"), "string");
    });

    it('Должен вернуть d', () => {
        assert.equal(fearNotLetter("abce"), "d");
    });

    it('Должен вернуть def', () => {
        assert.equal(fearNotLetter("abcgh"), "def");
    });

    it('Должен вернуть de', () => {
        assert.equal(fearNotLetter("bcfgh"), "de");
    });
});