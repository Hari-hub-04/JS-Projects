//there are 2 types of operators
/*
unary operator--using the 1 operand
binary operator-- using the 2 operand
*/


//Unary operator
let x=1;
console.log(x);
x= (-x);
console.log(x);
/*we can use the mathematical function like
+  x  +  =  +
-  x  -  =  +
+  x  -  =  -
-  x  +  =  -
*/

//binary operator
let a=12,b=6;
let sum=(a+b);
let sub=(a-b);
let mul=(a*b);
let div=(a/b);
let exp=(a**b);
let modulo=(a%b);
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(modulo);
console.log(exp);

//we can concatenate the two string by using + operator 
let h= "hi" ,k='hello';
console.log(h+k);
//we can concatenate the two numbereven if it is under the quoutes by using + operator
let i="21", j="2";
console.log(i+j);
//in this case if we need to answer the convert two string as a number by adding a unary operator(+,-,*,/) before it
console.log(+i + +j);
console.log(+i - +j);
console.log(+i * +j);
console.log(+i / +j);

//assignment operator
//here = is the assignment operator
let u=v=w=y=10;
console.log(u,v,w,y);

//modify in place
let f1=20,f2=20,f3=20,f4=20;
f1 += 5;
f2 -= 5;
f3 *= 5;
f4 /= 5;
console.log(f1,f2,f3,f4);

//increment or decrement
//pre and post
/*
1.post increment/decrement
first of all it returns the value
then made operation

2.pre increment/decrement
first of all it made operations
then return the value
*/
let d=100;
d1=++d;
console.log(d1);
let f=100
f=--f;
console.log(f);
let g=100;
g=g++;
console.log(g);
let l=100;
l=l--;
console.log(l);


