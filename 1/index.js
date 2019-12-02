// ✓ 1. Написать функцию, которая принимает на вход массив из двух чисел
// и возвращает сумму этих двух чисел плюс сумму всех чисел между ними.
// Наименьшее число не всегда будет на первом месте.
// (Например sumAll([4, 1]) должен возвращать 10)

function sumAll(arr){
    let sum = arr[0] + arr[1];
    for (let i = Math.min.apply(null, arr) + 1; i < Math.max.apply(null, arr); i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll;