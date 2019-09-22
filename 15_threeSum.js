/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// n^3
var threeSum = function(nums) {
  if (nums.length < 3) {
      return []
  }
  var _sortArray = function(array) {
      return array.sort().join(',')
  }
  
  let res = {}
  let length = nums.length
  for (let i = 0; i < length - 2; i++) {
      for (let j = i + 1; j < length -1; j++) {
          for (let k = j + 1; k < length; k++) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                  let key = _sortArray([nums[i], nums[j], nums[k]])
                  if (!res.key) {
                      res[key] =  true
                  }                   
              }
          }
      }
  }
  return Object.keys(res).map((item) => {
      return item.split(',')
  })
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
      return []
  }
  
  let result = {}
  let map = {}
  let length = nums.length
  
  map[nums[0] + nums[1]] = [[nums[0], nums[1]].sort().join(',')]

  for (let i = 2; i < length; i++) {
      let target = 0 - nums[i]
      if (map[target]) {
          map[target].forEach((item) => {
              let res = [...item.split(','), nums[i]].sort()
              let key = res.join(',')
              result[key] = result[key] || res
          })
      }
      for (let j = 0; j < i; j++) {
          let key = nums[i] + nums[j]
          if (map[key]) {
              let skey = [nums[j], nums[i]].sort().join(',')
              if (!map[key].includes(skey)) {
                  map[key].push(skey)
              }
          } else {
              map[key] = [[nums[j], nums[i]].sort().join(',')]
          }
      }
  }
  return Object.values(result)
};