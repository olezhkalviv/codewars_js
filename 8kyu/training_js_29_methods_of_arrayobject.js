// Training JS #29: methods of arrayObject---concat() and join()
// https://www.codewars.com/kata/training-js-number-29-methods-of-arrayobject-concat-and-join

function bigToSmall(arr){
    return [].concat(...arr).sort((a, b) => b - a).join('>');
}