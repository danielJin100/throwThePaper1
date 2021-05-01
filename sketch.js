
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, trashcan;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,350,10);
	ground = new Ground(600,680,1200,100);
	trashcan = new Trashcan(485,625,80,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  trashcan.display();
  Engine.update(engine);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.setVelocity(paper.body,{x:4,y:-20});
	}
}


