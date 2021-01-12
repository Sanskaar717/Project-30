const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var ground,ground2;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;
var polygon,sling;


function setup(){
  createCanvas(1000,500);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(345,400,250,10);
  block1 = new Box(255,375,30,40);
  block2 = new Box(285,375,30,40);
  block3 = new Box(315,375,30,40);
  block4 = new Box(345,375,30,40);
  block5 = new Box(375,375,30,40);
  block6 = new Box(405,375,30,40);
  block7 = new Box(435,375,30,40);
  block8 = new Box1(285,335,30,40);
  block9 = new Box1(315,335,30,40);
  block10 = new Box1(345,335,30,40);
  block11 = new Box1(375,335,30,40);
  block12 = new Box1(405,335,30,40);
  block13 = new Box2(315,295,30,40);
  block14 = new Box2(345,295,30,40);
  block15 = new Box2(375,295,30,40);
  block16 = new Box3(345,255,30,40);
  ground2 = new Ground(760,250,190,10);
  block17 = new Box(700,225,30,40);
  block18 = new Box(730,225,30,40);
  block19 = new Box(760,225,30,40);
  block20 = new Box(790,225,30,40);
  block21 = new Box(820,225,30,40);
  block22 = new Box1(730,185,30,40);
  block23 = new Box1(760,185,30,40);
  block24 = new Box1(790,185,30,40);
  block25 = new Box2(760,145,30,40);
  polygon = new Polygon(100,250);
  sling = new Slingshot(polygon.body,{x:200,y:250})

}

function draw(){
  background("#382C2C");

  Engine.update(myEngine);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ground2.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(polygon.body);
  }
}