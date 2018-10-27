const arr = [2, 3, 4, 1];
function sumOfOther(a) {
  const sum = a.reduce((с, e) => с + e);
  return a.map(e => sum - e);
}
sumOfOther(arr);
// console.log(sumOfOther(arr));
// function sum(a, b) {return a + b;}
function make(...arg) {
  let args = arg;
  return function ret(...a) {
    args.push(...a);
    for (let i = 0; i < args.length; i += 1) {
      if (typeof args[i] === 'function') {
        args.pop();
        args = args.reduce((x, e) => x + e);
        return args;
      }
    }
    return ret;
  };
}
make();
// console.log(make(15)(34, 21, 666)(41)(sum));
function recursion(tree) {
  const ar = [];
  const count1 = 0;
  function rec(tree1, count) {
    if (tree1.value) {
      if (!ar[count]) {
        ar[count] = [];
      }
      ar[count].push(tree1.value);
    } else return;
    if (tree1.left) {
      rec(tree1.left, count + 1);
    }
    if (tree1.right) {
      rec(tree1.right, count + 1);
    }
  }
  rec(tree, count1);
  return ar;
}
recursion();
// let bintree = { 'value': 100, "left": { 'value': 90, 'left':
// { 'value': 70 }, 'right': { 'value': 99 } }, 'right':
// { 'value': 120, 'left': { 'value': 110 }, 'right':
// { 'value': 130 } } };
// let array = recursion(bintree);
// console.log(array);
