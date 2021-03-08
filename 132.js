var minCut = function(s) {
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; --i) {
      for (let j = i + 1; j < n; ++j) {
          f[i][j] = s[i] == s[j] && f[i + 1][j - 1];
      }
  }

  const ff = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < n; ++i) {
      if (f[0][i]) {
          ff[i] = 0;
      } else {
          for (let j = 0; j < i; ++j) {
              if (f[j + 1][i]) {
                  ff[i] = Math.min(ff[i], ff[j] + 1);
              }
          }
      }
  }
  return ff[n - 1];
};


["aab","aa","aabaa","aaabaa"].forEach(s=>console.log(minCut(s)))