// function a(){
    //     return "hi"
    // }
    // console.log(a())
    // async function a(){
    //     return "Hi"
    // }
    // console.log(a())
    const fetchAll = async () => {
        try {
            const response = await fetch('./practice.json')
            const data = await response.json()
            const value=await data.items
            console.log(value)
            let body=document.getElementById("tbody")
            let para=""
            for(i=0;i<value.length;i++){
            para+=`<tr>
                <td>${i+1}</td>
                <td>${value[i].name}</td>
                <td>${value[i].price}</td>
                <td>${value[i].image}</td>
                <td>${value[i].company}</td>
                </tr>`
            }
            body.innerHTML=para
        }
      
         catch (error) {
            console.error(error)
        }
    };
    fetchAll()