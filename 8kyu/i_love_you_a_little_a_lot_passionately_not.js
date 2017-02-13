// I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all

var love = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

function howMuchILoveYou(nbPetals) {
    return love[(nbPetals - 1) % 6];
}