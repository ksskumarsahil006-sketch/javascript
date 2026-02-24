let user={
    username:"sahil",
    price:"999",
    welcome:function(){
        console.log(`Welcome, ${this.username}`)
    }
}
user.welcome();
//this current context ko refer krta hi
user.username="you";
user.welcome();
//globally this krne pe window aata hai kyunki whi 
//global variable hota hai maximum window pe // tye tabhi hota hai
//jab hm inspect krte hain tb
// nhi to {} ye aata hai


const sahil=(num)=>num+=2;
//arrow function mein this.varile krne pe undefined aata hai 
// normally ye undefined deta hia




//return nhi likhne pe usko implicit return krna bolte hain iska mtln {} ye use nhi lre honge function mein 
//instead of {} we have to () to direct return the value which was coming out of the function 

// aisa isliye kyunki 
// const io = () =>{username:"sahil"}
// ye kaam nhi kr rha hoga jabki 
const io = ()=> ({username:"sahil"});
//ye kaam kr jayega
