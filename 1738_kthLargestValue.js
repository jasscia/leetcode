var kthLargestValue = function(matrix, k) {
  const arr = []
  matrix.forEach((row,rowIndex)=>{
    row.forEach((v,index)=>{
      const prevRow = matrix[rowIndex-1]||[]
      row[index]=(prevRow[index-1]||0) ^ (prevRow[index]||0)^((row[index-1]||0) ^ v)
      arr.push(row[index])
    })
  })
  arr.sort((a,b)=>-a+b)
  return arr[k-1]
}