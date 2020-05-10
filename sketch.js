

  
  var engine, world;
  var bullet,wall;
  var speed,weight,thickness;

  function setup(){
      var canvas = createCanvas(1200,400);
    thickness = random(22,58)
    speed = random( 10,7)
    weight = random(30,52)
  wall = createSprite(1200,200,thickness,height/2)
    bullet = createSprite(1100,200,thickness,weight)
    bullet.velocityX = speed;
  }
  
  
  function draw(){
   background(0);
  if(hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  var damage=0.5 * weight * speed * speed /(thickness*thickness*thickness)
  if(damage>10){
wall.shapeColor = color(255,0,0)

  }
  if(damage<10){
wall.shapeColor = color(0,255,0)
  }
  }

  drawSprites();
  }
function hasCollided(Lbullet , Lwall){

  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge  = wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}