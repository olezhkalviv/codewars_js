// Safen User Input Part I - htmlspecialchars
// https://www.codewars.com/kata/safen-user-input-part-i-htmlspecialchars

function htmlspecialchars(formData) {
    var data = '';
    formData.split('').forEach((v) => {
        data += v == '&' ? '&amp;' : v == '<' ? '&lt;' : v == '>' ? '&gt;' : v == '"' ? '&quot;' : v;
    });
    return data;
}