const dropElements = require('./index');

const assert = require('assert');

describe("dropElements", function() {

    it('Должен вернуть [3, 4]', () => {
        assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4]);
    });

    it('Должен вернуть undefined', () => {
        assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 53;}), undefined);
    });

    it('Должен вернуть [1, 2, 3, 4]', () => {
        assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 0;}), [1, 2, 3, 4]);
    });

});