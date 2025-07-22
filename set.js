//set doesn't allows duplicate
let set = new Set;
set.add('codeio');
set.add('logicio')
set.add('undefined');
set.add('codeio');
console.log(set);

//to find size
console.log(set.size);
console.log(set.has('logicio'));
set.delete('undefined');
console.log(set);
set.clear();
console.log(set);



