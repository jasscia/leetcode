/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let rec = new Stack()//sorted 降级
  let maxLength=0
  let abs=0
  for (let left = 0, right = 0; right < nums.length;) {
    rec.add(nums[right])
    abs = rec.abs
    while (abs > limit) {
      rec.remove(nums[left])
      abs = rec.abs
      left++
    }
    right++
    maxLength = Math.max(maxLength, right-left)
  }
  return maxLength
};

class Stack {
  constructor(array){
    this.array=array||[]
    this.abs = this.array[0]-this.array[this.array.length-1]
  }
  add(value){
    if(value>=this.array[0]){
      this.array.unshift(value)
    } else if(value<=this.array[this.array.length-1]) {
      this.array.push(value)
    } else {
      const index = this.array.findIndex((v,index)=>v>=value && this.array[index+1]<=value)
      this.array.splice(index+1,0,value)
    }
    this.abs = this.array[0]-this.array[this.array.length-1]
  }
  remove(value){
    const index = this.array.findIndex(v=>v===value)
    this.array.splice(index,1)
    this.abs = this.array[0]-this.array[this.array.length-1]
  }
}

[[[4,8,5,1,7,9],6],[[8,2,4,7],4],[[1,1,1,0,0,0,10,1,1,1,0],2],[[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3]].slice(0,10).forEach(([A,K])=>{
  console.log(longestSubarray(A,K))
})