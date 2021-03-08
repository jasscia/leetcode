var canCompleteCircuit = function(gas, cost) {
  //x，y; y的下一站是x第一个不能到达的站点
  //那么x,y之间的任何一个站点都无法到y的下个站
  const n = gas.length
  for(let i =0;i<n;){
    let gasSum =0
    let costSum = 0
    let j = i
    while(gasSum>=costSum && j<i+n){
      gasSum+=gas[j%n]
      costSum+=cost[j%n]
      j++
    }
    if(gasSum>=costSum){
      return i
    } else {
      i=j
    }
  }
  return -1
}