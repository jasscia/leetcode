/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
  const res=[]
  const freq = {}
  words.forEach(word=>{
    let mask=0
    for(let ch of word){
      mask |= (1<<getIndex(ch))
    }
    if(countOne(mask)<=7){
      freq[mask] = (freq[mask]||0) + 1
    }
  });
  puzzles.forEach(puzzle=>{
    let total = 0
    for(let choose=0;choose<(1<<6);choose++){
      let mask=0
      for(let i=0;i<6;i++){
        if(choose & (1<<i)){
          mask |= (1<<getIndex(puzzle[i+1]))
        }
      }
      mask |= (1<<getIndex(puzzle[0]))
      if(freq[mask]){
        total += freq[mask]
      }
    }
    res.push(total)
  })
  return res
};

function countOne(v){
  const s = v.toString(2)
  let count=0
  for(let ch of s){
    count+=(ch==='1'?1:0)
  }
  return count
}

function getIndex(ch){
  return ch.charCodeAt() - 'a'.charCodeAt()
}

[[["aaaa","asas","able","ability","actt","actor","access"],
["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]]].forEach(([a,b])=>{
  console.log(findNumOfValidWords(a,b))
})