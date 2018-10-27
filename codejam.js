let arr = [2,3,4,1];
function sumOfOther(a) {
    let sum = a.reduce((a,e) => a + e);
    return a.map(e => sum - e);
}

console.log(sumOfOther(arr));