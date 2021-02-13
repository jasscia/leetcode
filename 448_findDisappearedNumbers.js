/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for(let i=0;i<nums.length;i++) {
    while(nums[nums[i]-1] !== nums[i]){
      swap(nums, nums[i]-1, i)
    }
  }
  const result =[]
  nums.forEach((value, index)=>{
    if(value!==index+1) {
      result.push(index+1)
    }
  })
  return result
};
function swap(nums, i,j){
  [nums[j],nums[i]] = [nums[i],nums[j]]
}

[[4,3,2,7,8,2,3,1]].forEach(v=>{
  console.log(findDisappearedNumbers(v))
})