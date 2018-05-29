"use strict";
var cload=function () {
    pl();
    paint();

}
var paint=function(){
    context = document.getElementById('paint').getContext("2d");
    var canvasDiv = document.getElementById('canvasDiv');
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);
    if(typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d");
    $('#canvas').mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });
    $('#canvas').mousemove(function(e){
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    });
    $('#canvas').mouseup(function(e){
        paint = false;
    });
    $('#canvas').mouseleave(function(e){
        paint = false;
    });
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;

    function addClick(x, y, dragging)
    {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }
    function redraw(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

        context.strokeStyle = "#df4b26";
        context.lineJoin = "round";
        context.lineWidth = 5;

        for(var i=0; i < clickX.length; i++) {
            context.beginPath();
            if(clickDrag[i] && i){
                context.moveTo(clickX[i-1], clickY[i-1]);
            }else{
                context.moveTo(clickX[i]-1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.stroke();
        }
    }
}
var pl=function () {
    var c = document.getElementById("bcanvas");
    var ctx = c.getContext("2d");
    var ctx2=c.getContext("2d");
    ctx2.fillStyle = 'red';
    ctx2.strokeStyle = 'black';
    ctx2.font = '28pt Comic Sans';
    ctx2.fillText('BIRD FROM LIV. LOGO', 3, 280);
    ctx2.strokeText('BIRD FROM LIV. LOGO', 3, 280);
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.arc(85, 124, 20, 1.5*Math.PI,  Math.PI/6);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(66, 118, 25, 1.3*Math.PI,  Math.PI,true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(108, 88, 25, 1.4*Math.PI,  Math.PI,true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(119, 32, 30, 2*Math.PI,  Math.PI/2.2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(298, 40, 150, Math.PI/1.12,  Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(297, 141, 150, Math.PI/1.15,  Math.PI/0.9);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(75, 200);
    ctx.lineTo(103, 133);
    ctx.moveTo(85, 104);
    ctx.lineTo(40, 118);
    ctx.moveTo(51, 98);
    ctx.lineTo(83, 88);
    ctx.moveTo(100, 65);
    ctx.lineTo(125, 61);
    ctx.stroke();
};
if (window.addEventListener) {
    window.addEventListener('load', cload);
} else {
    window.attachEvent('onload', cload);
}