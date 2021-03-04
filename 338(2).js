function countBits(num){
  const res = Array(num+1).fill(0)
  let h = 0
  res.forEach((_,index)=>{
    if(index===0) return
    if(index&(index-1)){
      res[index] = res[index-h]+1
    } else {
      res[index] = 1
      h=index
    }
  })
  return res
}
console.log(countBits(8))