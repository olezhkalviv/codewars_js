// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// https://www.codewars.com/kata/exclamation-marks-series-number-6-remove-n-exclamation-marks-in-the-sentence-from-left-to-right

function remove(s, n) {
    return s.split('').map(c => { 
        if (n > 0 && c == '!') {
            n--;
        }
        else {
            return c;
        }
    }).join('');
}