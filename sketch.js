function preload(){
  monkeypic=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bg=loadImage("jungle.jpg")
  bananapic=loadImage("banana.png")
  stone=loadImage("stone.png")
}

function setup() {
  createCanvas(400, 400);
  forestbg=createSprite(200,200,400,400)
  forestbg.addImage(bg)
  monkey=createSprite(25,350,20,20)
  monkey.addAnimation("running",monkeypic)
  monkey.scale=0.12;
  forestbg.velocityX=-4;
  invisibleground=createSprite(0,390,400,10)
  invisibleground.visible=false;
  
}

function draw() {
  background(220);
  if(forestbg.x<0){
    forestbg.x=forestbg.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(invisibleground)
  
  spawnobstacles();
  drawSprites();
}
function spawnobstacles(){
  if(frameCount%60===0){
var obstacle=createSprite(600,350,20,20)
obstacle.velocityX=-7;
    obstacle.addImage(stone)
    obstacle.scale=0.1;
  }
}


