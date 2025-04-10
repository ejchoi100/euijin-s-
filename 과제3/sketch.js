let clickCount = 0;

function setup() {
  // 캔버스 생성 (400x400 픽셀)
  createCanvas(400, 400);
}

function draw() {
  // 배경색 설정
  background(220);
  
  // 기본 캐릭터 그리기
  drawOriginalCharacter();
  
  // 클릭 상태에 따라 다른 효과 적용
  if (clickCount === 1) {
    // 첫 번째 클릭: 코가 방패처럼 커짐
    drawSimpleShieldNose();
  } else if (clickCount === 2) {
    // 두 번째 클릭: 눈에서 레이저 발사
    drawSimpleLaserEyes();
  } else if (clickCount === 3) {
    // 세 번째 클릭: 입에서 노란 빛이 터짐
    drawSimpleGlowingMouth();
  } else if (clickCount >= 4) {
    // 네 번째 클릭: 모든 히어로 능력 활성화
    drawSimpleFullPower();
  }
}

// 마우스가 클릭될 때마다 카운트 증가
function mousePressed() {
  clickCount++;
  if (clickCount > 4) {
    clickCount = 0; // 리셋
  }
}

// 원래 캐릭터 그리기 함수
function drawOriginalCharacter() {
  // 얼굴 (큰 사각형으로 변경)
  fill(255, 220, 180);  // 살색
  rectMode(CENTER);
  rect(200, 200, 300, 280, 50);  // 둥근 모서리 사각형으로 얼굴
  
  // 눈 (두 개의 작은 사각형)
  fill(255);  // 흰색
  rect(150, 160, 60, 40, 15);  // 왼쪽 눈
  rect(250, 160, 60, 40, 15);  // 오른쪽 눈
  
  // 눈동자 (더 작은 사각형)
  fill(0);  // 검정색
  rect(150, 160, 30, 30);  // 왼쪽 눈동자
  rect(250, 160, 30, 30);  // 오른쪽 눈동자
  
  // 반짝이는 눈 효과 (네모로 변경)
  fill(255);
  rect(160, 170, 10, 10);
  rect(240, 150, 10, 10);
  
  // 코 (큰 역삼각형)
  fill(255, 200, 160);
  triangle(200, 160, 150, 230, 250, 230);
  
  // 콧구멍 (두 개의 작은 타원)
  fill(50, 0, 0);
  ellipse(180, 215, 15, 10);  // 왼쪽 콧구멍
  ellipse(220, 215, 15, 10);  // 오른쪽 콧구멍
  
  // 입 (호)
  fill(255, 100, 100);
  arc(200, 250, 100, 60, 0, PI);  // 웃는 입
  
  // 눈썹 (선)
  strokeWeight(5);  // 선 굵기
  line(120, 130, 180, 110);  // 왼쪽 눈썹
  line(220, 140, 280, 110);  // 오른쪽 눈썹
  
  // 헤어스타일 (원으로 변경)
  fill(50, 30, 20);  // 갈색
  ellipse(200, 60, 200, 80);  // 윗부분 머리
  ellipse(80, 120, 30, 150);   // 왼쪽 머리
  ellipse(320, 120, 30, 150);  // 오른쪽 머리
  
  // 분홍색 턱수염 (세 가닥)
  stroke(255, 105, 180); // 분홍색
  strokeWeight(4);
  line(170, 280, 150, 320); // 왼쪽 수염
  line(200, 280, 200, 330); // 가운데 수염
  line(230, 280, 250, 320); // 오른쪽 수염
  
  // 어깨
  noStroke();
  fill(50, 30, 20);  // 갈색
  rect(200, 370, 400, 50);
}

// 간단한 방패 코 효과
function drawSimpleShieldNose() {
  // 얼굴보다 큰 코 (방패처럼)
  fill(255, 180, 140); // 좀 더 어두운 살색
  triangle(200, 120, 100, 300, 300, 300);
  
  // 콧구멍
  fill(50, 0, 0);
  ellipse(170, 250, 20, 15);
  ellipse(230, 250, 20, 15);
}

// 간단한 레이저 눈 효과
function drawSimpleLaserEyes() {
  // 빨간색 레이저
  stroke(255, 0, 0);
  strokeWeight(8);
  line(150, 160, 0, 0); // 왼쪽 눈에서 왼쪽 위로
  line(250, 160, 400, 0); // 오른쪽 눈에서 오른쪽 위로
  
  // 빛나는 눈동자
  fill(255, 255, 0); // 노란색
  rect(150, 160, 30, 30);
  rect(250, 160, 30, 30);
}

// 간단한 빛나는 입 효과
function drawSimpleGlowingMouth() {
  // 노란색 입
  fill(255, 255, 0);
  ellipse(200, 250, 120, 80);
  
  //  광선
  stroke(255, 255, 0);
  strokeWeight(5);
  line(200, 250, 200, 330); // 아래쪽
  line(200, 250, 150, 330); // 왼쪽 아래
  line(200, 250, 250, 330); // 오른쪽 아래
}

//  풀파워 효과
function drawSimpleFullPower() {
  // 방패 코 
  drawSimpleShieldNose();
  
  // 레이저 눈
  drawSimpleLaserEyes();
  
  // 빛나는 입 
  drawSimpleGlowingMouth();
  
  // 간단한 배경 효과
  noFill();
  stroke(255, 200, 0);
  strokeWeight(5);
  ellipse(200, 200, 350, 350);
}

// Save a 10-second gif when the user presses the 's' key.
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10);
  }
}