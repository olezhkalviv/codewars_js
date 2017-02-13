// Abbreviate a Two Word Name
// https://www.codewars.com/kata/abbreviate-a-two-word-name

function abbrevName(name) {
    return name.split(' ').map(w => w[0].toUpperCase()).join('.');
}