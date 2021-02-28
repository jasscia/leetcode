/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let flag = 0,diff=0;
  for(let i=1;i<A.length;i++){
    diff = A[i]-A[i-1]
    if(diff){
      if(!flag){
        flag = diff>0?1:-1
      }
      if(flag){
        if(flag<0 && diff>0){
          return false
        }
        if(flag>0 && diff<0){
          return false
        }
      }
    }
  }
  return true
};
[[11,11,9,4,3,3,3,1,-1,-1,3,3,3,5,5,5],[2,2,2,1,4,5]].forEach(A=>console.log(isMonotonic(A)))
