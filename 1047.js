function  removeDuplicates(S){
  const stack=[]
  function getTop(){
    return stack[stack.length-1]
  }
  for(let i=0;i<S.length;i++){
    if(stack.length && getTop()===S[i]){
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }
  return stack.join('')
}

console.log(removeDuplicates('abbbaca'))