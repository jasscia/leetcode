/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = []
    const queen = fillQueen(n)
    const validList = []
    for (let i=0;i<n;i++) {
        for (let j=0;j<n;j++) {
            if(queen[i][j] === '.') {
                validList.push([i,j])
                mark(queen,i,j)
                if(i===n-1) {
                    res.push(queen.map(item=>item.map(item=>item==='Q'?'Q':'.').join('')))
                    //console.log('get',queen.map(item=>item.join('-')))
                    const last = getLast(validList, queen)
                    if(last){
                        i=last[0]
                        j=last[1]
                    } else {
                        return res
                    }
                } else {
                    break;
                }
            } else {
                if (j===n-1) {
                    const last = getLast(validList, queen)
                    if(last){
                        i=last[0]
                        j=last[1]
                    } else {
                        return res
                    }
                }
            }
        }
    }
};

function fillQueen(n) {
    const queen = []
    for(let i=0;i<n;i++) {
        queen.push([])
        for(let j=0;j<n;j++) {
            queen[i].push('.')
        }
    }
    return queen
}

function mark(queen, i,j) {
    const n=queen.length
    const marker = i+'.'+j
    queen[i][j] = 'Q'
    for(let k=0;k<n;k++) {
        if(queen[i][k] === '.') {queen[i][k] = marker}
        if(queen[k][j]==='.'){queen[k][j]=marker}
        if(queen[i-j+k] && queen[i-j+k][k]==='.') {queen[i-j+k][k]=marker}
        if(queen[k] && queen[k][i+j-k]==='.') {queen[k][i+j-k]=marker}
    }
    //console.log('mark',i,j)
}
function unMark(queen, i,j) {
    const n=queen.length
    const marker = i+'.'+j
    queen[i][j] = '.'
    for(let k=0;k<n;k++) {
        if(queen[i][k] === marker) {queen[i][k] ='.'}
        if(queen[k][j]===marker){queen[k][j]='.'}
        if(queen[i-j+k] && queen[i-j+k][k]===marker) {queen[i-j+k][k]='.'}
        if(queen[k] && queen[k][i+j-k]===marker) {queen[k][i+j-k]='.'}
    }
    //console.log('unmark',i,j)
}

function getLast(validList,queen) {
    const n=queen.length
    let last=[]
    while(last=validList.pop()) {
        unMark(queen, last[0],last[1])
        if(last[1]<n-1) {break}
    }
    return last
}

[1,2,3,4,5,6,7,8,9,10,11,12,13,14].forEach(n=>{
    const res = solveNQueens(n)
    console.log('res',res)
})

export {
    solveNQueens 
}
