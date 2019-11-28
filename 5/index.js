// ✓ 5. Написать функцию, которая конвертирует строку в spinal-case регистр.

function spinalCase(str){
    return str.split(" ").map(word => word.toLowerCase()).join('-');
}

module.exports = spinalCase;