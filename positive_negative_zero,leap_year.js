/* //postive negative number
let num;
number = -200;
if(number>0){
    number="The given Number is positive Number";
}
else if (number==0){
    number="The given number is zero";
}
else{
    number="The given number is negative Number";
}
console.log(number); */

//leap year
let year;
yr=2008;
if(yr%4==0){
    if(yr%100==0){
        if(yr%400==0){
            console.log("The year is a leap year")
        }
        else{
            console.log("The year is not a leap year")}
    }
    else{
        console.log("The year is a leap year");
    }
}

else{
    console.log("The year is not a leap year");
}
