// SpeedCode #2 - Array Madness
// https://www.codewars.com/kata/speedcode-number-2-array-madness

function arrayMadness(a, b) {
    return a.reduce((s, n) => { return s + n ** 2; }) > b.reduce((s, n) => { return s + n ** 3; }) ? true : false;
}