function calculate(s){
  const n= s.length
  const stack=[]
  let ret=0
  let num=0
  let sign='+'
  for(let i=0;i<n;i++){
    if(!['+','-','*','/',' '].includes(s[i])){
      num=num*10 + Number(s[i])
    } 
    if( i===n-1 || ['+','-','*','/'].includes(s[i])) {
      if(sign==='+'){
        stack.push(num)
      } else if(sign==='-'){
        stack.push(0-num)
      } else if(sign==='*'){
        stack.push(stack.pop() * num)
      } else if(sign==='/'){
        stack.push((stack.pop() / num)|0)
      }
      num=0
    }
    if(['+','-','*','/'].includes(s[i])){
      sign = s[i]
    }
  }
  for(let i=0;i<stack.length;i++){
    ret += stack[i]
  }
  return ret
}
["0-2147483647","3+2*2", " 3/2 ", " 3+5 / 2 "].slice().forEach(s => console.log(calculate(s)))