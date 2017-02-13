// How much water do I need?
// https://www.codewars.com/kata/how-much-water-do-i-need

function countWater(l, n) {
    for (var i = 0; i < n; i++) {
        l *= 1.1;
    }
    return parseFloat(l.toFixed(2));
}

function howMuchWater(L, X, N) {
    return N > 2 * X ? 'Too much clothes' : N < X ? 'Not enough clothes' : N == X ? L : countWater(L, N - X);
}