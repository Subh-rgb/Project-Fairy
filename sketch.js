const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Fairy , FairyImg ;
var StarBody , StarBodyImg;
var Star , StarImg;

function preload()
{
   StarBodyImg = loadImage("starnight.png");
   FairyImg = loadAnimation("fairy1.png","fairy2.png");
   StarImg = loadImage("star.png");
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  
  var Star_options = {
    isStatic: false 
  }

  StarBody = createSprite(400,375,800,750);
  StarBody.addImage(StarBodyImg);

  Fairy = createSprite(100,450,10,10);
  Fairy.addAnimation("Animation",FairyImg);
  Fairy.scale = 0.2

  Star = Bodies.rectangle(200,390,200,20,Star_options);
  World.add(world, Star);
  Star = createSprite(900,40,10,10);
  Star.addImage(StarImg);
  Star.scale = 0.2
}


function draw() {
  background("black");
  
  Fairy.velocityX = 0
  
  if(keyDown("LEFT_ARROW")) {
    Fairy.velocityX = -5;
}
  if(keyDown("RIGHT_ARROW")) {
  Fairy.velocityX = 5;
}
  if(keyDown("DOWN_ARROW")) {
    Star.velocityY = 5;
}


  drawSprites();
}
