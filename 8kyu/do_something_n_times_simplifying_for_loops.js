// Do something "n.times" (Simplifying "for" loops)
// https://www.codewars.com/kata/do-something-n-dot-times-simplifying-for-loops

Number.prototype.times = function (f) {
    for (var i = 0; i < this; i++) {
        f.call(this, i);
    }
}