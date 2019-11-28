// ✓ 8. Написать функцию, которая принимает два или более массивов и возвращает
// новый массив уникальных значений. Значения должны быть
// отсортированы по их первоначальному порядку

function uniqueValues() {
    return [].concat.apply([], arguments).filter(function(elem, index, self) {
        return self.indexOf(elem) === index;
    });
}