// const numbers = [1, 2, 3, 2, 4, 2, 5]
// const index=numbers.indexOf(2)
// console.log("firstindex:",index)
// const numbers = [1, 2, 3, 2, 4, 2, 5]
// const index=numbers.lastIndexOf(2)
// console.log("lastindex:",index)
const numbers = [1, 2, 3, 2, 4, 2, 5]
function index(x){
    let firstindex=numbers.indexOf(x)
    let secondindex=numbers.lastIndexOf(x)
    let object={firstindex,secondindex}
    console.log(object)
}
// console.log(object)
index(2)
