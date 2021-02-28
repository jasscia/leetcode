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
    let mask=0
    for(let i=1;i<7;i++){
      mask |= (1<<getIndex(puzzle[i]))
    }
    let total = 0
    let subset=mask
    while(subset){
      const count = freq[subset | (1<<getIndex(puzzle[0]))]
      if(count){
        total+=count
      }
      subset = (subset - 1) & mask
    }
    const count = freq[1<<getIndex(puzzle[0])]
      if(count){
        total+=count
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