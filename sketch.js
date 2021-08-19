var backgroundimage
var cartoon,cartoonimage
var snows = [];
function preload(){
  backgroundimage=loadImage("snow1.jpg")
  cartoonimage=loadImage("snow6.png")
}
function setup() {
  createCanvas(800,400);
  cartoon=createSprite(400, 200, 50, 50);
  cartoon.addImage(cartoonimage)
}

function draw() {
  background(backgroundimage);  
  
  if(keyDown("up")){
    cartoon.y=cartoon.y-2;
  }
  if(keyDown("down")){
    cartoon.y=cartoon.y+2;
  }
  if(keyDown("left")){
    cartoon.x=cartoon.x-2;
  }
  if(keyDown("right")){
    cartoon.x=cartoon.x+2;
  }
  
  drawSprites();
}
