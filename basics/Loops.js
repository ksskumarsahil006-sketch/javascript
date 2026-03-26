// for(let index = 0;index<5;index++){
//     const element  = index;
//     console.log(element);
// }







//continue ka use krte hain skip krne ke liye
//  break ka use krte hain loop ko rokne ke liye
for(let index = 0;index<5;index++){
    if(index===2)
    continue;
    console.log(index);
}
//Output: 0,1,3,4
// Q how to iterate over an array?
const arr = [1,2,3,4,5];
for(let index = 0;index<arr.length;index++){
    const element  = arr[index];
    console.log(element);
}
// output: 1,2,3,4,5




//Q how to iterate over an object?
const obj = {
    name:"Sahil", 
    age:20,
    city:"Bhopal"
}
for(let key in obj){
    console.log(key, obj[key]);
}
// output: name Sahil, age 20, city Bhopal




//break aur continue in objects 
for(let key in obj){
    if(key==="age")
    continue;
    console.log(key, obj[key]);
}
// key ko skip kr diya age ko skip krne ke liye
