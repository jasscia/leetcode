/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length
  const list = []
  for(let i =0;i<n;i++){
      const v = gas[i]-cost[i]
      list.push(v)
  }
  for(let i=0;i<n;i++){
      if(list[i]>=0){
          let sum =0
          for(let j=i;j<i+n;j++){
              sum+=list[j%n]
              if(sum<0){
                  break
              }
          }
          if(sum>=0){return i}
      }
  }
  return -1
};