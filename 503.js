/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const res = []
  const n = nums.length
  for(let i=0;i<n;i++){
    if(nums[i]<res[i-1]  && nums[i]>=nums[i-1]){
      res[i] = res[i-1]
    } else {
      let find = -1
      for(let j=i+1;j<i+1+n;j++){
        const index = j>n-1 ? j-n:j
        if(nums[index]>nums[i]){
          find=nums[index]
          break
        }
      }
      res[i]=find
    }
  }
  return res
};
console.log(nextGreaterElements([1,2,1]))
console.log(nextGreaterElements([5,4,3,2,1]))