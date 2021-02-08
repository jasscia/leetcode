/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  let n = arr.length
  if(n<1) {
    return n
  }
  let max=1
  let currMax = 1
  let sign=[];
function getSign(a,b) {
  if(a>b) {
    return 1
  } 
  if(a<b) {
    return -1
  } 
  if(a===b) {
    return 0
  } 
}
  for(let j=1;j<n;) {
    sign.push(getSign(arr[j-1],arr[j]))
    if(sign.length>2) {
      sign.shift()
    }
    // console.log(arr[j],sign,j)
    if(sign[0] === sign[1] || sign[0] === 0 || sign[1] === 0 ){
      sign.shift()
      currMax = sign.length+1
    } else {
      currMax++
      max=Math.max(max, currMax)
    }
    j++
  }
  return max
};

[[100,100,100],[0,8,45,88,48,68,28,55,17,24],[9,4,2,10,7,8,8,1,9],[4,8,12,16],[100],[9,9]].slice(0,10).forEach((s)=>{
  console.log(maxTurbulenceSize(s))
})
