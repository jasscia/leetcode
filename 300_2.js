function lengthOfLIS(nums){
  if(nums.length===0){
    return 0
  }
  const temp = [nums[0]]
  for(let i=1;i<nums.length;i++){
    if(nums[i]>temp[temp.length-1]){
      temp.push(nums[i])
    } else {
      const index = binarySearch(temp, nums[i])
      temp[index]=nums[i]
    }
  }
  return temp.length
}
function binarySearch(arr,v) {
  let left = 0 
  let right = arr.length - 1
  while(left<right){
    const mid = 0^((right - left)/2) + left
    if(arr[mid] < v){
      left = mid+1
    } else {
      right = mid
    }
  }
  return left
}