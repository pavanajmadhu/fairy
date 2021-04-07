var starImg,bgImg;
var star, starBody;
var fairy,fairyimg

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyimg=loadAnimation("fairyimage1.png","fairyimage2.png")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
fairy=createSprite(500,500);
fairy.addAnimation("fairy",fairyimg);
fairy.scale=0.2;

	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, starBody);

//fairy=createSprite(500,500);
//fairy.addImage(fairimg);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 // console.log(star.y);
  keyPressed();

  //write code to stop star in the hand of fairy
 if(star.y>470&&starBody.position.y>470){
	 matter.body.setStatic(starBody,true);
 }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
    if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-5;
	}
	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+5;
	}
	//writw code to move fairy left and right
	
}
