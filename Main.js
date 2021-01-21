var canvas = document.getElementById("myCanvas");
var render = canvas.getContext('2d');
const eye_img = document.getElementById("Eye");
const iris_img = document.getElementById("Iris");
var height;
var width;
var mouseX;
var mouseY;

canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function () {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    drawElements();
}

var objects = [];

window.onresize();
var Iris = new iris();
var Arcs = new arcs();

drawElements();

document.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log("mouseX = " + mouseX);
    console.log("mouseY = " + mouseY);
    //drawIris();
    drawElements();
    collision();
}

function drawElements() {
    render.clearRect(0, 0, window.innerWidth, window.innerHeight, 2)
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].drawIris) objects[i].drawIris();
    }
    drawEye();
//    for (var i = 0; i < objects.length; i++) {
//        if (objects[i].drawArcs) objects[i].drawArcs();
//    }
}

function drawEye() {
    var size = 250;
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    render.beginPath();
    render.arc(x, y, size, 0, 2 * Math.PI);
    render.drawImage(eye_img, x - size, y - size, eye_img.width * 2, eye_img.height * 2);
    //render.stroke();
}

function collision() {

}
