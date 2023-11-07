const coding=["js","ruby","java","python","cpp"];

// coding.forEach(function (item){
//   console.log(item);  
// })             //call back function
// coding.forEach((item)=>{
//     console.log(item);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);
// a function as a argument printme  in foreach loop

// coding.forEach((item,index,arr)=>{            // yhe item has acess of index or arrrays
//     console.log(item,index,arr);
// })
const myCoding =[
    {
        languageName:"javascript",
        langaugeFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"p",
    },
    {
        languageName:"java",
        languageFileName:"ruby",
    },
]
myCoding.forEach((item)=>{              //  printing object separately 
    console.log(item.languageName);


})