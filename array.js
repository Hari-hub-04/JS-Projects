  let vegies = [1,2,3,4,5,6,7,8,9,0,'one','two','three'];
  console.log(vegies);
  console.log(typeof(vegies));

  //array methods
  vegies[3]='beans';
  console.log(vegies[3]);
  //to delete at last we use pop
  vegies.pop();
  //to insert at last we use push
  vegies.push('potato');
console.log(vegies);
//to insert from 1st we use unshift
vegies.unshift('avacadro');
console.log(vegies);
//to delere from 1st we use shift
vegies.shift();
console.log(vegies);

//array using for loop
for(vege of vegies){
    console.log(vege);
}
//2D Array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
//console.log(matrix[2][2]);
//console.log(matrix[1][2]);

for (let i=0;i<matrix.length;i++){
    for (let j=0;j<matrix[i];j++){
        console.log(matrix[i][j]);
    }
}
