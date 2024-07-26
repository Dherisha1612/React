let array=[1,2,3,4,5]
let array1=[2,3,4,6,7]
let newarray=array.filter((num)=>{
   return array1.includes(num)
})
console.log(newarray)