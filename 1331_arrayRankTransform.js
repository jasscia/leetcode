/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    const arr2 = arr.slice()
    arr2.sort((a,b)=>a-b)
    const map = {}
    let count = 0
    arr2.forEach((v)=>{
        if(!map[v]){
            count++
            map[v] = count
        }
    })
    for(let i=0;i<arr.length;i++){
        arr[i] = map[arr[i]]
    }
    return arr
};