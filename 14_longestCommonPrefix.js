/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = ''
  if (strs.length === 0) {
      return ''
  } else if (strs.length === 1) {
      return strs[0]
  }
  for (let i = 0; i < strs[0].length; i++) {
      let s = strs[0][i]
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== s) {
              return res
          }
      }
      res += s
  }
  return res
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function(strs) {   
    
  function _common(a, b) {
      let m = a.length
      let n = b.length
      let less =  Math.min(m, n)
      for (let i = 0; i < less; i++) {
          if (a[i] !== b[i]) {
              return a.substring(0, i)
          }
      }
      return a.substring(0, less)
  }
  
  function _prefix(strs, start, end) {
      if (start === end) {
          return strs[start]
      } else {
          let mid = Math.floor(start / 2 + end / 2)
          return _common(_prefix(strs, start, mid), _prefix(strs, mid + 1, end))
      }
  }
  
  let res = ''
  if (strs.length === 0) {
      return ''
  } else if (strs.length === 1) {
      return strs[0]
  } else {
      return _prefix(strs, 0, strs.length - 1)
  }
};


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix3 = function(strs) {
  function _hasCommon (sId) {
      let s = strs[0].substring(0, sId + 1)
      for (let i = 1; i < strs.length; i++) {
          if (strs[i].substring(0, sId + 1) !== s) {
              return false
          }
      }
      return true
  }
  function _prefix(s, l, r) {
      if (r - l <= 1) {
          if (_hasCommon(r)) {
              return s.substring(0, r+1)
          }
          if (r !== l && _hasCommon(l)) {
              return s.substring(0, l+1)
          }
          else {
              return ''
          }
      } else {
          let mid = Math.floor(l/2 + r/2)
          if (_hasCommon(mid)) {
              return _prefix(s, mid, r)
          } else {
              return _prefix(s, l, mid-1)
          }
      }
  }
   
   let res = ''
   if (strs.length === 0) {
       return ''
   } else if (strs.length === 1) {
       return strs[0]
   } else {
       return _prefix(strs[0], 0, strs[0].length - 1)
   }
};