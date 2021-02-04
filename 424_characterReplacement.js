/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const countMap={}
  let max=0
  let i=0
  let j=0
  while(j<s.length){
    countMap[s[j]]=(countMap[s[j]]||0)+1
    max=Math.max(max, countMap[s[j]])
    if(j-i+1-max>k) {
      countMap[s[i]]=countMap[s[i]]-1
      i++
    }
    j++
  }
  return j-i;
};

[["ABAB",2],["AABABBA",2],["ABBBA",2],["ABBB",2]].forEach(([s,k])=>{
  console.log(characterReplacement(s,k))
})