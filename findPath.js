
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
function find(obj,target,path) {
  path.push(obj)
  if(obj.key===target){
    return obj
  } else if(obj.children){
    for(let item of obj.children){
      const res = find(item,target,path)
      if(res){
        return res
      }
    }
  }
  path.pop()
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
const path=[]
find(obj,6,path)
console.log(path)