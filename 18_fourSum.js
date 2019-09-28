var fourSum = function(nums, target) {
  let res = []
  let len = nums.length
  if (len < 4) {
      return res
  }
  nums = nums.sort((a, b) => a - b)
  
  let l = 0;
  while (l < len - 3) {
      let r = len - 1
      let numL, numR
      while(r - l > 2) {
          let subL = l + 1         
          let subR = r - 1
          numL = nums[l]
          numR = nums[r]
          
          while (subL < subR) {
              let numSubL = nums[subL]
              let numSubR = nums[subR]
              sum = numL + numSubL + numSubR + numR
              if (sum === target) {
                  res.push([numL, numSubL, numSubR, numR])
                  while(nums[subL] === numSubL) {
                      subL++
                  }
                  while(nums[subR] === numSubR) {
                      subR--
                  }
              } else if (sum < target) {
                  subL++
              } else if (sum > target) {
                  subR--
              }
          }
          while(nums[r] === numR) {
              r--
          }
      }
      while(nums[l] === numL) {
          l++
      }
  }
  return res
};