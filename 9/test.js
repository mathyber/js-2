const symbolToHTML = require('./index');

const assert = require('assert');

describe("symbolToHTML", function() {

    it('Тип возвращаемых данных должен быть строковым', () => {
        assert.equal(typeof symbolToHTML("ab<ce>"), "string");
    });

    it('Должен вернуть строку с html-кодами', () => {
        assert.equal(symbolToHTML("<&fgf\"gdgf'<grggre>dfg"),'&lt;&amp;fgf&quot;gdgf&apos;&lt;grggre&gt;dfg');
    });

    it('Должен вернуть \'Dimitri Vegas &amp; Like Mike vs. Bassjackers &amp; D&apos;Angello &amp; Francis - The Flight\'', () => {
        assert.equal(symbolToHTML("Dimitri Vegas & Like Mike vs. Bassjackers & D'Angello & Francis - The Flight"),
            'Dimitri Vegas &amp; Like Mike vs. Bassjackers &amp; D&apos;Angello &amp; Francis - The Flight');
    });

    it('Должен вернуть строку с html-кодом', () => {
        assert.equal(symbolToHTML("<"),"&lt;");
    });
});