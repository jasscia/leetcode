function isValidSerialization(preorder) {
  preorder = preorder.split(',')
  const stack = [1]
  for(v of preorder){
    if(stack.length===0){
      return false
    }
    const last = stack[stack.length-1] - 1
    if(last<0){
      return false
    } 
    stack.pop()
    if(last>0){
      stack.push(last)
    }
    if(v!=='#'){
      stack.push(2)
    }
  }
  return stack.length ? false:true
}
["#,9,3,4,#,#,1,#,#,2,#,6,#,#","9,#,#,1","1,1,#","1,#,#","1,#"].forEach(s => console.log(isValidSerialization(s)))