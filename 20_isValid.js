/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let leftList = {'(':')' , '{':'}' , '[':']'}
  let rightList = {')': 1 , '}': 2 , ']':3}
  let res = []
  for (let i = 0; i < s.length; i++) {
      let sign = s[i]
      if (leftList[sign]) {
          res.push(sign)
      } else if (rightList[sign]) {    
          if (res.length === 0) {return false}
          let sign2 = res.pop()
          if (leftList[sign2] !== sign) {
              return false
          }
      }
  }
  return res.length === 0
};