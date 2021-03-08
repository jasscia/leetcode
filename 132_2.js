var minCut = function(s) {
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; --i) {
      for (let j = i + 1; j < n; ++j) {
          f[i][j] = s[i] == s[j] && f[i + 1][j - 1];
      }
  }

  function dfs(end){
    if(f[0][end]){return 0}
    let r =Number.MAX_SAFE_INTEGER
    for(let i=end-1;i>=0;i--){
      if(f[0][i]){
        r = Math.min(r,dfs(i)+1)
      }
    }
    return r
  }
  return dfs(n-1)
};

["aab",
"aa",
"aabaa",
"aaabaa"].forEach(s=>console.log(minCut(s)))