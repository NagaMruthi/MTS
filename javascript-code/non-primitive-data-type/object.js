//1.with object literal
const person={
firstname:"maruthi",
lastname:"naga",
age:22  ,
78:"fair",  
};
console.log(person[78]);
// with new keyword
const Employee=new Object({
    name:"naga",
    age:22,
    role:"sde"
});
console.log(Employee.age);
//1Ex.
const obj={};
let person1={
    firstname:"maruthi",
    lastname:"naga"
};
console.log(person1.firstname+person1.lastname);
// 2.Ex.
// accessing properties
//using . notations
//object.propertyname
const person2= new Object({
name:"vamsi",
age:23,
role:"developer"
});
console.log(person2.name);
console.log(person2.role);
// array-like notations
const employees = new Object({
    name:"John Doe",
    age:45,
    role:"SDE"
    });
    console.log(employees.age);
    console.log(employees['name']);
