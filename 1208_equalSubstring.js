/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  let max = 0;
  let left=0;
  let right=0;
  let currCost = 0
  while(right<s.length) {
    currCost+=Math.abs(s[right].charCodeAt()-t[right].charCodeAt())
    if(currCost<=maxCost) {
      max++
    } else {
      currCost-=Math.abs(s[left].charCodeAt()-t[left].charCodeAt())
      left++
    }    
    right++
  }
  return max
};
[["abcd","bcdf",3],["abcd","cdef",3],["abcd","acde",0]].forEach(([s,t,k])=>{
  console.log(equalSubstring(s,t,k))
})