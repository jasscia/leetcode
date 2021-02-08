/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let  count = 1
  for(let i=0;i<nums.length-1;i++) {
    if(nums[i] > nums[i+1]) {
      count--
      if(count<0) {
        return false
      }
      if(i>0 && nums[i + 1] < nums[i - 1]) {
        nums[i+1]=nums[i]
      }
    }
  }
  return true
};
[[5,7,1,8],[3,4,2,3],[4,2,3],[4,2,1]].slice(0,10).forEach((s)=>{
  console.log(checkPossibility(s))
})