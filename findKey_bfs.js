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
      return item
    } else if(item.children){
      list.push(...item.children)
    }
  }
  return undefined
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
        {key:6,children:[]}
      ]
    }
  ]
}
console.log(find(obj,6))