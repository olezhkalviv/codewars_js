// Generate user links
// https://www.codewars.com/kata/generate-user-links

function generateLink(user) {
    return "http://www.codewars.com/users/" + encodeURIComponent(user);
}