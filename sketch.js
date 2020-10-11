
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivialTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup(){ 
  createCanvas(600,200)
  
  monkey = createSprite(70,150,50,50)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;

  
  ground = createSprite(400,170,1300,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  
 
  
  bananaGroup = new Group();
  obstaceGroup = new Group();
  
  SurvivalTime = 0;
  
}

function draw(){
  background("yellow")
  
  text("SurvivalTime:"+ SurvivalTime,500,50)
  SurvivalTime = Math.ceil(frameCount/frameRate())
  
  
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  if(ground.x <0){
    ground.x = ground.width/2;
  }
  
  Spawnfood();
  
  Spawnobstace();
  
    monkey.collide(ground)
  
   if(keyDown("space")) {
        monkey.velocityY = -12;
}

  drawSprites()
}
function Spawnfood(){
  if(frameCount% 80 === 0 ){
  banana = createSprite(600,50,40,10)
    banana.y = Math.round(random(10,80))
   banana.addImage(bananaImage)
  banana.scale = 0.1;
  banana.velocityX  = -6;
  bananaGroup.add(banana);
    banana.lifetime = 300;
}
  
}

function Spawnobstace(){
  if(frameCount% 300 ===0){
   obstace = createSprite(500,150,50,50)
obstace.addImage(obstaceImage)
  obstace.scale = 0.1;
    obstace.velocityX = -6;
    obstaceGroup.add(obstace)
    obstace.lifetime = 300;
  }
}