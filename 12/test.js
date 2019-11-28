const steamrollArray = require('./index');

const assert = require('assert');

describe("steamrollArray", function() {

    it('Должен вернуть [1,2,3,4]', () => {
        assert.deepEqual(steamrollArray(([1, [2], [3, [[4]]]])),[1,2,3,4]);
    });

    it('Должен вернуть [1]', () => {
        assert.deepEqual(steamrollArray(([[[[1]]]])),[1]);
    });

    it('Должен вернуть []', () => {
        assert.deepEqual(steamrollArray(([[[[]]]])),[]);
    });

    it('Должен вернуть [1,5,2]', () => {
        assert.deepEqual(steamrollArray(([[[[1,5],2]]])),[1,5,2]);
    });
});