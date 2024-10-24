//Passing an Object as argument for a function ;
var person={
    name:"maruthi",
    age:23
}
function abc(){
    return(person.name+"\t"+person.age);

}
var x=abc();
console.log(x)