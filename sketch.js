
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5;
var roof;
var r1, r2, r3, r4, r5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 350, 500, 40);
	b1 = new Bog(400, 400, 40);
	r1 = new Rope(b1.body, {x:400, y:350});
	b2 = new Bog(480, 400, 40);
	r2 = new Rope(b2.body, {x:480, y:350});
	b3 = new Bog(560, 400, 40);
	r3 = new Rope(b3.body, {x:560, y:350});
	b4 = new Bog(320, 400, 40);
	r4 = new Rope(b4.body, {x:320, y:350});
	b5 = new Bog(240, 400, 40);
	r5 = new Rope(b5.body, {x:240, y:350});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  if(keyDown(UP_ARROW)){
         
	Matter.Body.applyForce(b3.body, b3.body.position,{x:20,y:0});


  }
  
  drawSprites();
  roof.display();
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

 
}



