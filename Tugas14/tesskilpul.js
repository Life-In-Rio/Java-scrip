function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000); 
    });
  }
  

  async function messages() {
    const msg = await helloWorld(); 
    console.log(msg);
  }

  messages();
 
  
  function ambilDatauser(){
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(function (response) {
    return response.json();
  })
  .then(function (post) {
    console.log(post);
  });
}

ambilDatauser();
  
  
  
  
  
  
  

