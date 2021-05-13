var xorQueries = function(arr, queries) {
  let pre=0
  const xor=[]
  arr.forEach(function(value){
    pre^=value
    xor.push(pre)
  })
  const res = []
  queries.forEach(function([l,r]){
    if(l===0){
      res.push(xor[r])
    } else {
      res.push(xor[l-1] ^ xor[r])
    }
  })
  return res
}