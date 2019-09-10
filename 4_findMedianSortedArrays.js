/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  if(m > n) {
      let temp = nums1
      nums1 = nums2
      nums2 = temp
      temp = m
       m = n
       n = temp
  }
  
  let total = m + n
  let halfLen = Math.ceil(total / 2)
  let iMin = 0
  let iMax = m
  while(iMin <= iMax) {
      let i = Math.floor((iMin + iMax) / 2)
      let j = halfLen - i
      if (i < iMax && nums1[i] < nums2[j - 1]) {
          iMin = i + 1 // i too small
      } else if (i > iMin && nums1[i - 1] > nums2[j]) {
          iMax = i - 1 // i too big
      } else { // i ok
          let maxLeft, minRight
          if (i === 0) {
              maxLeft = nums2[j - 1]
          } else if (j === 0) {
              maxLeft = nums1[i - 1]
          } else {
              maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
          }
          if ((m + n) % 2 === 0) {
              if (i === m) {
                  minRight = nums2[j]
              } else if (j === n) {
                  minRight = nums1[i]
              } else {
                  minRight = Math.min(nums1[i], nums2[j])
              }
              return (maxLeft + minRight) / 2
          } else {
              return maxLeft
          }
      }
   }
  return 0
};