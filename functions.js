//its mandatary to name a function meaningfully like add,sub,div,mul

let a = 44, b = 199;

function add(a, b) {
    console.log(a + b);
}

add(4, 3);


//local scope and global scope
//if i declare a variable inside a function that is said to be local scope
//if i declare a variable outside a function that is said to be global scope
//local

function add(a, b) {
    c = (a + b);
    console.log(c);
}

add(14, 13);

//global
let g;
function add(d, f) {
    g = d + f;
    // return as

}
add(33, 39)
console.log(g);
