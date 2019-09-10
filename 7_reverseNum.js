/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x > Math.pow(2, 31) -1) {
     return 0
  } else if (x < -1 * Math.pow(2, 31)) {
     return 0
  }  
  
  var reverse2 = function(x) {
      let res = 0;
      while(x > 0) {
          let mod = x % 10
          x = Math.floor(x / 10)
          res = res * 10 + mod
          if (res > Math.pow(2, 31) -1) {
             return 0
          }
      }
      return res
  }
  
  if (x < 0) {
      return -1 * reverse2( -1 *x)
  }
  if (x % 10 === 0) {
      return reverse2(x/10)
  }
  return reverse2(x)
};