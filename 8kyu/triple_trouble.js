// Triple Trouble
// https://www.codewars.com/kata/triple-trouble-2

function tripleTrouble(one, two, three) {
    var str = '';
    for (i = 0; i < one.length; i++) {
        str += one[i] + two[i] + three[i];
    }
    return str;
}