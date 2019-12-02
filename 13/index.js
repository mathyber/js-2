// ✓ 13. Написать функцию, которая суммирует два аргумента вместе.
// Если указан только один аргумент, то возвращает функцию, которая
// ожидает второй аргумент и возвращает сумму.

function twoArguments(arg1, arg2 = false){
    if (arg2)
        return arg1 + arg2;
    else
        return function (arg){
                return arg1 + arg;
            }
}

module.exports = twoArguments;