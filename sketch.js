var wall,thickness;
var bullet,speed,weight;

function Setup() {
  createCanvas(1600,400);

  speed=random(223,312)
  weight=random(30,52)

  thickness=random(22,83)

  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed;
  bullet.shapeColor(225)

  wall=createSprite(1200,200,thickness,height/2)

  wall.shapeColor=color(230,230,230)
  //wall.shapeColor=color(80,80,80)
}

function draw(){
  background(0)
  //bullet.sprite.collide(wall.sprite,calulateDeformation)
  if(hascollide(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damege>10)
{
  wall.shapeColor=color(225,0,0)
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}


}
drawSprites()
}

function hasCollide(lbullet,lwall)
{
  bulletRightEdge=bullet.x +lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge)
  {
    return true
  }
  return false

}