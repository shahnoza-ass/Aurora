const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

const paddleWidth = 10, paddleHeight = 100, ballSize = 10;
const player = { x: 0, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
const ai = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
const ball = { x: canvas.width / 2, y: canvas.height / 2, dx: 2, dy: 2 };

function update() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y <= 0 || ball.y + ballSize >= canvas.height) ball.dy *= -1;
    if (ball.x <= player.x + paddleWidth && ball.y > player.y && ball.y < player.y + paddleHeight) ball.dx *= -1;
    if (ball.x + ballSize >= ai.x && ball.y > ai.y && ball.y < ai.y + paddleHeight) ball.dx *= -1;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(player.x, player.y, paddleWidth, paddleHeight);
    ctx.fillRect(ai.x, ai.y, paddleWidth, paddleHeight);
    ctx.fillRect(ball.x, ball.y, ballSize, ballSize);
}

function game() {
    update();
    draw();
}
setInterval(game, 20);

