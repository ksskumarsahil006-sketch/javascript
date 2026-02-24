// /* date objects represnts and moment in time in a platform independent format . Darte obejcts encapsulates
// an integrtal number that represents milliseconds since the midnight 
// at the beginnig of the January 1 , 1970*/
// let mydate = new Date();
// console.log(mydate);
// //output is 2026-02-24T21:00:23.029Z
// console.log(mydate.toString());
// // this is the output now Tue Feb 24 2026 21:01:26 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());
// //Tue Feb 24 2026 this is theoutput now 
// console.log(mydate.toTimeString());
// // 21:03:16 GMT+0000 (Coordinated Universal Time) this is the new style only to get time 
// console.log(mydate.toISOString());
// //2026-02-24T21:04:27.857Z this is output format
// console.log(mydate.toLocaleString());
// //  this is the 2/24/2026, 9:05:22 PM output format for this 
// console.log(typeof mydate)//object
// let mycreateddate = new Date(/*year , month it starts form 0 , then date*/ 2026,1,26);
// console.log(mycreateddate.toDateString());//this gives the output Thu Feb 26 2026
/* Ab hme time ke bare me padhna hai */
let mycurrenttime = Date.now();
// console.log(mycurrenttime.toLocaleString());//1,771,967,774,945 this is result
let createdtime =new Date("2024-6-23");
console.log(createdtime.getTime());
console.log(mycurrenttime);
//Seconds mein convert c=krne ke liye time ko thousand se diviede kr dena hai
// comparison ke liye millicswcidshi chahiye 
//otherwise 
console.log(Math.floor(createdtime/1000));
//Month 0 se start hota haui aur 1st day monday hota hai
