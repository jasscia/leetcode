function findItinerary(tickets){
  const res = ['JFK']
  const graph = {}
  tickets.forEach(([from,to])=>{
    if(!graph[from]){
      graph[from]= [to]
    }else {
      graph[from].push(to)
    }
  })

  for(let key in graph){
    graph[key].sort(sortFn)
  }
  function dfs(from){
    if((graph[from]||[]).length){
      const to = graph[from].shift()
      res.push(to)
      dfs(to)
    } else {
      return
    }
  }
  dfs('JFK')
  return res
}

function sortFn(a,b){
  for(let i =0;i<3;i++){
    if(a[i]!==b[i]){
      return a[i]>b[i]
    }
  }
  return true
}

console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]))
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]))