// Collatz Conjecture (3n+1)
// https://www.codewars.com/kata/collatz-conjecture-3n-plus-1

var hotpo = function (n) {
    var counter = 0;
    while (n > 1) {
        counter++;
        n = n % 2 ? 3 * n + 1 : n / 2;
    }
    return counter;
}