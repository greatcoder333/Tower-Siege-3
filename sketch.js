const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot
var score = 0
var backgroundImg
function preload()
{
  backgroundImg = loadImage("images/loading.jpg");
getImage();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1 = new Ground(400,600,800,20)

  polygon = new Polygon(103,276,10,10)
  ground2 = new Ground(392,253,200,40)
  ground3 = new Ground(571,441,200,40)
  box1 = new Box(330,235,30,40)
  box2 = new Box(360,235,30,40)
  box3 = new Box(390,235,30,40)
  box4 = new Box(420,235,30,40)
  box5 = new Box(450,235,30,40)
  box6 = new Box(360,191,30,40)
  box7 = new Box(390,191,30,40)
  box8 = new Box(420,191,30,40)
  box9 = new Box(390,151,30,40)
  box10 = new Box(510,416,30,40)
  box11 = new Box(540,416,30,40)
  box12 = new Box(570,416,30,40)
  box13 = new Box(600,416,30,40)
  box14 = new Box(630,416,30,40)
  box15 = new Box(540,382,30,40)
  box16 = new Box(570,382,30,40)
  box17 = new Box(600,382,30,40)
  box18 = new Box(570,340,30,40)
  slingshot = new SlingShot(polygon.body, {x:16, y:267})
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  ground1.display();
  polygon.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  slingshot.display();
  fill("red")
  noStroke()
  text("X:"+mouseX+" Y:"+mouseY,mouseX,mouseY)
  text("Score: "+ score,40,40)
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon.body)
    }
}

async function getImage(){
  var respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var respondJSON = await respond.json()
  //console.log(respondJSON)
  var time = respondJSON.datetime
  //console.log(time)
  var hour = time.slice(11,13)
  console.log(hour)
  if (hour >= 05 && hour <= 06){
  bg = "images/sunrise.jpg"
  }
  else if (hour >= 7 && hour <= 11){
  bg = "images/suninthesky.jpg"
  }
  else if (hour >= 12 && hour <= 16){
  bg = "images/afternoon.jpg"
  }
  else if (hour >= 17 && hour <= 18){
  bg = "images/sunset.jpg"
  }
  else{
  bg = "images/bg2.jpg"
  }
  backgroundImg = loadImage(bg)
}