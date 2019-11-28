// 9. Написать функцию, которая заменяет символы &, <, >,
// "(двойные кавычки), и ‘(апостроф) в строке их соответствующим HTML - кодом.

function symbolToHTML(str){
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
}

module.exports = symbolToHTML;