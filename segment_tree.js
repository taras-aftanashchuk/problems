// Given a segment tree where each parent node contains the sum of its child elements.
// The entire tree is stored in a linear array.
// 
// Write a script to calculate the sum of internal elements (non-leaf nodes).
// 
// In the original problem, the additional task is to construct a graph from the given array (16 elements in this case).
//
//                              36
//               ┌───────────────┴─────────────┐
//              10                            26
//       ┌───────┴──────┐              ┌───────┴──────┐
//       3              7             11              15
//   ┌───┴──┐       ┌───┴──┐       ┌───┴──┐       ┌───┴──┐
//   1      2       3      4       5      6       7      8
// ┌─┴─┐  ┌─┴─┐   ┌─┴─┐  ┌─┴─┐   ┌─┴─┐  ┌─┴─┐   ┌─┴─┐  ┌─┴─┐
// 0   1  1   1   2   1  3   1   2   3  3   3   5   2  5   3
const arr = [
                        36,
             10,                     26,
        3,          7,         11,         15,
      1,   2,     3,   4,    5,    6,    7,    8,
    0, 1, 1, 1, 2, 1, 3, 1, 2, 3, 3, 3, 5, 2, 5, 3 // input array
]

const length = 16

function getIndex(i) {
    return length - 1 + i;
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

const calc = (i, j, half = length / 2) => {
    if (i === j) {
        return arr[getIndex(i)];
    }
    if (i % 2 === 1) {
        return calc(i + 1, j, half) + arr[getIndex(i)];
    }
    if (j % 2 === 0) {
        return calc(i, j - 1, half) + arr[getIndex(j)];
    }

    const sumIndex = ((getIndex(i) + 1) / (j - i + 1)) - 1;

    if (isFloat(sumIndex)) {
        let left, right;
        if (i <= half) {
            left = calc(i, half - 1, half - half / 2);
        } else {
            left = -calc(half - 1, i, half + half / 2);
        }

        if (j >= half) {
            right = calc(half, j, half + half / 2);
        } else {
            right = -calc(j, half, half - half / 2);
        }

        return left + right;
    }

    return arr[sumIndex];
}

console.log(calc(0, 15)) // 36
console.log(calc(0, 3)) // 3
console.log(calc(0, 4)) // 5