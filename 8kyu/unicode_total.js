// Unicode Total
// https://www.codewars.com/kata/unicode-total

function uniTotal(str) {
    return str == '' ? 0 : str.split('').map(c => c.charCodeAt(0)).reduce((s, c) => { return s + c; });
}