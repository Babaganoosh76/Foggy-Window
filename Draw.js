//Canvas
var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');

//Variables
var radius = 10;
var dragging = false;
var tool = 'erase';
var prevx, prevy;
console.log(prevx, prevy);

canvas.width = window.innerWidth*0.92;
canvas.height = window.innerHeight*0.92;

var drawCir = function(e){
	ctx.globalCompositeOperation = 'destination-out';
	ctx.lineWidth = radius*2
	ctx.fillStyle = "rgba(0,0,0,1)";

	if(dragging){
		console.log(prevx, e.offsetX, prevy, e.offsetY);
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, radius, 0, 2*Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(prevx, prevy);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();

		singleTint();
		save(e);
	}
}

var engage = function(e){
	dragging = true;
	save(e);
	drawCir(e);
}

var disengage = function(){
	dragging = false;
	ctx.beginPath();
	m = 0;
	timedTint();
}

var save = function(e){
	prevx = e.offsetX;
	prevy = e.offsetY;
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', drawCir);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mouseout', disengage);

