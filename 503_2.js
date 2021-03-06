/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length
  const res = Array(n).fill(-1)
  const stack = []
  for(let i=0;i<2*n - 1;i++){
    while(stack.length && nums[peek(stack)]<nums[i%n]){
      res[peek(stack)] =  nums[i%n]
      stack.pop()
    }      
    stack.push(i%n)
  }
  return res
};
function peek(stack){
  return stack[stack.length-1]
}
console.log(nextGreaterElements([1,2,1]))
console.log(nextGreaterElements([5,4,3,2,1]))