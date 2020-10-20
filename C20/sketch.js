var movingRect,fixedRect
var object1,object2,object3;

function setup()
{
  createCanvas(800,400);
  movingRect = createSprite(200,100,80,30)
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
 /* fixedRect = createSprite(400,300,50,50)
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  object1 = createSprite(100,300,50,50)
  object1.shapeColor = "green";
  object1.debug = true;*/

  object2 = createSprite(200,300,50,50)
  object2.shapeColor = "green";
  object2.debug = true;

  object3 = createSprite(500,300,50,50)
  object3.shapeColor = "green";
  object3.debug = true;

 // console.log(movingRect.width/2 + fixedRect.width/2)
  object3.velocityX=-4
  object2.velocityX=4
  
}
function draw(){
 background(0);
  
 

 //console.log(movingRect.x - fixedRect.x);

 
if(istouching (object3,object2)){

  object3.shapeColor = "blue";
  object2 . shapeColor = "blue";
}
else{
  object3.shapeColor = "green";
  object2 . shapeColor = "green";
}
//movingRect.y=mouseY
//movingRect.x=mouseX

 bounceOff(object3,object2)
 
 drawSprites();
}



