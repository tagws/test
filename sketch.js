var ground;
var groundImage;
var enemy1, enemy2, enemy3 , enemy5 , enemy6 ;
var playerImage;
var player1;
var surface1;
var surface2;
var arrowImage;
var arrow;
var zombierun ;
var zombie;
var wall;

var zombie111;

var zombie1;
var zombie2;
var zombie3;




var zombie222;
var zombie333;
var zombie444;

var score = 0;



var invisible1;






function preload(){
 groundImage = loadImage("crop (1).jpeg") ;
 playerImage = loadImage("7659c36de6f70eaf26a1854af11ac710-rocket-clipart-by-vexels.png");
  arrowImage = loadImage("Red_laser-ConvertImage_votu8o.png");
  
  zombierun = loadAnimation("ufo-3106867_960_720.png");
  
  
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
   ground = createSprite(200,180,400,10);
  ground.addImage("ground",groundImage);
 
  ground.y = ground.height/2;
  
  ground.velocityY = -5;
  
  
 player1 = createSprite(width/2,height-100,400,10);
  player1.scale = 0.2;
  player1.addImage("player",playerImage);
  
  
  
  surface1 = createSprite(200,460,1000,10);
   surface2 = createSprite(200,-60,1000,10);
  
 
  
  
  
  wall = createSprite(600,200,10,1000);
  wall.visible = false;
   arrow = createSprite(1000,200,200,200);
  arrow.scale = 0.3;
  arrow.addImage("arrow1",arrowImage);
  
  
  
  
  invisible1 = createSprite(0,200,500,1000);
  invisible1.visible = false;
  
  invisible2 = createSprite(420,200,300,1000);
  invisible2.visible = false;
  
  
  
  
  zombie111 = new Group();
  zombie222 = new Group();
  zombie333 = new Group();
  zombie444 = new Group();
  
}


 
function draw() {
 
 
  arrow.setCollider("circle",-90,0,30);
  
  
background("white");
  
 
  
  if(arrow.isTouching(zombie111)){
    
    zombie111.destroyEach();
    score = score+2;
   }
    
  
  
  if(arrow.isTouching(zombie222)){
    
    zombie222.destroyEach();
    score = score+2;
   }
  
  
  if(arrow.isTouching(zombie333)){
    
    zombie333.destroyEach();
    score = score+2;
   }
  
  if(arrow.isTouching(zombie444)){
    
    zombie444.destroyEach();
    score = score+2;
   }
    
  
  
  
  
  surface1.visible = false;
surface2.visible = false;
  player1.bounceOff(surface1);
  player1.bounceOff(surface2);

if (ground.y < 0){
ground.y = ground.height/2;
  }
  //////////////////////playermovements
  
    if(mouseIsOver(invisible1)||keyDown(LEFT_ARROW)){
      
      
      player1.x = player1.x-4;
      
      
      
      
      
    }
      
      
    if(mouseIsOver(invisible2)||keyDown(RIGHT_ARROW)){
      
      
      player1.x = player1.x+4;
      
      
      
    }
  
   /////////////////arrowshooting
  

//////////////////////
  
  
 
 
  
  
    
      
     
    
  
 if(touches.lenght>0||keyDown("space")){
  
   arrow.velocityY = -10;
   
   arrow.x = player1.x-30;
  arrow.y = player1.y-35;
   
   touches = [];
   
   
 }
  
  
 
    /////////////////////zombies
  zombies();
    zomb1();
  zomb2();
  zomb3();
  

  
 
 
  
  
  
  
 drawSprites();
  fill("red");
  text("Score  " +score ,500,50);
 
}


  function zombies(){
    
    if(frameCount % 200 === 0){
    
    zombie = createSprite(0,180,10,10);
  zombie.y = Math.round(random(30,350));
  zombie.scale = 0.3;
  zombie.addAnimation("run", zombierun);
  zombie.velocityX = 1;
   zombie.lifetime = 500;
      zombie111.add(zombie);
    }
    
    
  }

function zomb1(){
  
   if(frameCount % 200 === 0){
    
    zombie1 = createSprite(0,180,10,10);
  zombie1.y = Math.round(random(150,350));
  zombie1.scale = 0.3;
  zombie1.addAnimation("run", zombierun);
  zombie1.velocityX = 1;
   zombie1.lifetime = 500;
      zombie222.add(zombie1);
    }
  
}

function zomb2(){
  
   if(frameCount % 200 === 0){
    
    zombie2 = createSprite(0,180,10,10);
  zombie2.y = Math.round(random(60,350));
  zombie2.scale = 0.3;
  zombie2.addAnimation("run", zombierun);
  zombie2.velocityX = 1;
   zombie2.lifetime = 500;
      zombie333.add(zombie2);
    }
  
}



function zomb3(){
  
   if(frameCount % 200 === 0){
    
    zombie3 = createSprite(0,180,10,10);
  zombie3.y = Math.round(random(100,350));
  zombie3.scale = 0.3;
  zombie3.addAnimation("run", zombierun);
  zombie3.velocityX = 1;
   zombie3.lifetime = 500;
      zombie444.add(zombie3);
    }
  
}




  


  


