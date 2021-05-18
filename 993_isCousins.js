function isCousins (root, x, y){
  let xIndex=-1;yIndex=-1
  for(let i=0;i<root.length;i++){
    if(~xIndex && ~yIndex){
      return
    }
    if(root[i]===x){
      xIndex=findParent(i)
    }
    if(root[i]===y){
      yIndex=findParent(i)
    }
  }
  if(xIndex ===yIndex){
    return false
  }
  while(xIndex>0 && yIndex>0){
    xIndex  = findParent(xIndex)
    yIndex  = findParent(yIndex)
  }
  return xIndex===yIndex
  function findParent(index){
    if(index&1){
      return (index-1)/2
    } else {
      return (index-2)/2
    }
  }
}

console.log(isCousins(
  [1,2,3,null,4,null,5],
5,
4
))