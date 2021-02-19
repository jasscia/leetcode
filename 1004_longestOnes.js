/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let count = 0
  let max=0
  let left=0
  let right=left
  while(right<A.length){
    if(A[right]===0){
      count++
    }
    while(count>K) {
      if(A[left]===0){
        count--
      }
      left++
    }
    right++
    max=Math.max(max, right-left)
  }
  return max
};
[[[1,1,1,0,0,0,1,1,1,1,0],2],[[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3]].forEach(([A,K])=>{
  console.log(longestOnes(A,K))
})