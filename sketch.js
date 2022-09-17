var Sprinting
var Score
var player_sprinting
var Island
var player

function preload(){

}

function setup(){
createCanvas(1400, 600)


player=createSprite(200,350,100,150);

}
function draw(){
  background("white")
  CreateIslands()
  drawSprites();
}

function CreateIslands (){
  Island=createSprite(1400,471,150,80)
  Island.velocityX = -5
}