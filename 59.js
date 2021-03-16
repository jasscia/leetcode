
var generateMatrix = function(n) {
  const matrix=Array(n).fill(0).map(()=>Array(n).fill(0))
  let v=1
  let index=0
while(v<=n*n){
    top = index
    left = index
    bottom = n-1-index
    right=n-1-index
    for(let i=left;i<=right;i++){
        matrix[top][i]=v++
    }
    for(let j=top+1;j<=bottom;j++){
        matrix[j][right]=v++
    }
    if(top<bottom && left<right){
        for(let i=right-1;i>=left;i--){
            matrix[bottom][i]=v++
        }
        for(let j=bottom-1;j>top;j--){
            matrix[j][left]=v++
        }
    }
    index++
}
return matrix
};

[1,2,3,4,5].forEach(n=>console.log(generateMatrix(n)))