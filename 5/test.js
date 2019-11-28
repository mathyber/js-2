const spinalCase = require('./index');

const assert = require('assert');

describe("spinalCase", function() {

    it('Тип возвращаемых данных должен быть строкой', () => {
        assert.equal(typeof spinalCase("dfgdf dfgdfg dfgdfg"), "string");
    });

    it('Должен вернуть строку "мешок-картошки-100-кило"', () => {
        assert.equal(spinalCase("Мешок картошки 100 кило"), "мешок-картошки-100-кило");
    });

    it('Должен вернуть строку "вау-как-круто-тут-идти-среди-снега"', () => {
        assert.equal(spinalCase("ВАу КАК круто ТуТ Идти среДи сНЕга"), "вау-как-круто-тут-идти-среди-снега");
    });

});