// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence

function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, '!');
}