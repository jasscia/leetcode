/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  if (!k || !nums.length || k>nums.length) return 
  const result=[]
  const even = (k&1)===0
  const start = even ? k/2-1 : (k-1)/2
  const end=even ? start+1:start
  let array=[]
  function add(value){
    let left=0;
    let right=array.length-1;
    while(left <= right){
      const mid=left +((right-left)/2 | 0)
      if(array[mid]>value) {
        right=mid-1
      }else {
        left=mid+1
      }
    }
    array.splice(left,0,value)
  }
  function del(value){
    let index = array.indexOf(value)
    array.splice(index, 1)
  }
  function getMid(){
    return (array[start]+array[end])/2
  }
  for(let i=0;i<nums.length;i++) {
    add(nums[i])
    if(i>=k) {
      del(nums[i-k])
    }
    if(i>=k-1){
      result.push(getMid())
    }
  }
  return result
};

[[[1,3,-1,-3,5,3,6,7],4]].forEach(([s,k])=>{
  console.log(medianSlidingWindow(s,k))
});