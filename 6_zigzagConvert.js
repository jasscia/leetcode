/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
      return s
  }
  if (s.length <= numRows) {
      return s
  }
  let res = ''
  for(let i = 1; i<= numRows && i <= s.length; i++) {
      res = res.concat(s[i - 1])
      for (let currId = i - 1; currId < s.length;) {
          let diff1 = 2 * (numRows - i + 1) - 2
          if (diff1 > 0) {
              if (currId + diff1 < s.length) {   
                  currId += diff1
                  res = res.concat(s[currId])
              } else {
                  break;
              }
          }
          let diff2 = 2 * (i - 1)
          if (diff2 > 0) {
              if ( currId + diff2 < s.length) {
                  currId += diff2
                  res = res.concat(s[currId])
              } else {
                  break
              }
          }
      }    
  }
  return res
};