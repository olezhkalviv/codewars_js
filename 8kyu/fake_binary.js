// Fake Binary
// https://www.codewars.com/kata/fake-binary

function fakeBin(x) {
    return x.split('').map(x => x >= 5 ? 1 : 0).join('');
}