let array=['apple', 'banana', 'cherry', 'date']
const newarray=array.reduce((accumulator,currentvalue)=>{
        return accumulator.length>=currentvalue.length ?accumulator:currentvalue
    })
    console.log(newarray)
