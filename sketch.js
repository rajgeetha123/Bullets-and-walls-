var Bullet,wall,speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)

  thickness=random(22,83);

  Bullet=createSprite(50,200,50,50)
  Bullet.velocityX=speed;
  Bullet.shapeColor="white";
}

function draw() {
  background("black");  


  

  if(hasCollided(Bullet,wall))
  {
    Bullet.velocityX=0;

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }


  drawSprites();
}




function hasCollided(lbullet,lwall)
{
  BulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if(BulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}