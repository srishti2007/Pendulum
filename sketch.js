
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball;
var holder1, ball1;
var holder2, ball2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }



holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);
holder1 = Bodies.rectangle(320,100,200,20,holder_options);
World.add(world,holder1);
holder2 = Bodies.rectangle(60,100,200,20,holder_options);
World.add(world,holder2);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);
ball1  = Bodies.circle(260,200,40,ball_options);
World.add(world,ball1);
ball2  = Bodies.circle(180,200,40,ball_options);
World.add(world,ball2);

var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100,
}
var string = Constraint.create(options);
World.add(world,string);

var options1 = {
  bodyA : ball1,
  bodyB : holder1,
  stiffness: 0.004,
  length : 100,
}
var string1 = Constraint.create(options1);
World.add(world,string1);

var options2 = {
  bodyA : ball2,
  bodyB : holder2,
  stiffness: 0.004,
  length : 100,
}
var string2 = Constraint.create(options2);
World.add(world,string2);
}



function draw() {
  background("turquoise"); 
  Engine.update(engine);

  strokeWeight(0);
  fill("black");
  text("Press space to oscillate the pendulam to left and right with mouse",20,20);
  text("Press Enter to stop the Pendulum from oscillating",100,50);

  strokeWeight(0);
  fill ("brown");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);

strokeWeight(0);
fill ("brown");
rectMode(CENTER);
rect(holder1.position.x,holder1.position.y,200,20);

strokeWeight(0);
fill ("brown");
rectMode(CENTER);
rect(holder2.position.x,holder2.position.y,200,20);


strokeWeight(0);
fill("violet");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(0);
fill("violet");
ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,40);

strokeWeight(0);
fill("violet");
ellipseMode(RADIUS);
ellipse(ball1.position.x,ball1.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

strokeWeight(8);
stroke("white");
line(ball1.position.x,ball1.position.y,holder1.position.x,holder1.position.y);

strokeWeight(8);
stroke("white");
line(ball2.position.x,ball2.position.y,holder2.position.x,holder2.position.y)

if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
ball1.position.y = mouseY;
ball1.position.x = mouseX;
ball2.position.y = mouseY;
ball2.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;
ball1.position.x = 320;
ball2.position.x = 60;

}

}








