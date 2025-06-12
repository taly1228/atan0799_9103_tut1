let scaleFactor;
let breathingSpeed = 0.02; // Breathing rhythm speed
let baseAlpha = 200;       // Maximum opacity
let baseWeight = 3;        // Maximum stroke weight

function setup() {
  createCanvas(windowWidth, windowHeight);
  scaleFactor = min(width / 800, height / 600);
}

function draw() {
  background(247, 241, 225);
  translate(width / 2, height / 2);
  scale(scaleFactor);
  rotate(radians(-30));
  translate(-430, -470);

  // Calculate breathing modulation
  let breath = sin(frameCount * breathingSpeed);         // [-1, 1]
  let alpha = map(breath, -1, 1, 80, baseAlpha);          // Opacity modulation
  let weight = map(breath, -1, 1, 0.5, baseWeight);       // Stroke weight modulation

  drawModules(alpha, weight); // Render all modules with breathing effect
}

function drawModules(alpha, weight) {
// Thick 5
  push(); 
  translate(189, 343); 
  drawLinGroup(0, 0, 495, 2, 1, weight, alpha); 
  pop();

  push(); 
  translate(198, 360); 
  drawLinGroup(0, 0, 320, 2, 1, weight, alpha); 
  pop();

// Thick 6
  push(); 
  translate(445, 430); 
  drawLinGroup(0, 0, 60, 4, 1, weight, alpha); 
  pop();

  push(); 
  translate(440, 436); 
  drawLinGroup(0, 0, 70, 4, 1, weight, alpha); 
  pop();

// Thick 7
  push(); 
  translate(130, 550); 
  drawLinGroup(0, 0, 595, 2, 1, weight, alpha); 
  pop();

// Thick 8
  push(); 
  translate(432, 450); 
  drawLinGroup(0, 0, 85, 8, 1, weight, alpha); 
  pop();

  push(); 
  translate(135, 489); 
  drawLinGroup(0, 0, 100, 3, 1, weight, alpha); 
  pop();

// Thick 1
  push(); 
  translate(110, 383); 
  drawLinGroup(0, 0, 80, 4, 1, weight, alpha); 
  pop();

  push(); 
  translate(115, 392); 
  drawLinGroup(0, 0, 80, 3, 1, weight, alpha); 
  pop();

// Thick 2
  push(); 
  translate(515, 315); 
  drawLinGroup(0, 0, 170, 8, 1, weight, alpha); 
  pop();

  push(); 
  translate(517, 350); 
  drawLinGroup(0, 0, 170, 6, 1, weight, alpha); 
  pop();

// Thick 3
  push(); 
  translate(448, 316); 
  drawLinGroup(0, 0, 30, 8, 1, weight, alpha); 
  pop();

  push(); 
  translate(432, 347); 
  drawLinGroup(0, 0, 50, 8, 1, weight, alpha); 
  pop();

  push(); 
  translate(411, 380); 
  drawLinGroup(0, 0, 70, 5, 1, weight, alpha); 
  pop();

//Thick 4
  push(); 
  translate(190, 348); 
  drawLinGroup(0, 0, 190, 6, 1, weight, alpha); 
  pop();

  push(); 
  translate(196, 364); 
  drawLinGroup(0, 0, 179, 6, 1, weight, alpha); 
  pop();

  push(); 
  translate(240, 438); 
  drawLinGroup(0, 0, 20, 6, 1, weight, alpha); 
  pop();

  push(); 
  translate(246, 452); 
  drawLinGroup(0, 0, 10, 6, 1, weight, alpha); 
  pop();

//Thin 1
  push(); 
  translate(125, 448); 
  drawLinGroup(0, 0, 600, 22, 2.5, weight * 0.4, alpha); 
  pop();

  push(); 
  translate(125, 525); 
  drawLinGroup(0, 0, 600, 22, 2.5, weight * 0.4, alpha); 
  pop();

//Thin 2
  push(); 
  translate(137, 320); 
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, alpha); 
  pop();

  push(); 
  translate(176, 390); 
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, alpha); 
  pop();

  push(); 
  translate(212, 455); 
  drawTrapezoidLines(0, 18, 34, 52, 0, 20, 3, alpha); 
  pop();

//Trapezoid3
  push(); 
  translate(190, 356); 
  drawTrapezoidLines(0, 80, 23, 55, 0, 15, 2.5, alpha); 
  pop();

  push(); 
  translate(172, 320); 
  drawTrapezoidLines(0, 103, 14, 85, 0, 9, 3.2, alpha); 
  pop();

//Trapezoid2
  push(); 
  translate(110, 320); 
  drawTrapezoidLines(0, 165, 40, 115, 0, 19, 4, alpha); 
  pop();

  push(); 
  translate(456, 300); 
  drawTrapezoidLines(0, 56, -47, 66, 0, 25, 3.5, alpha); 
  pop();

  push(); 
  translate(105, 354); 
  drawTrapezoidLines(0, 145, 0, 120, 0, 12, 3.5, alpha); 
  pop();

//Trapezoid1
  push(); 
  translate(135, 440); 
  drawTrapezoidLines(0, 255, 0, 215, 0, 16, 4, alpha); 
  pop();

  push(); 
  translate(440, 440); 
  drawTrapezoidLines(0, 70, -40, 80, 0, 16, 4, alpha); 
  pop();

  push(); 
  translate(128, 550); 
  drawTrapezoidLines(0, 201, 0, 176, 0, 9, 4, alpha); 
  pop();

  push(); 
  translate(390, 522); 
  drawTrapezoidLines(0, 120, -36, 130, 0, 15, 4, alpha); 
  pop();
}

// Draw groups of parallel lines with breathing-modulated opacity and stroke weight
function drawLinGroup(x, y, len, count, spacing, weight, baseAlpha = 255) {
  strokeWeight(weight);
  for (let i = 0; i < count; i++) {
    let alpha = map(i, 0, count - 1, 0, baseAlpha);
    stroke(0, alpha);
    let yOffset = y + i * spacing;
    line(x, yOffset, x + len, yOffset);
  }
}

// Draw layered trapezoid-like line structures
function drawTrapezoidLines(x1, x2, x3, x4, y, h, spacing = 3, alpha = 255) {
  stroke(0, alpha);
  strokeWeight(1);
  for (let i = 0; i < h; i++) {
    let yi = y + i * spacing;
    let xi1 = lerp(x1, x3, i / h);
    let xi2 = lerp(x2, x4, i / h);
    line(xi1, yi, xi2, yi);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleFactor = min(width / 800, height / 600); // Recalculate scaling on resize
}