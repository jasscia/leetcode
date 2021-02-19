/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
    let count = 0
    let array=[];
    let sum=0
    let i=0
    for(;i<=A.length-K;i++) {
      if(((sum+A[i])&1)===0) {
        array.push(1)
        count++
        sum+=1
      } else {
        array.push(0)
      }
      if(i>=K-1) {
        sum -= array.shift()||0
      }
    }
    //console.log(i,array,sum,count)
    for(;i<A.length;i++){
      if(((sum+A[i])&1)===0) {
        return -1
      } else {
        if(A.length-i<=array.length){
          sum-=array.shift()||0
        }
      }
    }
    return count
};

[[[0,0,1],3],[[0,1,0],2],[[1,1,0],1],[[1,1,0],2],[[0,0,0,1,0,1,1,0],3]].slice(1,10).forEach(([A,K])=>{
  console.log(minKBitFlips(A,K))
})