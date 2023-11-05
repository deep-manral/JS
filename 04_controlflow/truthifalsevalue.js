const userEmail="depak@12gmail.com";
if(userEmail){
    console.log("got user email");

}
else{
    console.log("dont have any emial");

}
//false value
//false ,0, -0,BigInt 0n,"",null,undefined,NAN
// truthy values
// "0",'false',"",[],{},function(){},
// if(userEmail .length===0)
// {
//     console.log("array is empty");
// }
// const emtyObj={}
// if(Object.keys(emptyObj).length==0){
//     console.log("Objet is empty");

// }
//nullish caoliscing operator(??);
let vsl;
vsl=null??10;     ///databse connection used//handle the null constion
console.log(vsl);

//ternary operaor
// codition? true:false;
const iceTeaPrice=100;
iceTeaPrice<=80? console.log("less tahn 80"):console.log("more tahn 80");