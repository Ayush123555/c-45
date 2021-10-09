const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, player, bg_img, player_img
var ball1;
function preload(){
   bg_img=loadImage("images/31.jpg")
   //player_img=loadImage("images/images-removebg-preview(1).png")
   }
function setup() {
  createCanvas(1500,1000);
  engine = Engine.create();
  world = engine.world;

   ball1 = new Ball(600,590,10,10)
  //player= createSprite(600,600,20,20);
  //player.addImage(player_img)
}

function draw() {
  background(bg_img);
  stroke("white")
  strokeWeight(5)
  textSize(50)
  text("NBA Basketball Championship",425,50)  

  textSize(35)
  stroke("blue")
  strokeWeight(3)
  text("Score: ",75,200)

  drawSprites();
}