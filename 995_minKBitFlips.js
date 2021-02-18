/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
    let count = 0
    for(let i =0;i<=A.length - K;i++) {
      if(A[i]===0) {
        for(let j=i;j<i+K;j++){
          A[j] = A[j] ? 0 : 1
        }
        count++
      }
    }
    if(A.includes(0)) {
      return -1
    }
    return count
};

[[[0,1,0],1],[[0,1,0],2],[[1,1,0],1],[[1,1,0],2],[[0,0,0,1,0,1,1,0],3]].forEach(([A,K])=>{
  console.log(minKBitFlips(A,K))
})