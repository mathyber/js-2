const filterArgs = require('./index');

const assert = require('assert');

describe("filterArgs", function() {

    it('Должен вернуть массив [4,4,6]', () => {
        let arr = [1,4,5,4,5,6];
        filterArgs(arr,1,5 )
        assert.deepEqual(arr , [4,4,6] );
    });

    it('Должен вернуть массив [4,6]', () => {
        let arr = [1,4,5,5,6];
        filterArgs(arr,1,5,5,5,5,5,5,5)
        assert.deepEqual(arr , [4,6] );
    });

    it('Должен вернуть массив [4,5,4,5,6]', () => {
        let arr = [1,4,5,4,5,6];
        filterArgs(arr,1)
        assert.deepEqual(arr , [4,5,4,5,6] );
    });

    it('Должен вернуть пустой массив', () => {
        let arr = [1,4,5,4,5,6];
        filterArgs(arr,1,4,5,6)
        assert.deepEqual(arr , [] );
    });

});