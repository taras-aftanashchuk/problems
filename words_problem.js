// Given a string composed of 2 words, and the first word’s length,
//   Implement a method to reverse the 2 words in the string.
//
//   For example:
//   str = [a,b,c,1,2,3,4,5]
// firstWordLength = 3
// stringsSwap(str, firstWordLength) → [1,2,3,4,5,a,b,c]
//
// Requirements
// Solution needs to be in place, O(1) extra memory
// Needs to be at O(N) run time complexity
//

function stringsSwap(arr, firstWordLength) {
    const len2 = arr.length - firstWordLength;
    let j = len2;
    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const t = arr[j]
        arr[j] = temp;
        if (j === 0 && firstWordLength % 2 === 0) {
            temp = arr[1]
            j = len2 + 1
        } else {
            if (j >= firstWordLength) {
                j = j - firstWordLength
            }
            else {
                j = j + len2
            }
            temp = t;
        }
    }

    return arr;
}

console.log(JSON.stringify(stringsSwap(['a', 'b', 'c', 1, 2, 3, 4, 5, 6, 7], 3)))
console.log(JSON.stringify(stringsSwap(['a', 'b', 'c', 'd', 1, 2, 3, 4, 5, 6, 7], 4)))