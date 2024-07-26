let array=[[1, 2, 3], [4, 5], [6, 7, 8, 9]]
const newarray=array.reduce((accumulator,currentvalue)=>{
    return  [...accumulator,...currentvalue]
})
console.log(newarray)