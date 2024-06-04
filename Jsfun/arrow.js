const user = {
    name : "tanya",
    email : "taanya@gmai.com",
    age : 33,

    welcomeMassage : function(){
        console.log(`${this.name}, hi, welcome fronted developer`) 
        console.log(this)   //************note "this" word is for current context */
    }
}

// console.log(user.age);
// console.log(user.welcomeMassage());
// console.log(this)         // *******************"this" is word has no current context or variables****************



//*********not "" this key word is not fetch value ""in function"" only it has been in ""objects"" */

// function newOne(){
//     const user = "viro";
//     console.log(this.user)    //cant excess "this.user in console"
// }

//  const newOne = function (){
//         const user = "viro";
//         console.log(this.user)    // **************in this type of varaible funtion also has same problem************
//     }


//*********Arrow function "this" will also not work******** */

    // const arrowFun = () =>{
    //     const user = "tan";
    //     console.log(this.user)
    // }
    
    // arrowFun();


    //********explicit ""{ with return word}"" and implicit " with parenthieses ()" in arrow function */

    // const arro1 = (num1, num2) =>{
    //     return num1 + num2
    // }                      //explicit arrow function example*******************



    const arro1 = (num1, num2) => ( num1 + num2 )  //implicit example************* in react you will be using this implicit                                                                     function
                                                                
    // console.log(arro1(23, 35));

    // arrow func with obectjs********

   
    const arrwoFunc2 = (val1, val2) => ({name : "hitoo"});

    console.log(arrwoFunc2());