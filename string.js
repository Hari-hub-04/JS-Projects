//we can store string with in double or single quotes 
//and also backtick(`) also use to store stirng
//while we are using the backtick we can use ' or " within it
//we can use ` for embeding by using the ${} what ever we give within the curly brace is evaluated
// ,If i give a expression like 2+3 it will be evaluated and same as i can call a variable within it by using the variable name (eg:refer line no 10,11)
let a = 'hari';
let b = "kumar";
let c= "a+b";
const my_name="Hari Kumar E";
let names = `My name is ${my_name}`;
let names1 = `checking of backtick ${a+b}`;
console.log(names);
console.log(a);
console.log(b);
console.log(c);
console.log(names1)
