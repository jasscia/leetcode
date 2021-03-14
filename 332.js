function findItinerary(tickets){
  const res = ['JFK']
  const graph = []
  const map ={}
  const arcMap = {}
  const array = []
  tickets.forEach(([from,to])=>{
    if(!map[from]){
      map[from]= true
      array.push(from)
    }
    if(!map[to]){
      map[to]= true
      array.push(to)
    }
  })
  array.sort((a,b)=>a>b)
  array.forEach((v,index)=>{
    map[v]=index
    arcMap[index] = v
    graph.push(Array(array.length).fill(0))
  })
  tickets.forEach(([from,to])=>{
    graph[map[from]][map[to]] = 1
  })
  
  function dfs(from){
    const index = graph[from].findIndex(item=>item===1)
    if(index>=0){
      res.push(arcMap[index])
      graph[from][index] = 0
      dfs(index)
    } else {
      return
    }
  }
  dfs(map['JFK'])
  return res
}

console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]))
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))