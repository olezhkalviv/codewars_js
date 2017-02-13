// Tip Calculator
// https://www.codewars.com/kata/tip-calculator

const tips = {
    "terrible": 0,
    "poor": 0.05,
    "good": 0.10,
    "great": 0.15,
    "excellent": 0.20
};

function calculateTip(amount, rating) {
    var tipsPercent = tips[rating.toLowerCase()];
    return tipsPercent >= 0 ? Math.ceil(amount * tipsPercent) : "Rating not recognised";
}