const fecthstep1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("step 1 complete");
  }, 1000);
});

const fecthstep2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("step 2 complete");
  }, 2000);
});

const fecthstep3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("step 3 complete");
  }, 3000);
});

Promise.all([fecthstep1, fecthstep2, fecthstep3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })