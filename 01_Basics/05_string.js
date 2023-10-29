const name="hitesh";
const repocount=5;
console.log(name+repocount+"Value");
//treditional way
console.log(`hello my name is ${name} and my repo count is ${repocount}
`);
const gameName=new String('Deepak');
console.log(gameName[0]);
console.log(gameName.__proto__);
//methords
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));
const newString=gameName.substring(0,4);//lat 4th value not included
console.log(newString);
const anotherString=gameName.slice(-8,4);//we can either put negative value in slice methord similiar to substr

console.log(anotherString);
const newStringOne="     Deepak   ";
console.log(newStringOne);
console.log(newStringOne.trim());//delte or reduce the spaces

const url="https://deepak.com/deepak%20manral";
console.log(url.replace('%20','-'));//replace methord is used to replace any string or caracter using replace metord
//to chekk if the character,num any one is fond or not we can use
console.log(url.includes('deepak')); 
console.log(gameName.split('-')); /// consvert string to Array

                     