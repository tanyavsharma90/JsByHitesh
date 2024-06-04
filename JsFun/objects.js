// singleton
//Object.create

//object litrale

const mySym = Symbol("mykey");

const obj1 = {
    name : "tanya",
    "full name" : "tanya sharma",   // if this type of key u used then you have to necessery to use [] for excess its value***********
    age : 33,
    email : "tanyaVshrama@gmail.com",
    isUserLogged : false,
    lastLoginDays : ["monday","tuesday"],
    [mySym] : "arrow",                     //Symble used in object with squre brackets only then you can excess value*******
}

// console.log(obj1.mySym);
// console.log(typeof(obj1[mySym]));

// console.log(obj1);

// console.log(obj1.email);  d          // this will create a problem its not a good approch**********
// console.log(obj1["email"]);    dd         //write way to excess value in objects ***************

// console.log(obj1["full name"]);

// console.log(typeof(obj1[mySym]));

// console.log(obj1);

//*************note you can change value also and freez too */

obj1.name = "pushpa shamra";
 
// Object.freeze(obj1);   //**********with this freez you can not change your key value otherwise it will change the value */

// obj1.name = "Vironika";

// console.log(obj1);


//********note about to add function in object  *********/

obj1.fun1 = function(){
    // console.log("hi Js learner function im object");
}

// console.log(obj1.fun1());

obj1.fun2 = function(){
    // console.log(`hello tannu are you , ${this.name}`);
}

console.log(obj1.fun2());

obj1.fun3 = function(){
    // console.log(`yes I am  , ${this.name}`);
}

// console.log(obj1.fun3());

//***********note learn how to ""data structuring"" ****** */

const course = {
    coursename : "webdesingnig",
    hours : "2 hours",
    fees : 1200,
}

// console.log(course.hours);   

const {hours : time} = course   //this is a data structuring // if "'name of keys""" are big then you make them short with colon

console.log(time);