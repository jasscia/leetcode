var freqAlphabets = function(s) {
  let str=''
  for(let i =s.length-1;i>=0;){
    if(s[i]==='#'){
      str = getChar(+(s[i-2]+s[i-1])) + str
      i-=3
    } else {
      str = getChar(+s[i]) + str
      i--
    }
  }
  return str
};
const chars = 'abcdefghijklmnopqrstuvwxyz'
function getChar(n){
  return chars[n-1]
}

console.log(freqAlphabets('12'))