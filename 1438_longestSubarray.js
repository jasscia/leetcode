/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let rec = [nums[0], nums[0], 0]//max min abs
  let maxLength=0
  for (let left = 0, right = 0; right < nums.length;) {
    if (nums[right] >= rec[0]) {
      rec[0] = nums[right]
    } else if (nums[right] <= rec[1]) {
      rec[1] = nums[right]
    }
    rec[2] = rec[0] - rec[1]
    while (rec[2] > limit) {
      if (nums[left] >= rec[0]) {
        rec[0] = findMax(nums, left + 1, right)
      } else if (nums[left] <= rec[1]) {
        rec[1] = findMin(nums, left + 1, right)
      }
      rec[2] = rec[0] - rec[1]
      left++
    }
    right++
    maxLength = Math.max(maxLength, right-left)
  }
  return maxLength
};
function findMin(array, start, end) {
  return Math.min(...array.slice(start, end + 1))
}
function findMax(array, start, end) {
  return Math.max(...array.slice(start, end + 1))
}

[[[8,2,4,7],4],[[1,1,1,0,0,0,10,1,1,1,0],2],[[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3]].slice(0,10).forEach(([A,K])=>{
  console.log(longestSubarray(A,K))
})