// Sum of Multiples
// https://www.codewars.com/kata/sum-of-multiples

function sumMul(n, m) {
    if (m <= 0) return "INVALID";
    var sum = 0;
    for (i = 1; i < m; i++) {
        if (i % n == 0) {
            sum += i;
        }
    }
    return sum;
}