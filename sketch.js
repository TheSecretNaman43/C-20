var Car, Wall;
var Speed, Weight;

function setup(){
    createCanvas(1600,400);

    Car = createSprite(200,200,50,50);
    Car.velocityX=5;

    Wall= createSprite(1200,200,60,100);
    
    Speed = random(25,31);
    Weight= random(400,1500);
}    

function draw(){
    background(black);

    if (Wall.x - Car.x < (Car.width+Wall.width)/2){
        Car.velocityX=0;
        var Deformation= 0.5*Weight*Speed*Speed/22509;    
        if (Deformation>180){
           Car.shapeColor = "yellow";
            Wall.shapeColor= "white";            
        } 
         if (Deformation<180 && Deformation>100){
             Car.shapeColor="green";
             Wall.shapeColor="white";
        }
         if (Deformation<100){
             Car.shapeColor="red";
             Wall.shapeColor="white";
         }    
    }
      drawSprites();
}