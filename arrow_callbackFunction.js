//assign a function to variable
let a;
function odd_or_even(a){
    if(a%2==0){
        return"EVEN";
    }
    else{
        return"ODD";
    }
}
let oddEven = odd_or_even;
console.log(oddEven(9877987));

//assign a variable direct to a function

let c;
let OddEven = function(c){
    if (c%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(OddEven(1234567867))


//Arrow function
//Mostly arrow function is used for single line codes

let v;
let oddoreven=v=> v%2==1? "odd": "even";
console.log(oddoreven(109890));


