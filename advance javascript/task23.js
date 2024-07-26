
let array=['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const newarray=array.reduce((accumulator,currentvalue)=>{
    return  {...accumulator,...currentvalue}
})
console.log(newarray)
