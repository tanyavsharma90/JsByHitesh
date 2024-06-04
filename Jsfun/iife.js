// immediatly invoked function expressions
// IIFE is used because to get rid of globle polution, or variable  declartion se bachne ke liye
// for  immediatly fucntion excution

// function fastWork (){
//     console.log("IIfE");
// }

// fastWork();

//*******using IIFE *** * wrap in ()() in it/

 (function fastWork (){
    //****note this is a "named iife" */
     console.log("IIfE");

})();

//********note when u will be using "iife" you have to put semicolon must */

//    ( () => {
    // without name iife
//     console.log("iife with arrow function")
//     })();

( (name) => {
    console.log(`"iife with arrow function" ${name}`)
    })("tanya");    //*********same parameter and arguments given in it too, like normal function  */