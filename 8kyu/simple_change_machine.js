// Simple Change Machine
// https://www.codewars.com/kata/simple-change-machine

function changeMe(moneyIn) {
    var onePound = "20p 20p 20p 20p 20p ";
    switch (moneyIn) {
        case "20p": return "10p 10p";
        case "50p": return "20p 20p 10p";
        case "£1": return onePound.slice(0,-1);
        case "£2": return onePound.repeat(2).slice(0,-1);
        case "£5": return onePound.repeat(5).slice(0,-1);
        default: return moneyIn;
    }
}