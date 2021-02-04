
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const array = []
    if(matrix.length===0) {return array}
    fn(matrix, array, 0, matrix.length,matrix[0].length)
    return array
};
function fn(matrix, array, curr,rows,cols) {
    if(curr<=rows-curr-1) {        
        for(let i=curr;i<=cols-curr-1;i++) {
            array.push(matrix[curr][i])
        }
    } else {
        return
    }
    if (cols-curr-1>=curr) {
        for(let i=curr+1;i<=rows-curr-2;i++) {
            array.push(matrix[i][cols-curr-1])
        }        
    }
    if (rows-curr-1>curr) {
        for(let i=cols-curr-1;i>=curr;i--) {
            array.push(matrix[rows-curr-1][i])
        }        
    }
    if(curr < cols-curr-1) {
        for(let i=rows-curr-2;i>=curr+1;i--) {
            array.push(matrix[i][curr])
        }        
    }
    fn(matrix,array, curr+1, rows, cols)
}
spiralOrder([[1,2,3,10],[4,5,6,11],[7,8,9,12],[13,14,15,16]])
