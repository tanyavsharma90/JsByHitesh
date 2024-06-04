
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

console.log(handleArrya(["t.v", "table","bat","boll"]))