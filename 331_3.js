function isValidSerialization(preorder) {
  preorder = preorder.split(',')
  let count = 1
  for(v of preorder){
    if(!count){
      return false
    }
    if(v==='#'){
      count--
    } else {
      count++
    }
  }
  return count ? false:true
}
["#,9,3,4,#,#,1,#,#,2,#,6,#,#","9,#,#,1","1,1,#","1,#,#","1,#"].forEach(s => console.log(isValidSerialization(s)))