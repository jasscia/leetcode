/**
 * @param {string} s
 * @return {number}
 */
 var strangePrinter = function(s) {
   const n = s.length
  const f=Array(n).fill(0).map(()=>Array(n).fill(0))
  for(let i=n-1;i>=0;i--){
    f[i][i]=1
    for(let j=i+1;j<n;j++){
      if(s[i]===s[j]){
        f[i][j] = f[i][j-1]
      } else {
        let min = Infinity
        for(let k=i;k<j;k++){
          min = Math.min(min,f[i][k]+f[k+1][j])
        }
        f[i][j] = min
      }
    }
  }
  return f[0][n-1]
};

s='aaabb'
console.log(strangePrinter(s))