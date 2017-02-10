// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
// https://www.codewars.com/kata/training-js-number-31-methods-of-arrayobject-isarray-indexof-and-tostring

function blackAndWhite(arr) {
    return "It's a " + (!Array.isArray(arr) ? "fake" : arr.indexOf(5) >= 0 && arr.indexOf(13) >= 0 ? "black" : "white") + " array";
}