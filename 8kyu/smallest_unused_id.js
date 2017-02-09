// Smallest unused ID
// https://www.codewars.com/kata/smallest-unused-id

function nextId(ids) {
    for (i = 0; i <= ids.length; i++) {
        if (ids.indexOf(i) == -1) {
            return i;
        }
    }
}