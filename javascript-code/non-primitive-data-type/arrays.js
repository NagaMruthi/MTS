//  Syntax :- const arrone = [ val1, val2 ,... ]
// 1. Creating an Array using Array Literal
const names=[];
// Creating an Empty Array
console.log(names);
const coures=['html','css','javascript','react'];
console.log(coures);
// 2. Creating an Array using Array Constructor (JavaScript new Keyword)
// Syntax :- let arrayName = new Array();
let array=new Array();
console.log(array);
//creating and initializing an array with values;
let coure=new Array("html","css","javascript","react");
console.log(coure);
//initializing array while declaring
let arr=new Array(3);
arr[0]=10;
arr[1]=20;
arr[2]=30;
console.log(arr);
//1.examples
const cars=[
    "saab",
    "volvo",
    "bmw"
];
console.log(cars);
//2. ( You can also create an array, and then provide the elements:)
const abc=[];
abc[0]="saab";
abc[1]="volvo";
abc[2]="bmw";
abc[3]=123;
console.log(abc);

