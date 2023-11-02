//array
const myArr=[0,1,2,3,4,5];
const myHeroes=["shaktiman","naagraj"];
const myArr2=new Array(1,2,3,4,);
// console.log(myArr[0]);
//Array methord
// myArr.push(6);
// myArr.push(7);
// myArr.pop();//remove last value
// myArr.unshift(9);//add first
// // myArr.shift();//used to remove 9 at the first
// console.log(myArr. includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);
// const newArr=myArr .join();//join bind the data as well as typeof to string
// console.log(myArr);
// console.log(newArr);
//slice ,splice
console .log("A",myArr);

const myn1=myArr.slice(1,3);//slice cuts or subset 1 or 3 
console.log(myn1);
console.log("B", myArr);

const myn2=myArr.splice(1,3);
console.log("C", myArr);//also splice manipulate the orgnal array
console.log(myn2);//it print the whole arr or subset 1 to 3 indexes
console.lo(myn2);
