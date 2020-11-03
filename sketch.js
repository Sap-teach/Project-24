
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,crumpledBall,ground,world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//for dustbin
	dustbin1=new DustBin(1490,600,15,90);
	dustbin3=new DustBin(1385,600,15,90);
	dustbin2=new DustBin(1437,648,120,15);
	
	//for ground
	ground=new Ground(800,680,1600,50);
	
		//for paper ball\
	crumpledBall=new paper(100,200,40)
	
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  ground.display();
  crumpledBall.display();
  fill("white");

  keyPressed();
  drawSprites();

 
}
function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(crumpledBall.body,crumpledBall.body.position,{x:25,y:-25});
	}
}



