var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#004D00";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawGrid() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#D1D1E0";
    var x = 0;
    while (x < canvas.width) {
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        x += 20;
        ctx.moveTo(x, 0);
    }
    ctx.moveTo(0, 0);
    var y = 0;
    while (y < canvas.height) {
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
        y += 20;
        ctx.moveTo(0, y);
    }

}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function makePlayer(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(getRandomArbitrary(0, 100)*20, getRandomArbitrary(0, 100)*20, 20, 20);
}



