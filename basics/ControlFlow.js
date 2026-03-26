//control flow statements

//if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}   else {
    console.log("You are a minor.");
}       
// <,>,<=,.==,=> ,!=,===,!==


/*Reminder var use krne pe apne scope ke bahar bhi accesible rhta hai*/
// falsy Values:- false,0,-0,BigInt(0n),'',null,undefined,NaN
//Truthy Values:- true,{},[],1,-1,3.14,'0','false',new Date(),-Infinity,Infinity



const objectempty={}
if(Object.keys(objectempty).length===0){
    console.log("Object is empty");
}
//Object.keys() method object ke own enumerable properties ke naam ka array return krta hai.
//  Agar object empty hai to uska length 0 hoga. Isliye hum check krte hain ki Object.keys(objectempty).length === 0,
//  agar true hai to console mein "Object is empty" print hoga.
// false==0=> true
// false===0=> false
// 0==""=> true
// 0===""=> false
//false==''=> true
// false==false=> true
// false===false=> true




// NUllish Coalescing Operator (??) :- Nullish coalescing operator (??) 
// ek logical operator hai jo null ya undefined



let val1 = 5 ?? 10;
console.log(val1); // Output: 5
let val2 = null ?? "Default Value";
console.log(val2); // Output: "Default Value"
let val3 = undefined ?? "Default Value";
console.log(val3); // Output: "Default Value"    
let val4 = 0 ?? "Default Value";
console.log(val4); // Output: 0
let val5 = "" ?? "Default Value";
console.log(val5); // Output: ""            




// Ternary Operator (?:) :- Ternary operator (?:) ek conditional operator hai jo ek expression ko evaluate krta hai aur uske basis pe do values mein se ek return krta hai. 
// Syntax: condition ? value_if_true : value_if_false;

 age = 20;
let result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result); // Output: "You are an adult."