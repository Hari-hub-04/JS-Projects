let user={
    names : "hari",
    age : 23,

};
console.log('age' in user);
console.log('names' in user);

//for loop
for (key in user){
    console.log(user[key]);
}
    