"use strict";
// console.log("--------|Plane Function|----------")
// function Sum(num1:number, num2:number) {
//     let num = num1 + num2;
//     // let num = 2 + 2;
//     // console.log(num);
//     return num;
// }
// console.log(Sum(2,2));
// console.log(Sum(32,4));
// console.log(Sum(12,27));
// console.log("--------|Arrow Function|----------")
// let sum1 = () => 2+2;
// console.log(sum1());
// let sum1 = () => {
//     console.log("Hammad");
//     return 2 + 3;
// }
// console.log(sum1());
let n = 5;
let b = 10;
if (n < b) {
    console.log("n is less then b");
}
else if (n > b) {
    console.log("n is greater then b");
}
else if (n === b) {
    console.log("n is equal to b");
}
else {
    console.log("Invalid");
}
//------------------------------------
let a1 = 10;
if (a1 % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
//next week assignment check vowels in a string
//nested if statements
//Array
let f = ["hammad", "Sajjad", 21];
console.log(f[0], f[1]); //single access
console.log(f); //access all values
f.push("Zain");
console.log(f);
f.pop(); //pop() removes last value
console.log(f);
//with while loop
let fruits = ["apple", "banana", "orange", "grapes", "pineapple"];
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
fruits.shift(); //removes the first index value
console.log(fruits);
fruits.unshift("abc"); // add the new value at the very first index of array
console.log(fruits);
// fruits.push("abc")
// fruits.pop()
// fruits.pop()
// console.log(fruits.pop())
//Methods of array
// pop() and push()
//shift() and unShift()
//splice() and slice()
let student = ["abc1", "abc2", "abc3", "abc4"];
console.log(student);
student.splice(2, 1, "abc5", "abc6", "abc7"); // add new value at the every point of the array effect the original array
console.log(student);
let st = student.slice(2, 5); // copy specific to so on index array does not effect original array
console.log(st);
