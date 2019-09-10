/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var isNum = function(s) {
      return s !== ' ' && Number(s) === Number(s)
  }
  str = str.trim()
  if (str.length === 0) {
      return 0
  } else {
      let sign = 1
      let startId = -1;
      let num = 0;
      if (str[0] === '-' && isNum(str[1])) {
          sign = -1
          startId = 1
      } else if (str[0] === '+' && isNum(str[1])) {
          startId = 1
      } else if (isNum(str[0])) {
          startId = 0
      } else {
          return 0
      }
      num = str[startId]
      for (let i = startId + 1; i < str.length; i++) {
          if (!isNum(str[i])) {
              break
          } else {
              num = num * 10 + Number(str[i])
          }
      }
      num = num * sign
      if(sign == -1) {
          return Math.max(num, -1 * Math.pow(2, 31))
      }
      return Math.min(num, Math.pow(2, 31) - 1) 
  }
};