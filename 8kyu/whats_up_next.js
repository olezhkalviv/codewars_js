// What's up next?
// https://www.codewars.com/kata/whats-up-next

function nextItem(xs, item) {
    var found = false;
    for (value of xs) {
        if (found) {
            return value;
        }
        if (value == item) {
            found = true;
        }
    }
}