const twoArrays = require('./index');

const assert = require('assert');

describe("twoArrays", function() {

    it('Должен вернуть массив [12,8,9,10,5]', () => {
        assert.deepEqual(twoArrays([4, 1,12,8],[1,9,4,1,10,5]), [12,8,9,10,5]);
    });

    it('Должен вернуть массив ["we", "rtr", "fr"]', () => {
        assert.deepEqual(twoArrays(["sd","we", "ds", "fdd"],["sd", "ds","rtr", "fr", "fdd"]), ["we", "rtr", "fr"]);
    });

    it('Должен вернуть массив [12,8,9,10,5,6]', () => {
        assert.deepEqual(twoArrays([4, 1,12,8,9,10,5,6],[1,4,1]), [12,8,9,10,5,6]);
    });

    it('Должен вернуть пустой массив', () => {
        assert.deepEqual(twoArrays([4, 1,12,8,9,10,5,6],[4,1,12, 1,12,8,9,10,5,6]), []);
    });

});