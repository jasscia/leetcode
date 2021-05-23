function countTriplets(arr) {
  let count = 0
  let curr = 0
  const obj = {0:[-1]}
  for (let i = 0; i < arr.length; i++) {
    curr^=arr[i]
    if(!obj[curr]){
      obj[curr]=[i]
    } else {
      const m = obj[curr].length
      const sum = obj[curr].reduce((r,v)=>r+=v,0)
      count += (i * m - sum - m)
      obj[curr].push(i)
    }
  }
  return count
}
//4 10 0 3 8
[[2, 3, 1, 6, 7], [1, 1, 1, 1, 1], [2, 3], [1, 3, 5, 7, 9], [7, 11, 12, 9, 5, 2, 7, 17, 22]].slice(0).forEach(arr => console.log(countTriplets(arr)))