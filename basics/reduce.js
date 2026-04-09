const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const initialvalue = 0
const sumwithinitial = array.reduce((accumulator, index) => accumulator + index, initialvalue)
console.log(sumwithinitial);
/* 
Accumulator mein initially initial value chala jata 
hai jo ki zero hai , currentvalue yhan array ke elments
ko dikhata hain , uske baad accumulator mein accumulator 
and currentvalue pe kiya hua operation perform hoke 
store ho jata hai

*/
const myNums = [1,2,3,4]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
        return acc + currval
}, 0)
console.log(myTotal)