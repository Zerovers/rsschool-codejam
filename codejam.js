let arr = [2,3,4,1];
function sumOfOther(a) {
    let sum = a.reduce((a,e) => a + e);
    return a.map(e => sum - e);
}

console.log(sumOfOther(arr));


function sum(a, b) { 
    return a + b; 
 } 
function make(){ 
    let args = [...arguments]; 
    return function ret () { 
        if (typeof arguments[0] === 'function') {
            args = args.reduce((a,e) => a + e);
            return args;
        } 
    args = [...args,...arguments]; 
    return ret; 
   } 
 }

console.log(make(15)(34, 21, 666)(41)(sum));
