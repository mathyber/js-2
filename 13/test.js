const twoArguments = require('./index');

const assert = require('assert');

describe("twoArguments", function() {

    it('Тип возвращаемых данных должен быть number', () => {
        assert.equal(typeof twoArguments(3,5), 'number');
    });

    it('Тип возвращаемых данных должен быть string', () => {
        assert.equal(typeof twoArguments("ab","cd"), 'string');
    });

    it('Тип возвращаемых данных должен быть function', () => {
        assert.equal(typeof twoArguments(21), 'function');
    });

    it('Должен вернуть 5', () => {
        assert.equal(twoArguments(2, 3), 5);
    });

    it('Должен вернуть "ddrr"', () => {
        assert.equal(twoArguments("dd", "rr"), "ddrr");
    });

    it('Должен вернуть 6', () => {
        let foo = twoArguments(2);
        assert.equal(foo(4), 6);
    });

    it('Должен вернуть "asbce"', () => {
        let foo = twoArguments("asb");
        assert.equal(foo("ce"), "asbce");
    });
});