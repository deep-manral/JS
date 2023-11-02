//singleton

// Object.create;//we can create an object like this
//object literals
const mySym=Symbol("key1")
const jsUser={
    name:"Deepak",
    "full name":"Deepak Manral",//we cannot fetch this value using .
    [mySym]:"myKey1",//act like an key 
    age:18,
    Location:"Jaipur",
    email:"deepakman2006@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Saturday"]
    //to fetch the dat 
  
}//this is an object
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mySym)//it still  not use as a symbol it is string
// console.log(jsUser[mySym]);
jsUser.email="deepak@chatgpt.com"//to change email or overright email
///to freeze the js user
jsUser.email="deepmanral@microsoft.com";
// console.log(jsUser);
jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

