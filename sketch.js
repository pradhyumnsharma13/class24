const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,300,100,100);
    box2 = new Box(1100,300,100,100);
    ground = new Ground(750,height,1500,50)
    bird = new Bird(300,400,50,50)
    pig1 = new Pig (950,400)
    box3 = new Box (750,200,100,100)
    box4 = new Box (1100,100,100,100)
    log1= new log(920,50,500,PI/2)
    log2 = new log (920,200,500,PI/2)
    log3 = new log (800,50,200,PI/7)
    log4 = new log (1000,5,200,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig1.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}