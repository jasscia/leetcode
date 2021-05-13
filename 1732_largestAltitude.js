function largestAltitude(gain){
  let most = 0
  let pre = 0
  gain.forEach(function(value){
    pre+=value
    if(pre>most){
      most = pre
    }
  })
  return most
}