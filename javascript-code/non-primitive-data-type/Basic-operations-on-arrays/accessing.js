//1. Accessing Elements of an Array
let abc=["maruthi","naga","vamsi"];
console.log(abc[0]);
console.log(abc[1]);
console.log(abc[2]);
//2. Accessing the First Element of an Array
let number=[10,20,30];
let firstitem=number[0];
console.log("first item",firstitem);
//accessing the last element of an array
let numbers=[10,20,30];
let firstitems=number[number.length-1];
console.log("first item",firstitems);
//modifying the array elements
let courses = ["HTML", "CSS", "Javascript", "React"];
 console.log(courses);
 courses[1]= "Bootstraps";
console.log(courses);
// adding elements to the array
//array length
let num=[10,20,60,50];
num.push("node.js");
console.log(num);
console.log(num.length)
//removing elements form an array
//pop(),shift(),splice();
let strings=["html","css","javascript","React"]
console.log(strings);
console.log(strings.pop());
//removes and returns the last elements
console.log(strings.shift());
//remove the first elements; using shift();
console.log(strings.splice(1,2));
//array concatnation
let array1=[12,14,16];
let array2=[11,13,15];
let final=array1.concat(array2);
console.log("Array"+final);
//conversion of an array to string
let initial=["html","javasript","react"];
console.log(initial.toString());
console.log(typeof(initial));
//check type of arrays
