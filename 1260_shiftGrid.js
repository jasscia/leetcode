/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    let m=grid.length;
    let n=grid[0].length;
    let newGrid=[];
    for(let i=0; i<m; i++){
        newGrid[i] = [];
    }
    for(let i=0; i<m;i++){
        for(let j=0;j<n;j++){
            let kk = k % (m*n);
            let ii = (i+Math.floor((j + kk) / n)) % m;
            let jj = (j+kk) % n;
            newGrid[ii][jj] = grid[i][j];
        }
    }
    return newGrid;
};