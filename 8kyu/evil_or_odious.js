// Evil or Odious
// https://www.codewars.com/kata/evil-or-odious

function evil(n) {
    return n.toString(2).replace(/0/g, '').length % 2 ? "It's Odious!" : "It's Evil!";
}