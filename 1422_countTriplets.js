function countTriplets(arr) {
  let count = 0
  let xor = [0]
  for (let i = 0; i < arr.length; i++) {
    xor[i+1]=xor[i] ^ arr[i]
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        if(xor[i]===xor[k+1]){
          count++
        }
      }
    }
  }
  return count
}
//4 10 0 3 8
[[2, 3, 1, 6, 7], [1, 1, 1, 1, 1], [2, 3], [1, 3, 5, 7, 9], [7, 11, 12, 9, 5, 2, 7, 17, 22]].slice(0).forEach(arr => console.log(countTriplets(arr)))