const canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 320;


class Ball {
  constructor(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    //Prevent Ball from goind out
    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();

    this.x += this.dx;
    this.y += this.dy;
  }
}

let ball;

// function for initializing
function init() {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let dx = 1.5;
  let dy = 1.5;
  let radius = 15;
  let color = "#03a9f4";
  ball = new Ball(x, y, dx, dy, radius, color);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.update();
}

init();
animate();

