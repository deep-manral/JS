//this shows the current context
//imefiatly invoked function expression   IIFE
(function chai(){  //named iife
    console.log("db connected");
})();
(()=>{               //IIFE using arrow function or unnamed iife
    console.log(`Db connected two ${name}`);
})('deepak');

