// Polish alphabet
// https://www.codewars.com/kata/polish-alphabet

var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters(string) {
    return string.split('').map((c) => polishLetters[c] || c).join("");
}

function correctPolishLetters(string) {
    return string.replace(/[ąćęłńóśźż]/g, match => polishLetters[match]);
}