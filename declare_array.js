// 1. declare an array 

const array=[1,2,3,4,5];
console.log(array[3]);
array[1] = "jambura";
console.log(array);

// 2.add and remove elements 

const tour=["boga_lake","tindu","dim pahar"];
tour.push("thanchi");
tour.unshift("kaptai","cosx bazar ");
tour.pop();
tour.shift();
tour.splice(2,1);
console.log(tour);

// 3.checking array membership with "includes"

const books = ["bangla", "english", "math", "peradoxical_sajid"];
console.log(books.includes("math"));