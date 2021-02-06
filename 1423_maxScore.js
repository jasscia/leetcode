/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const t = cardPoints.length - k
  let total = 0
  if(t<=0) {
    total = cardPoints.reduce((r,val)=>r+val,0)
    return total
  } else {
    let min = 0;
    let currTotal=min;
    let right=t;
    while(right<cardPoints.length){
      total+=cardPoints[right]
      if(right>t-1) {
        currTotal += (cardPoints[right]-cardPoints[right-t])
        min=Math.min(min, currTotal)
      }
      right++
    }
    return total-min
  }
};
[[[100,40,17,9,73,75],3],[[1,2,3,4,5,6,1],3],[[2,2,2],2],[[9,7,7,9,7,7,9],7],[[1,1000,1],1],[[1,79,80,1,1,1,200,1],3]].slice(0,10).forEach(([s,k])=>{
  console.log(maxScore(s,k))
})