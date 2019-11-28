const sumAll = require('./index');

const assert = require('assert');

describe("sumAll", function() {

    it('Тип возвращаемых данных должен быть number', () => {
        assert.equal(typeof sumAll([4, 1]), 'number');
    });

    it('Тип возвращаемых данных должен быть string', () => {
        assert.equal(typeof sumAll(["abc", "def"]), 'string');
    });

    it('Должно вернуть 10', () => {
        assert.equal(sumAll([4, 1]), 10);
    });

    it('Должно вернуть abcdef', () => {
        assert.equal(sumAll(["abc", "def"]), "abcdef");
    });

});