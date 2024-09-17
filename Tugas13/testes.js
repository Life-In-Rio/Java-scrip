let progress = 100;

const download = new Promise((resolve, reject) => {
  if (progress === 100) {
    resolve("Download complete");
  } else {
    reject("Download failed");
  }
});

download
  .then((result) => {    
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

let data = "false";

  function fecthData() {
    return new Promise((resolve, reject) => { 
      if (data === "true") {
        setTimeout(() => {
            resolve("Data fetched");
        }, 3000);
        
      }else {
        reject("Data not fetched");
      }
    });
}

fecthData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })


    function fecthstep1 () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("step 1 complete");
            }, 1000);
        });
    }

    function fecthstep2 () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("step 2 complete");
            }, 2000);
        });
    }

    function fecthstep3 () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("step 3 complete");
            }, 3000);
        });
    }

    Promise.all([fecthstep1(), fecthstep2(), fecthstep3()])
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })