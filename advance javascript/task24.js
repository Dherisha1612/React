let array=[10, 20, 30, 40, 50]
const newarray=array.reduce((accumulator,currentvalue)=>{
    return  accumulator+currentvalue
})
let average=newarray/array.length
console.log(average)