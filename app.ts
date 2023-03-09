//type annotations
//emplicit variables
let myName= "Hammad"; //string
let newNumber = 3; //number
let bol = true; //boolean
console.log(myName);
console.log(typeof newNumber);
console.log(bol);
console.log(`My name ${myName}, ${newNumber}, ${bol}`);
let undefine;
console.log(undefine);
let x = 3; //globle scope variable
{
    let x = "h"; //block scope variable
    console.log(x); //block scope
}//block
console.log(x); //globle scope
//--------------------------------------------------------
let nam = "hammad";
let num = 12;
let bl = false;

console.log(`My name is ${nam}, ${num}, ${bl}`);

let n1 = 2;
let n2 = 4;
//let sum = n1+n2;
console.log(n1 + n2); //sum
console.log(n1 - n2); //substract
console.log(n1 * n2); //multiplication
console.log(n1 / n2); //divide
console.log(n1 ** n2); // exponentional/power 

let str1 = "1";
let str2 = "2"
console.log(str1+str2);

let n3 = 4;
let n4 = 2;
console.log(n3 - n4);

let n5 = 4;
let n6 = 2;
console.log(n5 * n6);

let n7 = 5;
n7 = n7 + 5;
n7 += 5;
console.log(n7);

let n8 = 5;
n8 = n8 * 5;
n8 *= 5;
console.log(n8);

let n9 = 5;
let n10 = 10;
console.log(n9 == n10);
console.log(n9 === n10);
console.log(n9 != n10);
console.log(n9 > n10);
console.log(n9 < n10);
console.log(n9 <= n10);
console.log(n9 >= n10);
console.log(!(n9 < 10));
console.log(!(n9 > 10));

//Functions
function greet(name: string):void {
    console.log(`Hello ${name}`);                                                                                                                                                       
}
greet("hammad");

const sum=(n1: number, n2: number)=>{
    console.log(n1+n2);
}
sum(1,2);
//tsconfig.json
//next class hosting concept
//primitive data types ==> built in
//String ==> store text values
//number ==> numeric values
//boolean ==> true/false
//undefined ==> not assigned value
//null ==> unknown value
//non-primitive ==> user defined
//(``) these are template literals
//typeof ==> to check the data type of varible
//operators
//assignment operators
//== value comparing
//=== value and data type comparing
// && and it checks both conditions must be true ----- || or operators check any one condition is true it returns true