
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 50;

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,50,250,20);
	bob1 = new Bob(100,250,bobDiameter/2);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);

	bob2 = new Bob(150,250,bobDiameter/2);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter,0);

	bob3 = new Bob(200,250,bobDiameter/2);
	rope3 = new Rope(bob3.body,roof.body,0,0);

	bob4 = new Bob(250,250,bobDiameter/2);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter,0);

	bob5 = new Bob(300,250,bobDiameter/2);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
}

function draw() {
  background(200);
  Engine.update(engine);

  roof.display();

  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,{x:bob1.body.position.x, y:bob1.body.position.y},{x:-50,y:0});
	}
}


