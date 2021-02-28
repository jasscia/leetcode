/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const freq = Array(26).fill(0)
  for(let i = 0;i<s.length;i++){
    freq[getIndex(s[i])] = (freq[getIndex(s[i])] || 0) +1
  }
  if(Math.min(...freq.filter(v=>v>0))>=k){
    return s.length
  } else {
    const list =[]
    let start = 0
    let i=0
    for(;i<s.length-1;i++){
      if(freq[getIndex(s[i])]<k){
        if(i>start){
          list.push(s.slice(start,  i))
        }
        start = i+1
      }
    }
    if(freq[getIndex(s[i])]<k){
      if(i>start){
        list.push(s.slice(start,i))
      }
    }else{
      if(i>=start){
        list.push(s.slice(start))
      }
    }
    if(list.length){
        return Math.max(...list.map(s=>longestSubstring(s,k)))
    }
    return 0
  }
};
function getIndex(ch){
  return ch.charCodeAt() - 'a'.charCodeAt()
}

[["aaaaaaaaabbbcccccddddd",5]].forEach(([s,k])=>{console.log(longestSubstring(s,k))})