// ✓ 2. Написать функцию, которая на вход принимает два массива
// и возвращает новый массив с элементами, найденными только в
// одном массиве, но не в обоих.

function twoArrays(arr1, arr2){
    let arr12 = arr1.concat(arr2);
    let res = [];
    for (let i = 0 ; i < arr12.length ; i++) {
        if (arr1.indexOf(arr12[i]) === -1 || arr2.indexOf(arr12[i]) === -1)
            res.push(arr12[i]);
    }
    return res;
}

module.exports = twoArrays;