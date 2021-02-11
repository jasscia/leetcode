/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.array=[]  //递减数列 最长k
  this.k = k
  for(let i=0;i<nums.length;i++){
    this.add(nums[i])
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if(
    this.array.length===0) {this.array.push(val)
  } else if(this.array.length < this.k) {
    if(val > this.array[this.array.length-1]){
      console.log('-',val,this.array.toString())
      this.array.push(val)
      this.sort()
    } else {
      this.array.push(val)
    }
  } else {
    if(val > this.array[this.array.length-1]){
      this.array.pop()
      this.array.push(val)
      this.sort()
    }
  }
  return this.array[this.k-1]
};
KthLargest.prototype.sort = function(){
  for(let i=this.array.length-1;i>0;) {
    if(this.array[i]>this.array[i-1]) {
      let temp = this.array[i]
      this.array[i]=this.array[i-1]
      this.array[i-1]=temp
      i--
    } else {
      break
    }
  }
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

[
  [
    ["KthLargest", "add", "add", "add", "add", "add"],
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
  ]
].slice(0,10).forEach(([[ClassName,...options],[initValue,...params]])=>{
  const result = []
  const obj = new KthLargest(initValue[0],initValue[1])
  result.push(null)
  options.forEach((optionName,index)=>{
    const v=obj[optionName](params[index][0])
    result.push(v)
  })
  console.log(result)
})