// ✓ 4. Создайте функцию, которая просматривает массив объектов
// (первый аргумент) и возвращает массив всех объектов, имеющих
// совпадающие пары имя и значение (второй аргумент).
//Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
// { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
// должен вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

function whatIsInAName(arr, obj){
    let keysOfObj = Object.keys(obj);
    return arr.filter(ob => {
        let s = 0;
        for (let i = 0; i < keysOfObj.length; i++){
            keyy = keysOfObj[i];
            if (ob[keyy] === obj[keyy]) s++;
            else return false;
        }
        return s === keysOfObj.length;
    })
}

module.exports = whatIsInAName;