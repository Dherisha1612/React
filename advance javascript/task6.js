let num=[1,2,3,4,5]
const sum=num.reduce((accumulator,currentvalue)=>{
    return accumulator*currentvalue
},1)
console.log(sum)