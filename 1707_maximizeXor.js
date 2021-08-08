/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function (nums, queries) {
  res = []
  queries.forEach(([x,m])=>{
    let max = -1
    for (let j = 0; j < nums.length; j++) {
      const n = nums[j]
      if (n <= m) {
        max = Math.max(max, x ^ n)
      }
    }
    res.push(max)
  })
  return res
};

//[3,3,7]
console.log(maximizeXor([0, 1, 2, 4, 3], [[3, 1], [1, 3], [5, 6]]))

// [15,-1,5]
console.log(maximizeXor([5,2,4,6,6,3],  [[12,4],[8,1],[6,3]]))