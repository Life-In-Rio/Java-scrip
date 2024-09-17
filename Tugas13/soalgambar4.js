let duration = 2000;
function simulatetask() {
    return new Promise((resolve, reject) => {
        if(duration <= 2000) {
            setTimeout(() => {
                resolve("task success");
            }, duration);
        }else {
            reject("task failed");
        }
    });
}

simulatetask()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("task completed");
    })