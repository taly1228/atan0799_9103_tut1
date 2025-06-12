let img;

function preload() {
  img = loadImage("images/WechatIMG439.jpg");
}

function setup() {
  createCanvas(800, 600);
  img.resize(800, 0); 
}


function draw() {
  background(247,241,225);
  let x = (width - img.width) / 2;
  let y = (height - img.height) / 2;
  image(img, x, y);

  fill(0);
  ellipse(mouseX, mouseY, 10, 10);  // Track mouse position

  text(`x=${mouseX}, y=${mouseY}`, 10, 20);
}

 