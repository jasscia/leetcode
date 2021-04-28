// {
//   key,
//   children:[{
//     key,
//     children:[]
//   },{
//     key,
//     children:[]
//   }]
// }

//bfs
function find(obj,target) {
  const list = []
  list.push(obj)
  while(list.length){
    const item  = list.shift()
    if(item.key===target){
      return getPath(item)
    } else if(item.children){
      item.children.forEach(child=>child.parent=item)
      list.push(...item.children)
    }
  }
  return undefined
}
function getPath(obj){
  const path=[]
  while(obj){
    const parent=obj.parent
    delete obj.parent
    path.unshift(obj)
    obj=parent
  }
  return path
}
const obj = {
  key:1,
  children:[
    {
      key:2,
      children:[
        {key:3,children:[{}]},
        {key:4,children:[]},
        {key:5,children:[]}
      ]
    },{
      key:4,children:[
        {key:3,children:[]},
        {key:5,children:[]},
        {key:6,children:[{key:7}]}
      ]
    }
  ]
}
console.log(find(obj,7))