//Canvas
var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');

var n = 0, m = 0;

function timedTint() {
	ctx.fillStyle="rgba(200,200,200,0.01)";
	ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fill();
	ctx.beginPath();
	console.log(m);
	if(dragging || m++>160){
		return;
	}
    setTimeout("timedTint()",40);
}

function quickTint(){
	ctx.fillStyle="rgba(200,200,200,0.01)";
	ctx.globalCompositeOperation = 'source-over';
	ctx.beginPath();
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fill();
	ctx.beginPath();
	if(n++>200){
		return;
	}
    setTimeout("quickTint()",10);
}