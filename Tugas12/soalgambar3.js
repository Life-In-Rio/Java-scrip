function greet(name, callback){
    console.log(`Hello ${name}!`);
    callback();
}

function saygoodbye(){
    setTimeout(() => {
        console.log("Goodbye!");
        
    }, 1000);
}

greet("Abyan", saygoodbye)
