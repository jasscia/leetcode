/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
 const n = nums.length
 this.sums = []
 for(let i=0;i<n;i++){
  this.sums.push((this.sums[i-1]||0) + nums[i])
 }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
return this.sums[j] - (this.sums[i-1]||0)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
[[["NumArray","sumRange","sumRange","sumRange"],
[[-2,0,3,-5,2,-1],[0,2],[2,5],[0,5]]]].forEach(([a,b])=>{
  const c=new NumArray(b[0])
  for(let i=1;i<b.length;i++){
    console.log(c[a[i]](b[i][0],b[i][1]))
  }
})