function isCousins (root, x, y){
  let xIndex=-1;yIndex=-1
  let xParent=-1;yParent=-1
  let xK=-1;yK=-1
  for(let i=0;i<root.length;i++){
    if(root[i]===x){
      xIndex = i
      xParent=findParent(i)
      xK=findK(i)
    }
    if(root[i]===y){
      yIndex=i
      yParent=findParent(i)
      yK=findK(i)
    }
    if(~xIndex && ~yIndex){
      break
    }
  }
  return (xParent!==yParent) && (xK === yK)
  function findParent(index){
    if(index&1){
      return (index-1)/2
    } else {
      return (index-2)/2
    }
  }
  function findK(index){
    for(let k=7;k>=0;k--){
      if((index+1)&(1<<k)){
        return k
      }
    }
  }
}

[[[1,2,3,null,4,null,5],5,4],[[1,2,3,null,4], 2, 3]].forEach(([root, x, y])=>console.log(isCousins(root, x, y)))