// noobCode 01: SUPERSIZE ME.... or rather, this integer!
// https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer

function superSize(num){
    return parseInt(num.toString().split('').sort((a,b) => { return (a > b ? -1 : a < b ? 1 : 0); }).join(''));
}