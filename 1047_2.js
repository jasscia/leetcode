//删除所有连续的
function  removeDuplicates(S){
  const stack=[]
  function getTop(){
    return stack[stack.length-1]
  }
  let flag;
  for(let i=0;i<S.length;i++){
    if(stack.length && getTop()===S[i]){
      flag=stack.pop()
    } else if(flag===S[i]){}else {
      flag=''
      stack.push(S[i])
    }
  }
  return stack.join('')
}
['abbaca','abbbaca','abcd','','a','aa'].forEach(S=>console.log(removeDuplicates(S)))