function countTriplets(arr) {
  let count = 0
  let xor = [0]
  for (let i = 0; i < arr.length; i++) {
    xor[i+1]=xor[i] ^ arr[i]
  }
  const obj = {}
  for (let i = 0; i <= arr.length; i++) {
    const target=xor[i]
    const arr=obj[target]
    if(!arr){
      obj[target]=[i]
    } else {
      const m = arr.length
      const sum = arr.reduce((r,v)=>r+=v,0)
      count += ((i-1) * m - sum)
      arr.push(i)
    }
  }
  return count
}
//4 10 0 3 8
[[2, 3, 1, 6, 7], [1, 1, 1, 1, 1], [2, 3], [1, 3, 5, 7, 9], [7, 11, 12, 9, 5, 2, 7, 17, 22]].slice(0).forEach(arr => console.log(countTriplets(arr)))