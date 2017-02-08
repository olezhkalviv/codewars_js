// Freudian translator
// https://www.codewars.com/kata/freudian-translator

function toFreud(string) {
    return string == '' ? '' : string.split(' ').map(w => 'sex').join(' ');
}