// grouping in two opearors;
console.log("grouping"+1+2);
//function call
function call(){
    console.group("myfunction");
}
call();
//postfix increment
let x=10;
x++;
console.log(x+"x");
//postfixe decrement
let y=20;
y--;
console.log(y+"y");
//post fix increment "right to left"
let z=12;
++z
console.log(z+"z");
//post decrement -i
let d=45;
-d;
console.log(d+"d");
//logical not!
var first=20;
var last=20;
console.log(!first===last);
//type of
var string="js"
console.log(typeof(string));
//exponentiation n
console.log(4**2);
//multiplactions left to right
console.log(4*2);
//division
console.log(18/9);
//reminder%
console.log(4%2);
//addition
console.log(2+456);
//substraction
console.log(4-5);
//less than< equal=
var a=10;
var b=11;
if(a<b){
    console.log("a less tahn b");
}
else{
    console.log("b less than a");
}
// greater than >,equal

if(a=>b){
    console.log("a greater tahn b");
}
else{
    console.log("b greater than a");
}
//equality ==,=== to check the data type also
if(20===20){
    console.log("equal")
}
else{
    console.log("not equal")
}
// unequal!==
if(30!==20){
    console.log("not equal")
}
else{
    console.log(" equal");
}