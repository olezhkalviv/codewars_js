// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
// https://www.codewars.com/kata/they-say-that-only-the-name-is-long-enough-to-attract-attention-they-also-said-that-only-a-simple-kata-will-have-someone-to-solve-it-this-is-a-sadly-story-number-1-are-they-opposite

function isOpposite(s1, s2) {
    return s1.length > 0 && s1.toLowerCase() == s2.toLowerCase() && s1.split('').every((c, i) => c != s2[i]);
}