const whatIsInAName = require('./index');

const assert = require('assert');

describe("whatIsInAName", function() {

    it('Должен вернуть массив [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]', () => {
        assert.deepEqual( whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
            { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) ,
            [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);
    });

    it('Должен вернуть пустой', () => {
        assert.deepEqual( whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
                { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 11, "bat": 12 }) ,
            []);
    });

    it('Должен вернуть массив [{ "apple": 1, "bat": 2 }]', () => {
        assert.deepEqual( whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
                { "apple": 1, "bat": 4, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) ,
            [{ "apple": 1, "bat": 2 }]);
    });


});