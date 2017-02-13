// Well of Ideas - Easy Version
// https://www.codewars.com/kata/well-of-ideas-easy-version

function well(x){
    var le = x.filter(s => s == 'good').length;
    return le ? le > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}