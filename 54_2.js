/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res=[]
  const m=matrix.length;
  const n=matrix[0].length
  let p=0
  while(p<=m/2&&res.length<m*n){
      for(let i=p;i<=n-p-1;i++){
          res.push(matrix[p][i])
      }
      for(let j=p+1;j<=m-p-2;j++){
          res.push(matrix[j][n-p-1])
      }
      if(p<m-p-1){
          for(let i=n-p-1;i>=p;i--){
              res.push(matrix[m-p-1][i])
          }
      }
      if(p<n-p-1){
          for(let j=m-p-2;j>=p+1;j--){
              res.push(matrix[j][p])
          }
      }
      p++
  }
  return res
};