const sumPrimeNumbers = require('./index');

const assert = require('assert');

describe("sumPrimeNumbers", function() {

    it('Тип возвращаемых данных должен быть number', () => {
        assert.equal(typeof sumPrimeNumbers(5), "number");
    });

    it('Должен вернуть 10', () => {
        assert.equal(sumPrimeNumbers(5), 10);
    });

    it('Должен вернуть 0 для 1', () => {
        assert.equal(sumPrimeNumbers(1), 0);
    });

    it('Должен вернуть 0 для -1', () => {
        assert.equal(sumPrimeNumbers(-1), 0);
    });

    it('Должен вернуть 2', () => {
        assert.equal(sumPrimeNumbers(2), 2);
    });

});