// Fake Binary
// https://www.codewars.com/kata/fake-binary/train/javascript

function fakeBin(x) {
    return x.split('').map(x => x >= 5 ? 1 : 0).join('');
}