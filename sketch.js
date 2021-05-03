const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //Matter.Bodies.polygon(200,275,PI/2)
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  

 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);



  brick1= new Block(610,190,30,40);
  brick2= new Block(630,190,30,40);
  brick3= new Block(660,190,30,40);
  brick4= new Block(690,190,30,40);
  brick5= new Block(720,190,30,40);
  brick6= new Block(750,190,30,40);
  brick7= new Block(780,190,30,40);
  holder1= new Stand(700,200,250,10)

   //level two 

  brick8= new Stand(630,136,30,40);
  brick9= new Stand(660,136,30,40);
  brick10= new Stand(690,136,30,40);
  brick11= new Stand(720,136,30,40);
  brick12= new Stand(750,136,30,40);

  //level three

  brick13= new Stand(660,97,30,40);
  brick14= new Stand(690,97,30,40);
  brick15= new Stand(720,97,30,40);
  
  //level four
 
   brick16= new Stand(690,58,30,40) 
    
  ball = Bodies.circle(50,200,20)
   World.add(world,ball)

   slingShot = new SlingShot(this.ball,{x:200,y:200})

}
function draw() {
  background(56,44,44); 

 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  holder1.display();
 
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  brick8.display();
  brick9.display();
  brick10.display();
  brick11.display();
  brick12.display();
 

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  brick13.display();
  brick14.display();
  brick15.display();
  fill("grey");
  block16.display();
  brick16.display();
  
   imageMode(CENTER)
   image(polygon_img, ball.position.x, ball.position.y,20,20);
  
  slingShot.display();
}
 function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})

 }

 function mouseReleased(){
   
  slingShot.fly()
 }

 function keyPressed(){
   if(keyCode === 32){
     slingShot.attach(this.ball)
   } 
 }