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
// console.log(books.includes("math"));
if(books.includes("math")){
    console.log("this is a array eliment :");
}
else{
    console.log("this is not a array eliment :");
}

// 4. checking if it's an array

var mango = 50;
const lemon =["deshi","export"];
let benanna = 7.23;
// console.log(Array.isArray(benanna));

if(Array.isArray(lemon)){
    console.log("This is array :");
}
else{
    console.log("This is not array :");
}

// 5.combining arrays 


let boy = ["rakib","shihab"];
let girl = ["sadia","sumaiya"];

let students = boy.concat("voshrike",girl);
console.log(students);