function  decode(encoded){
  const n = encoded.length+1
  let total = 0
  for(let i=1;i<=n;i++){
    total^=i
  }
  let odd = 0
  for(let i=1;i<n-1;i+=2){
    odd ^= encoded[i]
  }
  const decoded = [total^odd]
  for(let i=0;i<n-1;i++){
    decoded.push(decoded[i]^encoded[i])
  }
  return decoded
}