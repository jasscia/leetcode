var calculate = function (s) {
  const ops = [1];
  let sign = 1;

  let ret = 0;
  const n = s.length;
  let i = 0;
  while (i < n) {
    if (s[i] === '+') {
      sign = ops[ops.length - 1]
      i++
    } else if (s[i] === '-') {
      sign = 0 - ops[ops.length - 1]
      i++
    } else if (s[i] === '(') {
      ops.push(sign)
      i++
    } else if (s[i] === ')') {
      ops.pop()
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
      ret += sign * num
    }
  }
  return ret;
};
["1 + 1", "1+1 1", " 2-1 + 2 "].slice(-1).forEach(s => console.log(calculate(s)))