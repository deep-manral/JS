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
