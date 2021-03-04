function maxEnvelopes(envelopes){
  const n = envelopes.length
  if(n===0){
    return 0
  }
  envelopes.sort((e1, e2) => {
    if (e1[0] - e2[0]) {
        return e1[0] - e2[0];
    } else {
        return e2[1] - e1[1];
    }
})
  const temp = [envelopes[0][1]]
  for(let i=1;i<n;i++){
    const h = envelopes[i][1]
    if(temp[temp.length-1]<h){
      temp.push(h)
    } else {
      const index = binarySearch(temp,h)
      temp[index] = h
    }
  }
  return temp.length
}

function binarySearch(arr,v) {
  let left = 0 
  let right = arr.length - 1
  while(left<right){
    const mid = 0^((right - left)/2) + left
    if(arr[mid] < v){
      left = mid+1
    } else {
      right = mid
    }
  }
  return left
}
console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
console.log(maxEnvelopes([ [ 2, 3 ], [ 1, 8 ], [ 6, 4 ], [ 6, 7 ] ]))
console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))

