const map = require('./index');

const assert = require('assert');

describe("map", function() {

    it('Должен вернуть массив, где каждое число увеличено на 1', () => {
        let arr = [4,5,6];
        assert.deepEqual(arr.map(m=>m+1), [5,6,7]);
    });

    it('Должен вернуть массив, где каждый элемент массива увеличен на 1', () => {
        let arr = ["hhh",5,6];
        assert.deepEqual(arr.map(m=>m+1), ['hhh1',6,7]);
    });

    it('Должен вернуть массив из трех "раз"', () => {
        let arr = [4,5,6];
        assert.deepEqual(arr.map(m=>"раз"), ["раз","раз","раз"]);
    });

    it('Должен вернуть пустой массив', () => {
        let arr = [];
        assert.deepEqual(arr.map(m=>m+1), []);
    });

});