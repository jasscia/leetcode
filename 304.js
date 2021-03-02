/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.sums = []
  this.getValue = function(row,col){
      return (this.sums[row]||[])[col]||0
  }
  const m = matrix.length
  if(m>0){
      const n = matrix[0].length
      for(let i=0;i<m;i++){
          this.sums[i]=Array(n).fill(0)
          for(let j=0;j<n;j++){
              this.sums[i][j] =  this.getValue(i, j-1)+this.getValue(i-1,j)- this.getValue(i-1,j-1) + matrix[i][j]
          }
      }
  }
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
return this.getValue(row2,col2) + this.getValue(row1-1,col1-1) - this.getValue(row2, col1-1) - this.getValue(row1-1, col2)
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/