// // // const greet = function() {
// // //   return "Hi there!";
// // // };
// // // console.log(greet()); // Hi there!
// // A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly.
// console.log(typeof(null));
// const x = ()=>{};
// console.log(x.name);
function foo(x,y,z){
    return x+y+z;
}
const bar = foo.bind(null,1);
console.log(bar(2,3));
