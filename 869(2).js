/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let inc = 0,dec=0;
  for(let i=1;i<A.length;i++){
    diff = A[i]-A[i-1]
    if(diff){
      if(diff>0){
        inc=1
      } 
      if(diff<0){
        dec = 1
      }
      if(inc * dec > 0){
        return false
      }
    }
  }
  return true
};
[[11,11,9,4,3,3,3,1,-1,-1,3,3,3,5,5,5],[2,2,2,1,4,5]].forEach(A=>console.log(isMonotonic(A)))
