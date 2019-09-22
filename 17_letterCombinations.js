/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var create = function(curr, table) {
      let res = []
      if (curr.length === 0) {
          return table
      }
      for (let i = 0; i < table.length; i++) {
          for (let j = 0; j < curr.length; j++) {
              res.push(curr[j] + table[i])
          }
      }
      return res
  }
  var conf = {
      1: '',
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
  }
  let res = []
  for (let i = 0; i < digits.length; i++) {
      res = conf[digits[i]] ? create(res, conf[digits[i]]) : res
  }
  return res
};