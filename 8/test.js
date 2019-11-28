const uniqueValues = require('./index');

const assert = require('assert');

describe("uniqueValues", function() {

    it('Должен вернуть массив [1,2,3]', () => {
        assert.deepEqual(uniqueValues([1,2,3]), [1,2,3]);
    });

    it('Должен вернуть массив [45,47,3,5,8]', () => {
        assert.deepEqual(uniqueValues([45, 47, 1,2,3],[5,45,8,47]), [45,47,1,2,3,5,8]);
    });

    it('Должен вернуть массив [45,47,3,5,8,78]', () => {
        assert.deepEqual(uniqueValues([45, 47, 1,2,3],[5,45,8,47],[5,45,78,8,47]), [45,47,1,2,3,5,8,78]);
    });
});