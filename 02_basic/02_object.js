// Singleton object
// object.create

//object literals

const MySymb = Symbol("key1")
// console.log(typeof MySymb);

const Userjs = {
    name : "rahul",
    fullname :"rahul kumar",
    email : "rahul123@gmail.com",
    [MySymb] : "keyvalue",
    Myage : 15,
    location : "gurugram",
    isLoggedIn : false,
    LastLoggin : ["Mon" , "Tus"]
}

// console.log(Userjs.email);
// console.log(Userjs["email"]);
// console.log(Userjs["fullname"]);
// console.log(Userjs[MySymb]);


Userjs.email = "rahul123@chatgpt.com"
 // Object.freeze(Userjs)
Userjs.email = "rahul123@microsft.com"
// console.log(Userjs);


Userjs.greeting = function(){
    console.log("hello ritika");
   return 0;
}
Userjs.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    return 1;
}

console.log(Userjs.greeting());
console.log(Userjs.greeting2());

