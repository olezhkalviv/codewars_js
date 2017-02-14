// Regex count lowercase letters
// https://www.codewars.com/kata/regex-count-lowercase-letters

function lowercaseCount(str) {
    // return (str.match(/[a-z]/g) || []).length
    return str.replace(/[^a-z]+/g, '').length;
}