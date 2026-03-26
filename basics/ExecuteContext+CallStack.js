// Execute Context and Call Stack 
/* Code 2 part mein divide hota hai
1. Global Execution Context refers krta hai variable this 
Browser ka global object aur node mein global object alag hota hai
2. Function Execution Context 

MongoDB mein bhi global object hota hai jiska naam global hota hai
  Evaluate krne ke liye use hota hai



>>>>Memory Creation Phase :- Only memory is allocated for variables and functions. 
    Variables are initialized with undefined and functions are stored as a whole in memory.
1. Variable Object create hota hai jisme function ke arguments, inner variable
    aur function declarations store hote hain
2. Scope Chain create hota hai jisme current execution context ke variable 
    object ke reference hote hain aur parent execution context ke variable 
    object ke reference bhi hote hain 
3. sbke value undefined hoti hai
4. function declarations memory mein store hoti hain as a whole it means defination





>>>>>Code Execution Phase :- Code execute hota hai line by line.
1. Variable aur function declarations ke memory address se access hota hai
2. Variables ko unke assigned values se replace kiya jata hai
3. Function calls ke liye new execution context create hota hai aur call stack mein push hota hai
 */

/* Call Stack
Call Stack ek data structure hai jo function calls ko manage krta hai. Jab bhi koi 
function call hota hai, to uska execution context call stack mein push hota hai. 
 Jab function ka execution complete ho jata hai, to uska execution
  context call stack se pop ho jata hai. Is tarah se call stack 
  function calls ko track krta hai aur ensure krta hai ki functions 
  sahi order mein execute hon.
 */

let val1= 10;
let val2= 20;

function sum(a,b){
    return a+b;
}
let result1=sum(val1,val2);
let result2=sum(30,40);
console.log(result1);
console.log(result2);
/* Jitni baar bhi function acll hoga utni baatr ek ek nayi enviroment 
create hogi us fucntion. Aur utni hi baar meory crearion phase and execution
phase create higi sath hi sath execution thread bnegi .
 Iska return Gobal Execution context mein hota hai
 Phir ye delete ho jati hai 
   */




 /*
 function calling mein LIFO (Last In First Out) 
    principle follow hota hai.
    
 */