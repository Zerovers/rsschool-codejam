let arr = [2, 3, 4, 1];
function sumOfOther(a) {
    let sum = a.reduce((a, e) => a + e);
    return a.map(e => sum - e);
}

console.log(sumOfOther(arr));


function sum(a, b) {
    return a + b;
}
function make() {
    let args = [...arguments];
    return function ret() {
        if (typeof arguments[0] === 'function') {
            args = args.reduce((a, e) => a + e);
            return args;
        }
        args = [...args, ...arguments];
        return ret;
    }
}

console.log(make(15)(34, 21, 666)(41)(sum));


let tree = { "value": 100, "left": { "value": 90, "left": { "value": 70 }, "right": { "value": 99 } }, "right": { "value": 120, "left": { "value": 110 }, "right": { "value": 130 } } };
let array = recursion(tree);

function recursion(tree) {
    let arr = [];
    let count = 0;
    rec(tree, count);
    return arr;

    function rec(tree, count) {
        if (tree.value) {
            if (!arr[count]) {
                arr[count] = [];
            }
            arr[count].push(tree.value);
        } else return;
        if (tree.left) {
            rec(tree.left, count + 1);
        }
        if (tree.right) {
            rec(tree.right, count + 1);
        }
    }
}

console.log(array); 
