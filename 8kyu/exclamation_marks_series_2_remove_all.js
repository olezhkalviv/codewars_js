// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence

function remove(s) {
    return s.replace(/!+$/, '');
}