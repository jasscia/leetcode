function lengthOfLIS(nums){
  if(nums.length===0){
    return 0
  }
  const temp = Array(nums.length).fill(1)
  let res =1
  for(let i=1;i<nums.length;i++){
    for(let j=0;j<i;j++){
      if(nums[i]>nums[j]){
        temp[i] = Math.max(temp[i],temp[j]+1)
      }      
    }
    res = Math.max(res, temp[i])
  }
  return res
}