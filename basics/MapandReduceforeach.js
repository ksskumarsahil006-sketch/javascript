const coding  = ["js","ruby","java","python","cpp"]
// const value= coding.forEach((item)=>{
//   //console.log(value)
//   return item
// })
// console.log(value);-> given undefined


// const mynums = [1,2,3,4,5,6,7,8,88,9,10]

// const gt5 = mynums.filter((num)=> num>4)
// console.log(gt5)//jo bhi value condition satisfy lrenge wo rahenge baanki saare store nhi honge variable mein


// //ForEach se 
// mynums.forEach((num)=>{
//     if(num>4){
//         return gt5.push(num);
//     }
// })
// console.log(gt5);// is baar isme forEach ka use krke andr daala gya hai


const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981,
edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
edition: 2008 }, 
{ title: 'Book Three', genre: 'History', publish: 1999,
edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
edition: 2010 },
 { title: 'Book Five', genre: 'Science', publish: 2009,
edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987,
edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986,
edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011, 
edition: 2016},
{ title: 'Book Nine', genre: 'Non-fiction', publish: 1981, 
edition: 1989}]

let userbook = books.filter((Bk)=>Bk.genre==='History');
console.log(userbook);
userbook = books.filter((bk)=>bk.publish >= 2000 && bk.genre==="History")

console.log(userbook);