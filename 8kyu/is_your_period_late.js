// Is your period late
// https://www.codewars.com/kata/is-your-period-late

function periodIsLate(last, today, cycleLength) {
    return today > last.setDate(last.getDate() + cycleLength);
}

function periodIsLate(last, today, cycleLength) {
    return (today - last) / 86400000 > cycleLength;
}