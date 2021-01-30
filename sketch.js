const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3;
var umbrella;
var thunder, thunderCreatedFrame = 0;

function preload(){
 // man_image = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png"
//  ,"walking_5.png","walking_6.png","walking_7.png","walking_8.png");
   man_image = loadImage("walking_1.png");
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
}

function setup(){
  var canvas = createCanvas(300,500);

  engine = Engine.create();
  world  = engine.world;

  
  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default : break;
   }
   console.log(thunderCreatedFrame);
  }
  
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  camera.position.x = mouseX;
  
  drawSprites();
}


