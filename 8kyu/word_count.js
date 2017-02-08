// Word Count
// https://www.codewars.com/kata/word-count

function countWords(str) {
    var words = str.match(/[a-zA-Z0-9\-'`]+/g);
    return (str == '' || !words) ? 0 : words.length;
}