var rato;
var ratoImg;
var ratosGroup;
var back;
var cozinheiro;
var cozinheiroImg;
var tomate;
var tomateImg;
var cozinheiro2; 
var cozinheiro2Img;
var ratoSujo;
var coracao1, coracao2, coracao3;
var coracao1Img, coracao2Img, coracao3Img;
var vida = 3;
var sprite;

function preload(){
  
ratoImg = loadImage("assets/rato.png");
back = loadImage("assets/back.png");
cozinheiroImg = loadImage("assets/cozinheiro.png");
tomateImg = loadImage("assets/tomate.png");
cozinheiro2Img = loadAnimation("assets/cozinheiro2.png","assets/cozinheiro3.png", "assets/cozinheiro4.png", "assets/cozinheiro5.png");
ratoSujo = loadImage("assets/ratoSujo.png");
coracao1Img =  loadImage("assets/vida1.png");
coracao2Img =  loadImage("assets/vida2.png");
coracao3Img =  loadImage("assets/vida3.png");
}

function setup() {

  
  createCanvas(600,400);

  cozinheiro = createSprite(150,300);
  cozinheiro.addImage(cozinheiroImg);

  //cozinheiro2 =  createSprite(150,300);
  cozinheiro.addAnimation("cook", cozinheiro2Img);
  //cozinheiro2.visible = false;
  //cozinheiro2.scale = 3.5;

  cozinheiro.scale = 3.5;

  //tomate = createSprite(200,300);
  //tomate.addImage(tomateImg);
  //tomate.scale = 3.5;

  coracao1 = createSprite(40,40);
  coracao1.addImage(coracao1Img);
  coracao1.scale = 3;
  coracao1.visible = false;

  coracao2 = createSprite(67,48);
  coracao2.addImage(coracao2Img);
  coracao2.scale = 3;
  coracao2.visible = false;

  coracao3 = createSprite(76,45);
  coracao3.addImage(coracao3Img);
  coracao3.scale = 3;
  coracao3.visible = true;

  ratosGroup = new Group();
}

function draw() {
  background(back); 

if(keyDown(RIGHT)){

cozinheiro.x += 2;
}

if(keyDown(LEFT)){

cozinheiro.x -= 2;
}

if(keyDown(UP_ARROW)){

  cozinheiro.y -= 2;
  }

  if(keyDown(DOWN_ARROW)){

    cozinheiro.y += 2;
    }

criarRatos();

if(ratosGroup.isTouching(cozinheiro)){

cozinheiro.changeAnimation("cook");
ratosGroup.setVelocityXEach(0);
}

drawSprites();
}

function criarRatos(){

  if(frameCount % 100 === 0){

  rato = createSprite(550, Math.round(random(370,490)), 10, 10);
  rato.addImage(ratoImg);
  rato.changeImage(ratoSujo);
  rato.scale = 2.5;
  rato.velocityX = -1;
  ratosGroup.add(rato);
}
}