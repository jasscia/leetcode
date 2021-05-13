function minimumTeachings(n,languages,friendships){
  function hasCommon(a,b){
    for(let x of languages[a-1]){
      for(let y of  languages[b-1]){
        if(x===y){
          return true
        }
      }
    }
    return false
  }
  let noCommon = new Set()
  friendships.forEach(function([a,b]){
    if(!hasCommon(a,b)){
      noCommon.add(a)
      noCommon.add(b)
    }
  })
  if(noCommon.size===0){
    return 0
  }
  const freq={}
  noCommon.forEach(function(index){
    const list=languages[index-1]
    list.forEach(function(language){
      freq[language] = (freq[language]||0) +1
    })
  })
  let mostPo = 0
  for(let value of Object.values(freq)){
    if(value>mostPo){
      mostPo=value
    }
  }
  return noCommon.size - mostPo
}



console.log(minimumTeachings(
  2,
[[1],[2],[1,2]],
[[1,2],[1,3],[2,3]],
// 3,
// [[2],[1,3],[1,2],[3]],
// [[1,4],[1,2],[3,4],[2,3]]
))