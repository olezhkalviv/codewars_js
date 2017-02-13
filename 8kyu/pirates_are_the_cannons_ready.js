// Pirates!! Are the Cannons ready!??
// https://www.codewars.com/kata/pirates-are-the-cannons-ready

const cannonsReady = (gunners) => {
    return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}