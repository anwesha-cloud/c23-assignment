const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;

    box1=new Box(200,380,60,350)
    box2=new Box(135,360,45,370)
    box3=new Box(265,360,45,370)
    box4=new Box(75,350,38,390)
    box5=new Box(325,350,38,390)
    box6=new Box(20,300,20,400)
    box7=new Box(380,300,20,400)
}

function draw() {
  background("black"); 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  triangle(200,150,165,196,237,196)
  strokeWeight(5)
  stroke("red")
  triangle(320,86,360,150,285,150)
  triangle(80,86,42,150,115,150)
  strokeWeight(5)
  stroke("red")
  drawSprites();
}