const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella, thunder, thunderImg, thGrp, rainsound, thSound;
var drops = [];
function preload(){
    thunderImg = loadAnimation("tb1.png", "tb2.png", "tb3.png", "tb4.png");
    rainsound = loadSound("rain-01.mp3");
    thSound = loadSound("thunder.mp3");
}

function setup(){
  createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;
    
  umbrella = new Umbrella(200,500)
//creating drops 
if(frameCount% 150 === 0){
  for(var i = 0; i<100; i++){
    drops.push(new Drop(random(0,400),random(0,400)))
  }
}
 
 thGrp = createGroup();
}

function draw(){
  background(0)
  rainsound.play();
  Engine.update(engine);

  umbrella.display();

  for(var i = 0; i<100; i++){
    drops[i].display()
    drops[i].updateY()
  }
  
 console.log(frameCount)

  makeThunder();
drawSprites();
  
}

function makeThunder(){
  if(frameCount % 200 === 0){
    thunder = createSprite(200, 100, 30, 30)
    thunder.addAnimation("light",thunderImg);
    thunder.scale = 0.5;
    thSound.play();
    thGrp.add(thunder);
  }else{
    thGrp.destroyEach();
  }
  
}


