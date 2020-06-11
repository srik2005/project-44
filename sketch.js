
var rectA,rectB,rectC,rectD;


function setup() {
  createCanvas(1200,800);
 rectA = createSprite(200, 200, 50, 80);
 rectC = createSprite(600,200,80,30);
rectB = createSprite(400,200,80,30);
rectD = createSprite(600,400,80,30);
rectC.velocityY= +5
rectD.velocityY=-5
}

function draw() {

  
  background(0,10,125); 
  rectB.x = World.mouseX;
  rectB.y = World.mouseY;
  console.log(rectA.height/2+rectB.height/2);


if (collide(rectB,rectA)) {
  rectA.shapeColor = "red";
  rectB.shapeColor = "red";
}

else{


  rectA.shapeColor= "green";
  rectB.shapeColor= "green";



}
bounceoff(rectC,rectD);



 //collide();
  drawSprites();
}
