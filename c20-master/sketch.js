var r,g,b;

function setup()
{
  var canvas = createCanvas(1200,400);
}


function draw()
{
  r = map(mouseX,0,1200,0,250)
  g = map(mouseX,50,900,50,100)
  b = map(mouseX,0,1200,255,0)
  background(r,g,b);
  ellipseMode(RADIUS);
  ellipse(mouseX,mouseY,20,20);
}