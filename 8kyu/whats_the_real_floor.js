// What's the real floor?
// https://www.codewars.com/kata/whats-the-real-floor

function getRealFloor(n) {
    return n <= 0 ? n : n - (n < 13 ? 1 : 2);
}