let arr = [
  ["1", "2"],
  ["3", "4", ["5", ["6"], "7"]]
];

let arr2 = [1, [2, 3], [[]], [4, [5]], 6];

function isArrFlatten(arr) {
  return arr.reduce((acc, next) => {
    return acc.concat(Array.isArray(next) ? isArrFlatten(next) : next);
  }, []);
}

console.log(isArrFlatten(arr2));

let p = ["a", "c", "a", "d", "a", "p", "a", "d", "o", "p"];

function calculateCharFreq(arr) {
  let mapObj = {};
  for (let item of arr) {
    mapObj[item] = mapObj[item] ? mapObj[item] + 1 : 1;
  }
  return mapObj;
}
console.log(calculateCharFreq(p));
