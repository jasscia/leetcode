/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
      return []
  }
  
  let res = []
  let length = nums.length
  
  nums = nums.sort((a, b) => {
      return a-b
  })
  
  for (let i = 0; i<length -2;) {
      let numI = nums[i]
      let l = i + 1;
      let r = length - 1
      while (l < r) { 
          let numL = nums[l]
          let numR = nums[r]
          let sum = numI + numL + numR
          if (sum === 0) {
              res.push([numI, numL, numR])
              while(nums[l] === numL) {
                  l++
              }
              while(nums[r] === numR) {
                  r--
              }
          } else if (sum > 0) {
              r--
          } else if (sum < 0) {
              l++
          }
      }
      while(nums[i] === numI) {
          i++
      }
  }
      
  return res
}