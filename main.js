let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  /* Calling function */
  drawHand(ctx,Math.PI/6,radius*0.5,radius*0.07)
  drawTime(ctx, radius)
}

function drawTime(ctx, radius) {
  let now = new Date();
  console.log(now)
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath()
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0)
  ctx.rotate(pos)
  ctx.lineTo(0, -length)
  ctx.stroke()

}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (num = 1; num < 13; num++) {
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawFace(ctx, radius) {
  let grad;

  ctx.beginPath();

  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();

}



drawClock();














