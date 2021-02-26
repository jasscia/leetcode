/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */

var findNumOfValidWords = function(words, puzzles) {
  const res=[]
  puzzles.forEach(puzzle=>{
    let count = 0
    words.forEach(word=>count+=(isPuzzle(word, puzzle)?1:0))
    res.push(count)
  })
  return res
};

function isPuzzle(word, puzzle){
  console.log(word,puzzle)
  const array = Array(26).fill(0)
  for(let i=0;i<7;i++){
    array[getIndex(puzzle[i])]=1
  }
  let first = false
  const firstIndex = getIndex(puzzle[0])
  for(let j=0;j<word.length;j++){
    const index=getIndex(word[j])
    if(array[index]){
      if(index===firstIndex){
        first=true
      }
    } else {
      return false
    }
  }
  console.log(array,first)
  return first
}

function getIndex(char){
  return char.charCodeAt()-'a'.charCodeAt()
}

[[["aaaa","asas","able","ability","actt","actor","access"],
["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"].slice(-1)]].forEach(([a,b])=>{
  console.log(findNumOfValidWords(a,b))
})