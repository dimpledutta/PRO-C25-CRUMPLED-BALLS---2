



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



	
function setup() {
	var  paperSprite, dustbinSprite
    
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	//Create a Ground
	groundSprite = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundSprite);


	Engine.run(engine);
    dustbin1 = new Dustbin(300,600,10,100);
	dustbin2 = new Dustbin(480,600,10,100);
	dustbin3 = new Dustbin(390,655,175,15);
	paper1 = new Paper(100,400,20)
	
  
}


function draw() {
  rectMode(CENTER);
  background(160);
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}


