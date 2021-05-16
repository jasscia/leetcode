function numWays(steps, arrLen) {
  const memery = {}
  const mod = 1000000007
  function dp(steps, curr) {
    const key = steps + '_' + curr
    if (key in memery) {
      return memery[key]
    } else if (steps === 0) {
      memery[key] = curr === 0 ? 1 : 0
    } else {
      memery[key] = dp(steps - 1, curr)

      if (curr < arrLen - 1) {
        memery[key] += dp(steps - 1, curr + 1)
      }
      if (curr > 0) {
        memery[key] += dp(steps - 1, curr - 1)
      }
      memery[key] %= mod
    }
    return memery[key]
  }
  return dp(steps, 0)
}