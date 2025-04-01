function setup() {
    createCanvas(500, 500);
    noLoop(); // 한 번만 그리기
  }
  
  function draw() {
    background(220);
  
    for (let i = 0; i < 20; i++) {
      let x = random(width);
      let y = random(height);
      let r = random(10, 50);
      let col = color(random(255), random(255), random(255));
  
      fill(col);
      noStroke();
      ellipse(x, y, r, r);
    }
  }