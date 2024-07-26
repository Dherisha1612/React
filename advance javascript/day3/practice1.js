// function higherOrderFunction(callback){
//     return callback(5)
// }
// function addTwo(num){
//     return num+2
// }
// console.log(higherOrderFunction(addTwo))
// function higherOrder(x){
//     return x(7)
// }
// function addTwo(y){
//     return y+9
// }
// console.log(higherOrder(addTwo))
// function out(){
//     let a=8
// function inner(){
//     let b=a+7
//     return b
// }
// return inner()
// }
// console.log(out())
// function word(){
//     console.log("qweer")
// }setTimeout(word,5000)
// function word(){
//     console.log("happy birthday")
// }setInterval(word,1000)
// setTimeout(function() {
//     clearInterval(intervalId)
//     console.log('Interval stopped')
// }, 5000)
let counter = 0
function intervalFunction() {
    console.log('Hello!')
    counter++
if (counter >= 3) {
        clearInterval(a)

}
}
// const a = setInterval(intervalFunction, 1000)
(function(){
    console.log("this is an IIFE")
})()