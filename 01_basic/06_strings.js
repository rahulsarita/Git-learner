const name = "rahul"
const repo = 34
// console.log(name + repo +" value"); this formate is old and no efficency

// code readability improve and current time usable

// console.log(`Hello My name is ${name} and my repo counting is ${repo}`);


const gamename = new String("rahulkumar13225")
// console.log(gamename[6]);
// console.log(gamename['k']); undefined wrong method
// console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf("l"));

const newString = gamename.substring(0 , 9)
console.log(newString);

const anotherString = gamename.slice(0 , 5)
console.log(anotherString);


const otherString = gamename.slice(-15 , 15)
console.log(otherString);


const newStringone = "      rahul     "
console.log(newStringone);
console.log(newStringone.trim());


const Gamename = new String("rahul-kumar-345-55")
const url = "https://rahulkumar.com/rahul%2902kumar"
console.log(url.replace('%2902','-'));
console.log(url.includes('ram'));
console.log(url.includes('rahul'));
console.log(Gamename.split('-'));
