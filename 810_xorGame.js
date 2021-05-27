function xorGame(nums){
  const length = nums.length
  if(length & 1){
    let xor=0
    nums.forEach(num=>xor^=num)
    return xor ===0
  } else {
    return true
  }
}