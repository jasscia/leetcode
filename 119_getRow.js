/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const array = Array(rowIndex+1).fill(1)
  for(let i =1;i<=rowIndex/2;i++) {
    array[i]=array[rowIndex-i] = array[i-1]*(rowIndex-i+1)/i
  }
  return array
};

[0,1,2,3,4,5,6,7].slice(0,10).forEach(rowIndex=>{
  console.log(getRow(rowIndex))
})