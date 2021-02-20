/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const reqMap={}
  let maxReq=0
  let maxV=[]
  for(let i=0;i<nums.length;i++){
    if(reqMap[nums[i]]){
      reqMap[nums[i]][0]+=1
      reqMap[nums[i]][2] = i
    } else {
      reqMap[nums[i]] = [1,i,i]//req start end
    }
    const  req= reqMap[nums[i]][0]
    if(req>maxReq){
      maxReq=req
      maxV=[nums[i]]
    } else if(req===maxReq){
      maxV.push(nums[i])
    }
  }
  return Math.min(...maxV.map(key=>reqMap[key][2]-reqMap[key][1]+1))
};

[[1, 2,3],[1,2,2,3,1,4,2]].forEach((nums)=>{
  console.log(findShortestSubArray(nums))
})