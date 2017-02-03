// Name on billboard
// https://www.codewars.com/kata/name-on-billboard

function billboard(name, price = 30) {
    var sum = 0;
    for (i = 0; i < name.length; i++)
        sum += price;
    return sum;
} 