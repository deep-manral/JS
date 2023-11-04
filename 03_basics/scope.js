//var c=300;
let a=300;
if(true){
    let a=10;
    let b=20;
    // console.log("inner",a);

}
// console.log(a);
//console.log(b);
//console.log(c);
function one(){
    const username="deepak";
    function two(){
        const website="youtube";
        // console.log(username);
    }
    // console.log(website);
    two();
}
// one();
//++++++++++++++++intresting concept++++++++

function addone(num){
    return num+1;
    console.log(addone(num));
}

const adTwo=function(num){  // it is an expression that hold function or can be hold json etc 
    return num+2;

}
// 
