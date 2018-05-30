"use strict";
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
    window.addEventListener('load', pl);
} else {
    window.attachEvent('onload', pl);
}
