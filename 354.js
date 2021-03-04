function maxEnvelopes(envelopes){
  const n = envelopes.length
  if(n===0){
    return 0
  }
  envelopes.sort(([w,h],[ww,hh])=>(w+h) - (ww+hh))
  let res = 1
  const temp = Array(n).fill(1)
  for(let i=1;i<n;i++){
    for(let j=0;j<i;j++){
      if(envelopes[i][0]>envelopes[j][0] && envelopes[i][1]>envelopes[j][1]){
        temp[i] = Math.max(temp[i], temp[j]+1)
      }
    }
    res = Math.max(res, temp[i])
  }
  return res
}
console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
console.log(maxEnvelopes([ [ 2, 3 ], [ 1, 8 ], [ 6, 4 ], [ 6, 7 ] ]))
console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))