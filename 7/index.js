// ✓ 7. Написать функцию, которая на вход принимает последовательность букв
// и ищет пропущенные буквы. Если все буквы присутствуют в диапазоне, то
// возвращается undeﬁned. Например: fearNotLetter("abce") должна вернуть "d"

function fearNotLetter(str){
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let letters = str.split("").sort();
    let letters_arr_en = arr_en.slice(arr_en.indexOf(letters[0]), arr_en.indexOf(letters[letters.length-1]));
    let res = letters_arr_en.filter(i=> letters.indexOf(i) < 0).join('');
    return res ==''? undefined : res

}