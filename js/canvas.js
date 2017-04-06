var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var zhongX = window.innerWidth/2;
var zhongY = window.innerHeight/2;
function randomNum(min,max){
	var random = Math.random()*(max - min) +min;
	random = Math.round(random);
    return random;
}
//取随机数函数
function randomColor() {
    return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
}
//取随机颜色
function Ball() {
    this.r = randomNum(0.1, 3);
    this.color = "white";

    this.x = randomNum(this.r, myCanvas.width - this.r);
    this.y = randomNum(this.r, myCanvas.height - this.r);

    this.speedX = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
    this.speedY = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
}
//规定小球所在的位置和小球运动的速度
Ball.prototype.move = function () {
    this.x += this.speedX*0.2;
    this.y += this.speedY*0.2;

    if(this.x<=this.r)
    {
        this.x = this.r;
        this.speedX *= -1;
    }
    if(this.x>=myCanvas.width -this.r)
    {
        this.x = myCanvas.width - this.r
        this.speedX *= -1;
    }
    //小球碰到上边界的处理 反弹
    if (this.y <= this.r) {
        this.y = this.r;
        //反弹
        this.speedY *= -1;
    }
    //小球碰到下边界的处理 反弹
    if (this.y >= myCanvas.height - this.r) {
        this.y = myCanvas.height - this.r;
        //反弹
        this.speedY *= -1;
    }
}
//小球移动函数
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}
//绘制小球的函数
var balls = [];
var arr = [];
for (var i = 0; i < 0.0001 * myCanvas.width * myCanvas.height; i++) {
    var ball = new Ball();
    balls.push(ball);
}
//控制生成小球的数量
setInterval(function () {
    arr = [];
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    for (var i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].draw();
        //绘制小球
        if (ballAndMouse(balls[i]) < 130) {
            ctx.lineWidth = (130 - ballAndMouse(balls[i])) * 1.5 / 130;
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(zhongX, zhongY);
            ctx.strokeStyle = balls[i].color;
            ctx.stroke();
        }
    }
	//当鼠标位置与小球位置的距离<130时，在鼠标位置和小球位置之间建立一条连线，当两者距离越近，线条越粗

    for (var i = 0; i < balls.length; i++) {
        for (var j = 0; j < balls.length; j++) {
            if (ballAndBall(balls[i], balls[j]) < 80) {
                ctx.lineWidth = (80 - ballAndBall(balls[i], balls[j])) * 0.6 / 80;
//                      ctx.globalAlpha = (130 - ballAndBall(balls[i], balls[j])) * 1 / 80;		
                //设置连线的透明度
                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.strokeStyle = balls[i].color;
                ctx.stroke();
            }
        }
    }
    //当小球间位置距离<80时，小球间建立一条连线，距离越近，线条越粗
    ctx.globalAlpha = 1.0;
	
}, 30);

myCanvas.onmousemove = function (event) {
    event = event || window.event;
    zhongX = event.offsetX;
    zhongY = event.offsetY;
}

function ballAndMouse(obj) {
    var disX = Math.abs(zhongX - obj.x);
    var disY = Math.abs(zhongY - obj.y);
    return Math.sqrt(disX * disX + disY * disY);
}
//计算鼠标位置与小球位置的距离
function ballAndBall(obj1, obj2) {
    var disX = Math.abs(obj1.x - obj2.x);
    var disY = Math.abs(obj1.y - obj2.y);
    return Math.sqrt(disX * disX + disY * disY);
}
//计算小球之间位置的距离