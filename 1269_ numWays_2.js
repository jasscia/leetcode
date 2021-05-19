function numWays(steps, arrLen) {
  let dp=[1] //标示当在index位置时 可行的方案数量
  const mod = 1000000007
  for(let step=0;step<steps.length;step++){
    const newDp=[]
    for(let index=0;index<arrLen;index++){
      let v=dp[index]||0
      if(index+1<=arrLen-1){
        v+=(dp[inde+1]||0)
      }
      if(index-1>=0){
        v+=(dp[index-1] ||0)
      }
      newDp[index] = v % mode
    }
    dp = newDp
  }
  return dp[0]
}

var numWays = function(steps, arrLen) {
  const MODULO = 1000000007;
  let maxColumn = Math.min(arrLen - 1, steps);
  let dp = new Array(maxColumn + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= steps; i++) {
      const dpNext = new Array(maxColumn + 1).fill(0);
      for (let j = 0; j <= maxColumn; j++) {
          dpNext[j] = dp[j];
          if (j - 1 >= 0) {
              dpNext[j] = (dpNext[j] + dp[j - 1]) % MODULO;
          }
          if (j + 1 <= maxColumn) {
              dpNext[j] = (dpNext[j] + dp[j + 1]) % MODULO;
          }
      }
      dp = dpNext;
  }
  return dp[0];
};