var array = [10, 2, 5, 1, 9];

//console.log(array);

// Sorting an array of numbers
array.sort(function(a,b){
    return a - b
})

//console.log(array);


//Advanced Sorting

var students = [
  { id: 5, name: "alex",     age: 45 },
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function customComparator(){
  students.sort((a, b) => {
    if (a.name == b.name && a.age < b.age){
      return true;
    }
    return a.name > b.name
  });


}

customComparator();
console.log(students);
