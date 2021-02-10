/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function getIndex(c) {
  const index= c.charCodeAt() - 'a'.charCodeAt()
  return index
}
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false;
}
  const array = Array(26).fill(0)
  for(let i=0;i<s1.length;i++) {
    array[getIndex(s1[i])]++
  }
  for(let left=0,right=0;right<s2.length;) {
    array[getIndex(s2[right])]--
    if(right-left+1===s1.length) {
      if(!array.find(value=>!!value)) {
        return true
      }
      array[getIndex(s2[left])]++
      left++
    }
    right++
  }
  return false
};

[['ab',"eidbaooo"],['ab',"eidboaoo"]].slice(0,10).forEach(([s,k])=>{
  console.log(checkInclusion(s,k))
})