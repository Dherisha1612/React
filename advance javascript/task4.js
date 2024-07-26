// let numbers=[1, 2, 2, 3, 4, 4, 5]

// const num=numbers.find((num)=>{
//     return numbers[i]
// })
// console.log(num)
// let numbers=[1, 2, 2, 3, 4, 4, 5]
// const num=numbers.filter((num)=>{
//     return num
//      })
//      console.log(num)
// let num=[1,2,3,4,5]
// let numbers=[1, 2, 2, 3, 4, 4, 5]
// const sum=num.reduce((accumulator,currentvalue)=>{
//     return accumulator=currentvalue
// },0)
// console.log(sum)
let numbers=[1, 2, 2, 3, 4, 4, 5]
const result = new Set(numbers)
console.log(Array.from(result))