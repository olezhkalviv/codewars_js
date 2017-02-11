// Is the date today
// https://www.codewars.com/kata/is-the-date-today

function isToday(date) {
    return date.toDateString() == new Date(Date.now()).toDateString();
}