/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((r,v)=>r+v,0)
  const sumB = B.reduce((r,v)=>r+v,0)
  const diff = (sumA-sumB)/2
  A.sort((a,b)=>a>b)
  B.sort((a,b)=>a>b)
  for(let i=0;i<A.length;i++) {
    for(let j=0;j<B.length;j++){
      if(A[i]-B[j]===diff) {
        return [A[i],B[j]]
      } else if(A[i]-B[j]<diff){
        break
      }
    }
  }
};

[[[1,1],[2,2]],[[8,73,2,86,32], [56,5,67,100,31]]].forEach(([s,k])=>{
  console.log(fairCandySwap(s,k))
})