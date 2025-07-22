let map = new Map;
console.log(map);
//while setting (1st one is key,2nd one is value)
map.set('name','hari');
map.set('age',20);
map.set('gender','male');
console.log(map);

console.log(map.get('age'));
console.log(map);
map.delete('gender');
console.log(map);
console.log(map.size);
map.clear();
console.log(map);
