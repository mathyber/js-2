// ✓ 6. Написать функцию, которая осуществляет поиск и замену в предложении.
// Первый аргумент - это строка, в которой осуществляется поиск и замена.
// Второй аргумент - это слово, которое нужно заменить, третий аргумент
// - слово, на которое нужно заменить. При замене сохраняйте регистр
// первого символа в исходном слове.

function searchAndReplace(str, wordSearch, wordReplace){
    return str.split(" ").map(word => {
        if (word.toLowerCase() === wordSearch.toLowerCase())
        {
            if (word[0].toUpperCase() === word[0]) return wordReplace.charAt(0).toUpperCase() + wordReplace.slice(1);
            else return wordReplace.charAt(0).toLowerCase() + wordReplace.slice(1);
        }
        else return word;
    }).join(' ');
}

module.exports = searchAndReplace;
