
// function calculatorCartprice( ...num1){
//  return num1;

// }

function calculatorCartprice( val1, val2, ...num1){
    return num1;
   
   }

// console.log(calculatorCartprice(200, 400 ,560,5000,600));

//************how to pass object in function  *********************/

const users = {
    name : "tannu",
    price : 399,
}

function handleObject(anyObject){
    // console.log(`this is my username ${anyObject.name} , and this is a ${anyObject.price}`)
}

// handleObject(users);

//*********second way direct to pass objects ************* */

handleObject({
    name : "vironika",
    price : 400,
})

// ************now array pass in function******************

const myArray = ["t.v", "table","bat","boll"];

function handleArrya(getArray){
    return getArray[3];
};

// console.log(handleArrya(myArray));

// console.log(handleArrya(["t.v", "table","bat","boll"]))

//**********local scope and global scope in function and if else condition********************* */

let a = "1";
// const b = "2";
// var c = "3";

if(true){
    let a = "3090";
    const b = "2";
     var c = "3";
    //  console.log(`let a has block scope ${a}`)
}

// console.log(` And this let "a" has global scope  ${a}`)
// console.log(b);
// console.log(c);   //var variable has global and local scope both

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//nesting in function

function fruits(){
    const fruit = "mango";
    
    function chocolate(){
        const chocoBar = "icream";
        // console.log(fruit);       //out variable excess
        // console.log(chocoBar)                           // child can excess parent,s variable

    }

    // console.log(chocoBar); //nesting varable excess in parent function
                            // nesting variable has their own block scope only

    chocolate();
}

fruits();


//*********************same in if else global and local scope ***********************/

if(true){
    const user = "tannnu";

    if(user === "tannnu"){
        const website = "insta";
        // console.log(user);    // only this will print becuse child can excess their parent,s variable
    }

    // console.log(website);   it has a block that,s why it will not excess
}

// console.log(user);


//++++++++++++++++++++++++ so many ways you will be able to define the function+++++++++++++++++++

// console.log(addOne(2));

function addOne(num){
    return num + 1;
}

// second way to hold function in a variable******************


// console.log(addTwo(5))   //************ before decration funtion console will not print */

const addTwo = function (num){
    return num + 2;
}

// console.log(addTwo(5))    //******** after declartion code will excute */

