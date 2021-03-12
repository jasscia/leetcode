var calculate = function (s) {
  const stack = []
  const tempStack = []
  const n = s.length;
  let i = 0;
  while (i < n) {
    if (s[i] === ' ') {
      i++
    } else if (['+', '-', '*', '/', '('].includes(s[i])) {
      stack.push(s[i])
      i++
    } else if (s[i] === ')') {
      while (true) {
        let s = stack.pop()
        if (s === '(') {
          break
        }
        tempStack.unshift(s)
      }
      stack.push(cal(tempStack))
      i++
    } else {
      let num = 0
      while (i < n) {
        if (s[i] === ' ') {
          i++
        } else if (!isNaN(Number(s[i]))) {
          num = num * 10 + (Number(s[i]))
          i++
        } else {
          break
        }
      }
      stack.push(num)
    }
  };
  return cal(stack);
}

function cal(stack) {
  let tempStack = []
  let s = ''
  while ((s = stack.shift()) !==undefined) {
    if (s === '*') {
      const a = tempStack.pop()
      const b = stack.shift()
      tempStack.push(a * b)
    } else if (s === '/') {
      const a = tempStack.pop()
      const b = stack.shift()
      tempStack.push(a / b)
    } else {
      tempStack.push(s)
    }
  }
  console.log('stack',tempStack.join(''))
  let ret = 0
  for (let i = 0; i < tempStack.length; i++) {
    if (tempStack[i] === '+') {
      ret += tempStack[++i]
    } else if (tempStack[i] === '-') {
      console.log(ret, i,tempStack[i])
      ret -= tempStack[++i]
    } else {
      ret = tempStack[i]
    }
  }
  return ret
}
["0-2147483647","3+2*2", " 3/2 ", " 3+5 / 2 ","( 3+5 / 2 )"].slice().forEach(s => console.log(calculate(s)))