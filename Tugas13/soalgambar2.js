const cheknumber = [3,5,1,6]

function checknumber() {
    return new Promise ((resolve, reject) => {
        if (cheknumber[1] >= 5){
            resolve("true")
        }else
        reject("number to low")
    })  
}

checknumber()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })