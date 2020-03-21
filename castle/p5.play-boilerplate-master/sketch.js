var box1,box2,box3,box4,box5;


function setup() {
  createCanvas(800,400);
  createSprite(310, 400, 400, 200);
  box1 =  createSprite(100,380,60,500);
  box2 = createSprite(500,380,60,500);
  box3 = createSprite(285,180,100,50);
  box4 = createSprite(290,250,200,100);
  box5 = createSprite(500,600,100,50);

}

function draw() {
  background(0);
  
  
  drawSprites();
}