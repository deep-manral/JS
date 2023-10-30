// console.log(myDate.toDateString());
// console.log(myDate.toLocalString());
// console.log(typeof myDate());
//let myCreateDate=new Date(023,0,23);
//let myCreateDate=new DAte(03,0,23,5,3);
let myCreatedDate=new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());
let myTimestamp= Date.now();
console.log(Math.floor(Date.now()/1000));//milesecond to second

// console.log(myTimestamp);

let newDate=new Date();
console.log(newDate);
console.log(newDate.getDay());
newDate.toLocaleString('default',{
weekday:"long"

})


