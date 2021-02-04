/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max=0;
  let currentTotal=0
  for(let i=0;i<nums.length;i++) {
    if(i<k) {
      max+=nums[i]
      currentTotal=max
    } else {
      currentTotal -=nums[i-k]
      currentTotal += nums[i]
      max=Math.max(currentTotal,max)
    }
  }
  return max/k
};

[[[1,12,-5,-6,50,3],4]].forEach(([s,k])=>{
  console.log(findMaxAverage(s,k))
});