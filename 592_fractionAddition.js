/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function(expression) {
    const list = expression.split('+')
    let r =''
    let curr = ''
    expression+='+'
    for(let i=0;i<expression.length;i++){
        if(['+','-'].includes(expression[i])){
            if(i===0){
                curr=expression[i]
            } else {
                if(r){
                    r = add(r, curr)
                } else {
                    r=curr
                }
                if(expression[i]==='+'){
                    curr=''
                } else {
                    curr = '-'
                }
            }
        } else {
            curr+=expression[i]
        }
    }
    
    const [a,b]=r.split('/')
    if(a!=='0'){
        const d=maxCommonDivisor(a,b)
        return (a/d)+'/'+(b/d)
    } else {
        return '0/1'
    }
};
function add(a,b){
    const [a1,b1] = a.split('/')
    const [a2,b2] = b.split('/')
    return (a1*b2 + a2*b1) + '/' + (b1 * b2)
}

function maxCommonDivisor(a,b){
    a = Math.abs(a)
    b = Math.abs(b)
    let d = a%b
    while(d){
        a=b
        b=d
        d=a%b
    }
    return b
}