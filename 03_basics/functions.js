
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
function loginuserMessage(username){
    if(username===undefined){
        console.log("please enter username");
    }
    return `${username} just logged in`
}
console.log(loginuserMessage("deepak"));