// ✓ 6. Написать функцию, которая осуществляет поиск и замену в предложении.
// Первый аргумент - это строка, в которой осуществляется поиск и замена.
// Второй аргумент - это слово, которое нужно заменить, третий аргумент
// - слово, на которое нужно заменить. При замене сохраняйте регистр
// первого символа в исходном слове.

function searchAndReplace(str, wordSearch, wordReplace){
    return str.split(" ").map(word =>
        word.toLowerCase()==wordSearch.toLowerCase()?
            word[0].toUpperCase()==word[0]? wordReplace.charAt(0).toUpperCase()+wordReplace.slice(1)
                : wordReplace.charAt(0).toLowerCase()+wordReplace.slice(1) : word).join(' ');
}
