// ✓ 3.  Написать функцию, которая на вход принимает массив
// и еще один или несколько аргументов (точное количество
// не известно). Удалить из массива все элементы, которые
// имеют то же значение, что и эти аргументы.

function filterArgs(arr, ...args){
    args.forEach(arg => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === arg){
                arr.splice(arr.indexOf(arr[i]), 1);
                i--;
            }
        }
    })
}

module.exports = filterArgs;