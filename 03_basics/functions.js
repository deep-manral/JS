
//syntax
//function    functionname   (){ function scope}
function sayMyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("H");
console.log("I");
console.log("t");
}  
// sayMyname();
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);


// }
// const result=addTwoNumbers(3,4);

// ;
// function loginuserMessage(username){
//     if(username===undefined){
//         console.log("please enter username");
//     }
//     return `${username} just logged in`
// }
// console.log(loginuserMessage("deepak"));

//SHPPPING CART QUERRY
function calculateCartPrice(val1,val2,...num1){//... is known as rest operater 
     return num1;

}
// console.log(calculateCartPrice(200,377,89));
const user={
    username:"hitesh",
    price:199,


}
function handleObject(anyObject){
    console.log(`Username is${anyObject.username}and price is ${anyObject.price}`);


}
// handleObject(user);
//direct object passing
handleObject({
    username:"sayMyname",
    price:300

})
const myNewArray=[200,400,100,600];
function returnSecondvalue(getArray){
return  getArray[2];
}
// console.log(returnSecondvalue(myNewArray))
//directpass Array
console.log(returnSecondvalue([200,4433,3433,33]));