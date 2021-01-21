class arcs {
    constructor() {
        objects.push(this);
    }
    drawArcs() {
        var size = 250;
        var x = window.innerWidth / 2;
        var y = window.innerHeight / 2;
        render.beginPath();
        render.moveTo(x - size, y);
        render.bezierCurveTo(x - 150, y - 220, x + 150, y - 220, x + size, y);
        render.moveTo(x - size, y);
        render.bezierCurveTo(x - 150, y + 220, x + 150, y + 220, x + size, y);
        render.stroke();
        //console.log("draw arcs")
    }
}
