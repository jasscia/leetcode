/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 **/

//O(n^2)
var twoSum = function(nums, target) {
    let n = nums.length
    for (let i=0; i<n-1; i++) {
        if (nums[i] < target) {
            for(let j=i+1; j<n;j++) {
                if (nums[j] == target - nums[i]) {
                    return [i, j]
                }
            }
        }
    }
};

//O(n^2)  map table
var twoSum2 = function(nums, target) {
    let o = {}
    let n = nums.length
    for (let i=0; i<n; i++) {
        let v = target - nums[i]
        if (o[v] === undefined) {
            o[nums[i]] = i
        } else {
            return [o[v], i]
        }
    }
}