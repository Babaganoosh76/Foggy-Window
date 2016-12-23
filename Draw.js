//Canvas
var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');

//Variables
var radius = 5;
var dragging = false;
var tool = 'erase';

canvas.width = window.innerWidth*0.92;
canvas.height = window.innerHeight*0.92;

var drawCir = function(e){
	if(tool=='erase'){
		ctx.globalCompositeOperation = 'destination-out';
		radius = 10;
	}else{
		ctx.globalCompositeOperation = 'source-over';
		radius = 5;
	}

	if(dragging){
		ctx.lineWidth = radius*2
		ctx.fillStyle="rgba(0,0,0,1)";
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, radius, 0, 2*Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);
	}
}

var engage = function(e){
	dragging = true;
	drawCir(e);
}

var disengage = function(){
	dragging = false;
	ctx.beginPath();
	m = 0;
	timedTint();
}

usetool = function(t) {
	tool = t;
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', drawCir);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mouseout', disengage);

