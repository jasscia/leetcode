var topKFrequent = function(words, k) {
  const map = new Map()
  words.forEach(word=>{
    if(map.has(word)){
      map.set(word,map.get(word)+1)
    } else {
      map.set(word,1)
    }
  })
  if(map.size<k){
      return
  }
  const queue = []
  for (const key of map.keys()) {
    insert([key,map.get(key)])
  }
  return queue.map(item=>item[0]).reverse()
  function insert([key,value]){
    queue.push([])
    let find=false
    for(let i=queue.length-2;i>=0 && !find;i--){
      if(queue[i][1]>value){
        queue[i+1]=queue[i]
      } else if(queue[i][1]===value){
        if(queue[i][0]<key){
          queue[i+1]=queue[i]
        } else {
          queue[i+1] = [key,value]
          find=true
        }
      } else {
        queue[i+1] = [key,value]
        find=true
      }
    }
    if(!find){
      queue[0]=[key,value]
    }
    if(queue.length>k ){
      queue.shift()
    }
  }
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],  4))