// dates
let Mydate = new Date()

// console.log(Mydate);
// console.log(Mydate.toString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toLocaleString());
// console.log(typeof Mydate);

// create date
// let createdDate = new Date(2026,0,23)
// console.log(createdDate.toLocaleString());
// console.log(createdDate);

// let createdDate = new Date(2026,23,12,3,5)
// console.log(createdDate.toLocaleString());
// console.log(createdDate);


// let createdDate = new Date("2023-11-11")
// console.log(createdDate.toLocaleString());
// console.log(createdDate);


let createdDate = new Date("11-11-2026")
// console.log(createdDate.toLocaleString());
// console.log(createdDate);

//+++++++time++++++++++
let mytimeStamp = Date.now()
// console.log(mytimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //10
console.log(newDate.getDay()+8); //3

`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})