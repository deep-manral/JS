//for of loop
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);

    
}
const greeting="hello world";
for (const greet of greeting ) {
    console.log(greet);
    
}

// MAps   / /store unique values [pairs]
const map=new Map();
map.set('fr',"france");
map.set('usa',"united states of america");
map.set('ind',"india");
// console.log(map);
// for(const[ key,value] of map){
//     console.log(key,';',value);
// }
// for objects
const myObject={
    'game1':'nfs',
    'game2':'spiderman',

}
// for(const [key,value]of myObject){   //throw eror
//     console.log(key,":",value);
// }