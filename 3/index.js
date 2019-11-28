// ✓ 3.  Написать функцию, которая на вход принимает массив
// и еще один или несколько аргументов (точное количество
// не известно). Удалить из массива все элементы, которые
// имеют то же значение, что и эти аргументы.

function filterArgs(arr, ...args){
    for(let i=0; i<args.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]==args[i]) {
                arr.splice(arr.indexOf(arr[j]),1);
                j--;
            }
        }
    }
}

module.exports = filterArgs;