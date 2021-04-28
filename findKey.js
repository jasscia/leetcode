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

//dfs
function find(obj,target) {
  if(obj.key===target){
    return obj
  } else if(obj.children){
    for(let item of obj.children){
      const res = find(item,target)
      if(res){
        return res
      }
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
        {key:5,children:[]}
      ]
    }
  ]
}
console.log(find(obj,3))