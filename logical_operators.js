
console.log(0||10);//op will be 10 because as per OR condition 0 is not accepting in OR
console.log(19||1);//op will be 19 because if the 1st term is non zero it return the 1st term
console.log(21&&1);//op will be 1 because if the 1st term is non zero then it evaluate the 2nd term and return the 2nd term
console.log(0&&199);//op will be 0 because if the 1st term is zero then it return the 1st term
console.log(!0);//op will be 1 because it inverts the given value
console.log(!1);//op will be 0 because it inverts the given value


//eligible for marriage
let age=28;
let gender="Male";
if(age>21 || (age>18 && gender=="Male")){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}