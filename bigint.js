//big int is used if the number size exceeds "900719254740991" (2^53-1) 
//main rule for bigint we must specify n at the end of the number
//if were doing an addition we must mention the n for the both operand at the (ex refer: line no 5)

let periya_number = 12345678910n;
let sum = (periya_number+2024n);
console.log(typeof sum);
console.log(sum);