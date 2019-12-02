//  ✓ 12. Написать функцию, которая принимает массив различной вложенности
// и возвращает одномерный массив. Например:
// steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].

function steamrollArray(array){
    let result=[];
    for (let i = 0; i < array.length; i++)
        if (!Array.isArray(array[i]))
            result.push(array[i]);
        else
            result = result.concat(steamrollArray(array[i]));
    return result;
}
module.exports = steamrollArray;
