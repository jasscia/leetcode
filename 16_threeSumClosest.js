/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

  let res = Math.pow(2, 64)
  let length = nums.length
  for (let i = 0; i < length - 2; i++) {
      for (let j = i + 1; j < length -1; j++) {
          for (let k = j + 1; k < length; k++) {
              let sum = nums[i] + nums[j] + nums[k]
              if (Math.abs(res - target) > Math.abs(sum - target)) {
                  res = sum
              }
              
              if (res === target) {return res}
          }
      }
  }
  return res
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest2 = function(nums, target) {

  let res = Math.pow(2, 64)
  let map = {} //key: a+b, value: true or false
  let closeSum = []
  let length = nums.length
  
  for (let i = 0; i < length -1; i++) {
      let target2 = target - nums[i]
      if (map[target2]) {
          return target
      } else {
          for (value in map) {
              closeSum.push(parseInt(value) + nums[i])
          }
          for (let j = 0; j < i; j++) {
              let sum = nums[i] + nums[j]
              map[sum] = [i, j]
          }
      }
  }
    for (value in map) {
       closeSum.push(parseInt(value) + nums[length - 1])
    }
    closeSum.forEach(value => {
        if (Math.abs(value - target) < Math.abs(res - target)) {
            res = value
        }
    })
    return res
};