/**
 * @param {string} s
 * @return {string}
 */
//o(n^2)
var longestPalindrome = function(s) {
  let isPalindromic = function(s, start, end) {
      if (start === end) {
          return true
      } else {
          for(let i = start, j = end; i <= j; i++, j--) {
              if (s[i] !== s[j]) {
                  return false
              }
          }
          return true
      }
  }
  let ret = [0, 0]
  for (let i = 0; i< s.length-1; i++) {
      for (let j = s.length -1; j>=i; j--) {
          if (j-i <= ret[1]-ret[0]) {
              break
          }
          if (s[i] === s[j] && isPalindromic(s, i, j)) {
              ret = [i, j]
          }
      }
  }
  return s.substring(ret[0], ret[1] + 1)
};