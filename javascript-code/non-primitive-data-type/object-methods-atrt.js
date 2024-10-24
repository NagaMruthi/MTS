const car=new Object({
    name:"suziki",
    color:"black",
    speed:200
});
car.start=function(){
    console.log("first method of car");
    console.log(car);
}
car.start();
