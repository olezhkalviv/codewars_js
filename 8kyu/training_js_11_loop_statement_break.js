// Training JS #11: loop statement --break,continue
// https://www.codewars.com/kata/training-js-number-11-loop-statement-break-continue

function grabDoll(dolls) {
    var bag = [];
    for (doll of dolls) {
        if (doll != 'Hello Kitty' && doll != 'Barbie doll') {
            continue;
        }
        bag.push(doll);
        if (bag.length == 3) {
            break;
        }
    }
    return bag;
}