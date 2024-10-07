

function fecthData() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("Data fetched");
        }, 3000);
    });
}

fecthData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

