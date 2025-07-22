//continue helps to skip the iteration
//break helps to end the statement
//switch helps to choose the various option based on the logic

let a=5;
i=1;
while(i<=a){
    if(i==2){
        break;
    }
    i++
    console.log(i)
}

//for continue
let a1=5;
for(i=1;i<=a1;i++){
    if(i==2){
    continue;
    }
    console.log(i)
}

//switch statement
let z=10;
switch(z){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
        break;
    case 6:
        console.log("6");
        break;
    case 7:
        console.log("7");
        break;
    case 8:
        console.log("8");
        break;
    case 9:
        console.log("9");
        break;
    case 10:
        console.log("10");
        break;
    default:
        console.log("the option is not available");
}