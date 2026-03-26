//WHILE AND DOWHILE LOOP
// WHILE LOOP
/* while loop mein bs condition checking hoti starting mein 
    and updation loop ke andr mein hota hai 
    jab tak condition true hoti hai tab tak loop chalta rahta hai
    agar condition false ho jati hai to loop terminate ho jata hai
    while loop ka syntax:- while(condition){
    //code to be executed
    }
*/
/*
    DO WHILE LOOP
    is loop mein phle ek baar code execute hoga while condition checking hogi 
    then decide hoga hi aage proceeed krna hai ya nhi 
    SYNTAX:-
    do{
    //code to be executed
    }
    while(condition);
    do while loop mein code at least ek baar execute hota hai chahe condition false ho jaye 
    isliye do while loop ka use tab kiya jata hai jab hume code ko at least ek baar execute karna hota hai
    aur uske baad condition check karni hoti hai
*/

while(true){
    console.log("Hello World");
    break;//ye loop ko terminate kr dega
}
let arr=[1,2,3,4,5];
let index=0;
while(index<arr.length){
    console.log(arr[index]);
    index++;
}
index=0;
do{
    console.log(arr[index]);
    index++;
}while(index<arr.length);