/**
 * @param {number[][]} A
 * @return {number[][]}
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  const n = A.length;
  A.forEach((_,index)=>{
    let i =0;
    let j=n-1;
    while(i<=j){
      if(A[index][i]===A[index][j]) {
        A[index][i] = A[index][j] = 1^A[index][i]
      }
      i++
      j--
    }
  })
  return A
};

[[[1,1,0],[1,0,1],[0,0,0]]].forEach(A=>{
  console.log(flipAndInvertImage(A))
})