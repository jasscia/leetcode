/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let array=[]
  let res=0
  for(let i=0;i<grumpy.length;i++){
    if(grumpy[i]) {
      array.push(customers[i])
    } else {
      array.push(0)
      res+=customers[i]
    }
  }
  let max=0
  let sum=0
  for(let i=0;i<array.length;i++){
    if(i>=X){
      sum-=array[i-X]
    }
    sum+=array[i]
    max=Math.max(max, sum)
  }
  return res+max
};
[[[1,0,1,2,1,1,7,5],
[0,1,0,1,0,1,0,1],
3],[[3,2,5],
[0,1,1],
2]].slice(1,2).forEach(([customers,grumpy,X]) => {
  console.log(maxSatisfied(customers,grumpy,X))
})