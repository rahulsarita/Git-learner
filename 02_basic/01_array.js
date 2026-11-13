const MyArray = [0,1,2,3,4]
const dcheroes = ["batman","superman","flash","wonderwomen"]
const heroes = ["ironman", "thor","hulk"]
const MyArray2 = new Array(1,2,3,4,5)
// console.log(MyArray[1]);

// array method
// MyArray.push(7)
// console.log(MyArray);

// MyArray.push("ironman")
// console.log(MyArray);

// MyArray.pop()
// console.log(MyArray);

// MyArray.unshift(9)
// console.log(MyArray);

// MyArray.shift()
// console.log(MyArray);

// console.log(MyArray.includes(9))
// console.log(MyArray.indexOf(3));

// const newarr = MyArray.join()
// console.log(typeof newarr);
// console.log(MyArray);

// slice and splice

// console.log("1. ",MyArray);

// const myn1 = MyArray.slice(1,3)
// console.log(myn1) 

// console.log("2. ",MyArray);
// const myn2 = MyArray.splice(1,3)
// console.log(myn2)

// MyArray.push(heroes)
// console.log(MyArray);
// console.log(MyArray[3][1]);

const allheroes = heroes.concat(dcheroes)
// console.log(allheroes);

const all_new_heroes = [...heroes,...dcheroes]
// console.log(all_new_heroes);

const anoter