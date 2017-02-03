// Implement a Filter function
// https://www.codewars.com/kata/implement-a-filter-function

Array.prototype.filter = function (fun) {
    var len = this.length;
    var res = [];
    var thisArg = void 0;
    for (var i = 0; i < len; i++) {
        var val = this[i];
        if (fun.call(thisArg, val)) {
            res.push(val);
        }
    }
    return res;
};