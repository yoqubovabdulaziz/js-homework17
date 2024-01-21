// Map va WeakMap

// 1.

// let obj = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
// ]);

// Map.prototype.deleteMany = function (...rest) {
//   for (const el of rest) {
//     this.delete(el);
//   }
//   return this;
// };

// console.log(obj.deleteMany("a", "c"));

// 2.

// let obj = new Map([
//   ["a", 2],
//   ["b", 5],
//   ["c", 3],
// ]);

// let mapSum = (ob) => {
//   let sum = 0
//   ob.forEach(el => {
//     sum+=el
//   });
//   return sum
// };

// console.log(mapSum(obj));

// 3.

// let map1 = new Map([
//   ["apple", 1],
//   ["banana", 2],
//   ["orange", 3],
// ]);
// let map2 = new Map([
//   ["apple", 4],
//   ["orange", 5],
//   ["grape", 6],
// ]);

// let getMapIntersection = (obj1, obj2) => {
//   let res = new Map([...obj1, ...obj2])
//   for (const k of res.keys()) {
//     console.log(k);
//     if (obj1.has(k) && obj2.has(k)) {
//       res.delete(k)
//     }
//   }
//   return res;
// };

// console.log(getMapIntersection(map1, map2));

// 4.******************************************************

// class WeakMap extends Map {
//   get size() {
//       let res = 0;
//       for (let i of this) {
//           count++;
//       }
//       return res;
//   }
// }

// let obj = new WeakMap([
//   [{ id: 1 }, 'John'],
//   [{ id: 2 }, 'Jane'],
//   [{ id: 3 }, 'Alice']
// ]);

// console.log(obj.size);

// Set va WeakSet

// 5.

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// const setUnion = (se1,se2) => {
//   return new Set([...se1, ...se2])
// };

// console.log(setUnion(set1, set2));

// 6.

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// const setIntersection = (se1, se2) => {
//   let res = new Set([...se1, ...se2]);
//   for (const k of res) {
//     if (!(se1.has(k) && se2.has(k))) {
//       res.delete(k);
//     }
//   }
//   return res;
// };

// console.log(setIntersection(set1, set2));

// 7.

// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);

// const checkSetSubset = (se1, se2) => {
//   let res = false;
//   for (const k of se1) {
//     if (se2.has(k)) {
//       res = true;
//     } else {
//       res = false;
//       break;
//     }
//   }
//   return res;
// };

// console.log(checkSetSubset(set1, set2));

// Spread

// 8.

// let arr = [1, 2, 2, 3, 4, 4, 5]

// const removeDuplicates = (ar) => {
//   return [...new Set([...arr])]
// };

// console.log(removeDuplicates(arr));

// 9.

// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];

// const mergeArr = (ar1, ar2) => {
//   return [...ar1, ...ar2];
// };

// console.log(mergeArr(arr1, arr2));

// 10.

// const concatArrays = (...rest) => {
//   let res = [];
//   for (const el of rest) {
//     res = [...res, ...el];
//   }
//   return res;
// };

// console.log(concatArrays([1, 2], [3, 4], [5, 6]));
