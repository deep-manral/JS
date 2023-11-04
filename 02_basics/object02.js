//oject singletons
// const  tinderUser=new Object();//singleton oject
const tinderUser={};//non singleton object
tinderUser.id="123abc";
tinderUser.name="sammy";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);
const regularUser={
  email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"hitesh",
            lastname:"choudary",

        }
    }
}
console.log(regularUser.fullname?.userFullname.firstname);

const obj1={1:"a",2:"b"}//1 is key and a is value  //target
const obj2={3:"a",4:"b"}//source
//const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2);//it only JOIN THE OBJECT 1 or 2 within an separate object
// 
const obj3={...obj1,...obj2};
// console.log(obj3);
const users=[

    {
        id:1,
        email:"d@email.com"
    },{

    },{

    }
]
users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//is isLoggedin property found or not


const course={
coursename:"js in hindi",
    price:"999",
courseInstructer:"deepak"}
//course.courseInstructer 

const {courseInstructor:instructor}=course//object destructure
// console.log(courseInstructor);
console.log(instructor);
// const navbar=({company})=>{    //object destructering

// }
// navbar(company ="hitesh")

///       APIS
// {
//   " name":"hitesh",            //sometimes apis are shown as form of string and sometimes in the format of arrays
//   " coursename":"js in hindi" ,
//    "price":"free",


// }
//array format
// {
//     {}
//     {}
//     {}

// }

