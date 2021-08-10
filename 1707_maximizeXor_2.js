
var L = 0
var maximizeXor=function(nums, queries){
  const numL = nums.length
  nums.sort((a,b)=>a-b)
  queries.forEach((item,index)=>item[2]=index)
  queries.sort((a,b)=>a[1]-b[1])
  let maxNums = nums[numL-1]
  L=0
  while(maxNums){
    L++
    maxNums>>=1
  }
  const res =[]
  const trie= new Trie()
  let j=0
  queries.forEach(([x,m,index])=>{
    while(j<numL && nums[j]<=m ){
      if(nums[j]!=nums[j-1]){
        trie.insert(nums[j])
      }
      j++
    }
    res[index]=trie.getMaxOr(x)
  })
  return res
}
function Trie(){
  this.trie=[]
}
Trie.prototype.insert = function(value){
  let node = this.trie
  for(let i=L-1;i>=0;i--){
    const bit=((value>>i) & 1)
    if(!node[bit]){
      node[bit]=[]
    }
    node=node[bit]
  }
  //console.log(value,JSON.parse(JSON.stringify(this.trie)))
}
Trie.prototype.getMaxOr = function(value){
  let node = this.trie
  if(!node[0]&!node[1]){
    return -1
  }
  let max = 0
  for(let i=L-1;i>=0;i--){
    const bit=((value>>i) & 1)
    if(bit===0){
      if(node[1]){
        node=node[1]
        max = (max<<1) + 1
      } else {
        node=node[0]
        max = (max<<1) + 0
      }
    } else {
      if(node[0]){
        node=node[0]
        max = (max<<1) + 0
      } else {
        node=node[1]
        max = (max<<1) + 1
      }
    }
  }
  return max ^ value
}
//[3,3,7]
console.log(maximizeXor([0, 1, 2, 4, 3], [[3, 1], [1, 3], [5, 6]]))

// [15,-1,5]
console.log(maximizeXor([5,2,4,6,6,3],  [[12,4],[8,1],[6,3]]))