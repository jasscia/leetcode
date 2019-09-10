/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // let ret = [0, -1]
  let ret = 0
  let map = {}
  for (let i = 0, j = 0; (i <= j) && (j < s.length);) {
      if(map[s[j]]) {
          delete map[s[i]]
          i++
      } else {
          // if ((ret[1] - ret[0]) < (j-i)) {
          //     ret = [i, j]
          // }
         ret = Math.max(ret, j - i + 1)
         map[s[j]] = true
         j++
      }
  }
  return ret
  // return (ret[1] - ret[0] + 1)
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function(s) {
  // let ret = [0, -1]
  let ret = 0
  let map = {}
  for (let i = 0, j = 0; j < s.length;) {
      if(map[s[j]]) {
          while (i < j) {
              delete map[s[i]]
              if(s[i] === s[j]) {
                  i++
                  break;
              } else {
                  i++
              }
          }
      } else {
          // if ((ret[1] - ret[0]) < (j-i)) {
          //     ret = [i, j]
          // }
         ret = Math.max(ret, j - i + 1)
      }
     map[s[j]] = true
     j++
  }
  return ret
  // return (ret[1] - ret[0] + 1)
};