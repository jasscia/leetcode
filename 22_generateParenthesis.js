/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = ['(']
  for (let i=2; i<=2*n; i++) {
      let len = res.length
      for (let j = 0; j < len; j++) {
          let str = res.shift()
          if (i !== 2*n) {
              res.push(str + '(')
          } 
          res.push(str + ')')
      }
  }
  
  
  for(let i = res.length - 1; i >= 0; i--) {
      if (!isParenth(res[i])) {
          res.splice(i, 1)
      }
  }
  return res
  
  
  function isParenth(str) {
      let i = 0;
      rec = []
      while(str[i]) {
          if (str[i] === '(') {
              rec.push('(')
          } else {
              if(rec.pop() !== '(') {
                  return false
              }
          }
          i++
      }
      return rec.length === 0
  }
};



/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis2 = function(n) {
  let res = [{str: '(', open: 1, close: 0}]
  for (let i=2; i<=2*n; i++) {
      let len = res.length
      for (let j = 0; j < len; j++) {
          let {open, close, str} = res.shift()
          if (open > close) {
              res.push({str: str + ')', open, close: close + 1})
          }
          if (open < n) {
              res.push({str: str + '(', open: open + 1, close})
          }
          
      }
  }
  
  let ret = []
  for(let i = res.length - 1; i >= 0; i--) {
      if (isParenth(res[i].str)) {
          ret.push(res[i].str)
      }
  }
  return ret
  
  
  function isParenth(str) {
      let i = 0;
      rec = []
      while(str[i]) {
          if (str[i] === '(') {
              rec.push('(')
          } else {
              if(rec.pop() !== '(') {
                  return false
              }
          }
          i++
      }
      return rec.length === 0
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis3 = function(n) {
  let res = []
  backtrack('', 0, 0)
  return res
  function backtrack(str, open, close) {
      if (str.length === 2 * n) {
          res.push(str)
          return
      }
      if (open > close) {
          backtrack(str + ')', open, close + 1)
      }
      if (open < n) {
          backtrack(str + '(', open + 1, close)
      }
  }
};