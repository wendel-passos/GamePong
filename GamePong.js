// Variaveis da Bola
let ballX;
let ballY;
let ballVX;
let ballVY;
let ballDyameter;
let minSpeed = 5;
let maxSpeed = 10;

// Variaveis comuns das duas raquetes
let pw;
let ph;
let vSpeed;

// Variaveis da Raquete Esquerda
let plX;
let plY;
let plSpeed;

// Variaveis da Raquete Direita
let prX;
let prY;
let prSpeed;

function setup()
{
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);

  // Valores comuns das raquetes
  pw = width * 0.02;
  ph = height* 0.2;
  vSpeed = 10;
  ballReset();
  raqueReset();

  ballX = width / 2 + (random(5, 10) * random(0, 1) > 0.5 ? 1 : -1);
  ballY = height / 2 + (random(5, 10) * random(0, 1) > 0.5 ? 1 : -1);
  ballDyameter = width * 0.04;
  ballVX = random(minSpeed, maxSpeed) * random(0, 1) > 0.5 ? 1 : -1;
  ballVY = random(minSpeed, maxSpeed) * random(0, 1) > 0.5 ? 1 : -1;

  // Valores da raquete esquerda
  plX = width * 0.05;
  plY = height / 2 + ph/4;
  plSpeed = 0;

  // Valores da raquete direita
  prX = width - pw - width * 0.05;
  prY = height / 2 + ph/4;
  prSpeed = 0;
}

  function draw()
{
  background(0);
  
  // Rede
  for(c=0; c<100; c++){
     fill (100,255,0)
     rect (width/2,c*30,5,10);
  }

  //raquete esquerda
  fill (40,50,200);
  rect(plX, plY, pw, ph);
  let oldLY = plY;
  plY += plSpeed;
  if (plY - ph / 2 <= 0 || plY + ph / 2 >= height)
  {
    plY = oldLY;
  }
  //raquete direita
  fill (255,255,0);
  rect(prX, prY, pw, ph);
  let oldRY = prY;
  prY += prSpeed;
  if (prY - ph / 2 <= 0 || prY + ph / 2 >= height)
    {
      prY = oldRY;
    }
// Codigo para controle da Bola
  fill(255,255,255)
  ellipse(ballX, ballY, ballDyameter, ballDyameter)
  ballX = ballX + ballVX;
  ballY = ballY + ballVY;

// Colisao com as raquetes aqui
  if (ballX - ballDyameter / 2 <= plX + pw / 2 && ballX - ballDyameter / 2 >= plX - pw / 1.5 && ballY - plY >= -ph / 2 && ballY - plY <= ph / 2){
      ballVX *= -1;
  }
  else if (ballX + ballDyameter / 2 >= prX - pw / 2 && ballX - ballDyameter / 2 >= prX - ph / 2 && ballY - prY >= -ph / 2 && ballY - prY <= ph / 2)
  {
  ballVX *=-1;
  }
    
// Colisao com as laterais
  
  if (ballX + ballDyameter / 2 >= width)
    {
    ballReset()
    raqueReset()
    }

  if (ballX - ballDyameter / 2 <= 0)
    {
    ballReset()
    raqueReset()
    }

  if (ballY + ballDyameter / 2 >= height)
    {
    ballVY = random(minSpeed, maxSpeed)
    ballVY *= -1; // ballVX = ballVX * (-1);
    }

  if (ballY - ballDyameter / 2 <= 0)
    {
    ballVY = random(minSpeed, maxSpeed);
      ballVY*=1;
    }
}

function keyPressed(){
  if (key == 'w'){
    plSpeed = -1 * vSpeed;
  }

  if (key == 's'){
    plSpeed = vSpeed;
  }

  if (key == 'o'){
    prSpeed = -1 * vSpeed;
  }
  if (key == 'l') {
  prSpeed = vSpeed;
  }
}

function keyReleased(){
  if (key == 'w' || key == 's'){
    plSpeed = 0;
  }

  if (key == 'o' || key == 'l'){
    prSpeed = 0;
  }
}
function ballReset (){
  
  ballX = width / 2;
  ballY = height / 2;
  ballVX = random(minSpeed, maxSpeed) * random(0, 1) > 0.5 ? 1 : -1;
  ballVY = random(minSpeed, maxSpeed) * random(0, 1) > 0.5 ? 1 : -1;
}
function raqueReset(){
  plX = width * 0.05;
  plY = height / 2 + ph/4;
  plSpeed = 0;
  //raquetedireita
  prX = width - pw - width * 0.05;
  prY = height / 2 + ph/4;
  prSpeed = 0;
    
}