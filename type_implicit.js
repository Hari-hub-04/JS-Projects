//converting the boolean from string
let isAdult = true;
isAdult = String(isAdult);
console.log(isAdult);
console.log(typeof isAdult);

//we can perform aritmetic operation for 2 strings 
console.log("2"-"1"); //op will be 1
console.log("21"/"3"); //op will be 7
console.log("2"*"4"); //op will be 8
console.log("2"+"3"); //op will be 23 because + acts as a concatenation operator

//Boolean type conversion
//if i give a string it shows true
//if i give a empty space then it shows true

let x=10;
let x1="tjfkjdkjlkjf";
let x2= "   ";
let x3= "";
console.log(typeof x);
console.log(typeof x1);
console.log(typeof x2);
console.log(typeof x3);
x= Boolean(x);
x1= Boolean(x1);
x2= Boolean(x2);
x3= Boolean(x3);
console.log(typeof x);
console.log(typeof x1);
console.log(typeof x2);
console.log(typeof x3);



