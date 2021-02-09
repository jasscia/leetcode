/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A,K) {
  return fn(A,K)-fn(A,K-1)
}
function fn(A, K) {
  let res = 0
  let freq = {}
  let count = 0
  let left=0;
  let right=0;
  while(right<A.length) {
    if(!freq[A[right]]) {
      freq[A[right]]=0
      count++
    }
    freq[A[right]]++
    right++
    while(count>K) {
      freq[A[left]]--
      if(!freq[A[left]]) {
        count--
      }
      left++
    }
    res+=(right-left)
  }
  return res
};

[[[1,2,1,2,3],2],[[1,2,1,2,3],3]].slice(0,10).forEach(([s,k])=>{
  console.log(subarraysWithKDistinct(s,k))
})