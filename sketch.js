const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    stand1 = new Ground(400,300,400,10);
    stand2 = new Ground(900,300,400,10);

    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);
    

    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);

    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);

    block16 = new Box(390,155,30,40);


    block17 = new Box(800,275,30,40);
    block18 = new Box(830,275,30,40);
    block19 = new Box(860,275,30,40);
    block20 = new Box(890,275,30,40);
    block21 = new Box(920,275,30,40);
    block22 = new Box(950,275,30,40);
    block23 = new Box(980,275,30,40);
    

    block24 = new Box(830,235,30,40);
    block25 = new Box(860,235,30,40);
    block26 = new Box(890,235,30,40);
    block27 = new Box(920,235,30,40);
    block28 = new Box(950,235,30,40);

    block29 = new Box(860,195,30,40);
    block30 = new Box(890,195,30,40);
    block31 = new Box(920,195,30,40);

    block32 = new Box(890,155,30,40);
    
    polygon = new Polygon(59,200,20);

    
    slingShot = new Slingshot(polygon.body,{x:150, y:200});
}

function draw(){
    background(56,44,44);
    Engine.update(engine);

    stand1.display();
    stand2.display();
    
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

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();

    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    polygon.display();
    slingShot.display();
}

function mouseReleased() {
    slingShot.fly();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
    console.log(mouseX, mouseY)
}