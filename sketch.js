var amongimage, sus
var pasillo, pasus
var cusillo, cuchi
var cuchillosgrupo
var score = 0

function preload(){
amongimage = loadImage ("amongusimposta.gif");
pasillo = loadImage ("pasillo.png");
cusillo = loadImage ("cusillo.png");
}

function setup() {
 createCanvas(600,600);
 pasus = createSprite (200,200);
 pasus.addImage ("pasus", pasillo);
 pasus.velocityX = 0;
 pasus.scale = 3

 score = 0

 sus = createSprite (280,220);
 sus.addImage ("sus", amongimage);
 sus.scale = 0.1;
 sus.velocityX = 0.02;

 cuchillosgrupo = new Group ();
}

function draw() {
 background (600);
 score = score + Math.round(frameCount/10);

 if (keyDown ("up_arrow")) {
    sus.y = sus.y -6

  } 
  
  if (keyDown ("down_arrow")) {
    sus.y = sus.y +6

  } 

  if (cuchillosgrupo.isTouching(sus)){


  }

 drawSprites();
 SpwanObstacles();
 text("Puntuación: "+ score, width - 200,50);
}

function SpwanObstacles (){
if (frameCount % 80 === 0){
 cuchi = createSprite (width/2,0,10,40);
 cuchi.addImage ("cuchi", cusillo);
 cuchi.velocityY = 5;
 cuchi.scale = 0.06;
 cuchi.x = Mathround(random(70, withd - 70));
 cuchi.lifetime = 70;
 cuchillosgrupo.add (cuchi);
}

}