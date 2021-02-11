/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
let array=[1]
for(let i =1;i<=rowIndex;i++) {
  let array2=[]
  for(let j=0;j<=array.length;j++) {
    array2.push((array[j-1]||0)+(array[j]||0))
  }
  array=array2
}
return array
};

[0,1,2,3,4,5].slice(0,10).forEach(rowIndex=>{
  console.log(getRow(rowIndex))
})