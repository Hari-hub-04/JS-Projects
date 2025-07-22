/*
There are 3 types of loops
1. For
2. While
3. Do while

for loop is used when we know the running time
while loop is used when the running time is unknown
do while is used when we need atleast one time running
 

//while
let x = 1;
while (x < 10) {
    console.log(x);
    x++;
}

console.log("Next answer");

//do while
let y = 1;
do {
    console.log(y);
    y++;
}
while (y < 10);

console.log("Next answer");

//for
let q;
for (q = 10; q <= 11; q++) {
    console.log(q);
}

//factorial and sum of n numbers using while
let z = 5;
let ans = 1;
let i = 1;
while (i <= z) {
    ans = ans * i;
    i++;
}
console.log(ans);

let x=4;
let sum=1;
let i=0;
while(i<=x){
    sum=sum+i;
    i++
}
console.log(sum)
*/

//factorial and sum of n numbers using for

let f = 5;
let ansr = 1;
for (let i = 1; i <= f; i++) {
    ansr = ansr * i
}

//0,0
console.log(ansr);


let f1 = 5;
let answer1 = 0;
for (let i1 = 0; i1 <= f1; i1++) {
    answer1 = answer1 + i1
}
console.log(answer1);