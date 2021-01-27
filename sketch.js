
var star1,starIm;
var fairy,fairyIm;
var sky,skyIm;

function preload(){ 
  
//preload the images here
starIm=loadImage("images/star.png");
fairyIm=loadImage("images/fairy1.png");
skyIm=loadImage("images/starnight.png"); }

function setup(){
  createCanvas(600,600);
  
  star1=createSprite(400,100,50,50);
  star1.scale=0.2;
  star1.addImage(starIm);

  fairy=createSprite(200,300,50,50);
  fairy.scale=0.2;
  fairy.addImage(fairyIm);


  sky=createSprite(600,600,60,80);
  sky.scale=1;
  sky.addImage(skyIm);  

  fairy.setCollider("circle",500,0,10);
  fairy.debug = false;    }

  function draw() {

background("black");

sky.depth=-7;

if(keyDown("space")){
star1.velocityY=5;    }

if(keyDown("right_arrow")){
fairy.velocityX=4; }

if(keyDown("left_arrow")){
fairy.velocityX=-4;   }
 
if(fairy.isTouching(star1)){

  star1.velocityY=0; 
  fairy.velocityX=0;  }

  drawSprites();   }
