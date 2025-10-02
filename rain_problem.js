// https://algocademy.com/link/?problem=trapping-rain-water&lang=js&solution=1

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let water  = 0;
    let left = 0;
    let leftSize = 0;
    let leftH = 0;
    let leftSQ = 0;

    let temp = 0;
    let tempSize = 0;
    let tt = false
    let tempSQ = 0
    while (left < height.length) {
        const currentLeft = height[left];

        if (currentLeft >= leftH) {
            water += (leftSize * leftH - leftSQ)
            leftSQ = 0;
            leftH = currentLeft;
            leftSize = 0;
            temp = 0
            tt = false
            tempSize = 0
            tempSQ = 0
        } else {
            leftSize++;
            leftSQ += currentLeft;
        }

        if (currentLeft >= temp && currentLeft !== leftH){
            temp = currentLeft
            tempSize = leftSize
            tempSQ = leftSQ
        } else {
            tt = true
        }

        left++
    }

    water += (tempSize * leftH - (leftH - temp) * tempSize - tempSQ)

   return water
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9