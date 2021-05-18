function  findMaximumXOR(nums){
  let res=0
  for(let k=30;k>=0;k--){
    const aj = new Set()
    nums.forEach(num=>{
      aj.add(num>>k)
    })
    res=res*2+1
    let find = false
    for(let num of nums){
      if(aj.has(res^(num>>k))) {
        find=true
        break
      }
    }
    if(!find){
      res--
    }
  }
  return res
}

