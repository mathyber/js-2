//  ✓ 12. Написать функцию, которая принимает массив различной вложенности
// и возвращает одномерный массив. Например:
// steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].

function steamrollArray(arr){
    let res = [];
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== 'object')
            res.push(arr[i]);
        else
            res = res.concat(steamrollArray(arr[i]));
    }
    return res;
}

module.exports = steamrollArray;
