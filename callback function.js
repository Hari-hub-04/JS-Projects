function calculation (oper,a,b){
    return oper(a,b);
}
let add= function (a,b){
    return a+b;
}
let sub= (a,b)=> a-b;

console.log(calculation(add,10,2));