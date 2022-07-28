/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let sum = 0
    let s1 = 0
    if(start>destination){
        [destination,start] = [start,destination]
    }
    for(let i=0;i<distance.length;i++){
        sum+=distance[i]
        if(i>=start && i<destination){
            s1+=distance[i]
        } else {
            if(i>=distance && sum>=2*s1){
                return s1
            }

        }
    }
    return Math.min(s1, sum - s1)
};