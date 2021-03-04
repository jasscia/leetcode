function countOnes(num){
  let count=0
  while(num){
    num &= (num-1)
    count++
  }
  return count
}

export default countOnes