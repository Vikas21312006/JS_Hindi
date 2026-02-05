//Array

const myArr = [0, 1, 2, 3, 4, 5, 6]//resizeable
const myHeors = ["Shaktiman", "Bhagat Singh"]
const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[2]);

// Array Methods
//  myArr.push(7)
//  myArr.push(8)
//  myArr.pop()
//  console.log(myArr);

//myArr.unshift(9)
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.includes(3));
const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr);


// Slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)


console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)// remove the element from array
console.log("C ", myArr);
console.log(myn2);




