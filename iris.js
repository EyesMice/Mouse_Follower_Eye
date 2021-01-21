class iris {
    constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        objects.push(this);
    }
    drawIris() {
        var size = 100;
        this.x = mouseX; //window.innerWidth / 2;
        this.y = mouseY; //window.innerHeight / 2;    

        console.log("IrisX = " + this.x);
//        console.log("IrisY = " + this.y);
        console.log(window.innerWidth / 2);
        //console.log(window.innerHeight / 2 + 165);
        //        if (this.y < 163){
        //            this.y = 163;
        //        }
        //         if (this.y > 493){
        //            this.y = 493;
        //        }
        //        if(this.x < 172){
        //            this.x = 172;
        //        }
        //        if(this.x > 671){
        //            this.x = 671;
        //        }

        if (this.y - size < (window.innerHeight / 2) - 163) {
            this.y = window.innerHeight / 2 - 163 + size;
        }
        if (this.y + size > (window.innerHeight / 2) + 163) {
            this.y = window.innerHeight / 2 + 163 - size;
        }
        if (this.x - size < (window.innerWidth / 2) - 250) {
            this.x = window.innerWidth / 2 - 250 + size;
        }
        if (this.x + size > (window.innerWidth / 2) + 250) {
            this.x = window.innerWidth / 2 + 250 - size;
        }
        render.beginPath();
        render.arc(this.x, this.y, size, 0, 2 * Math.PI);
        render.drawImage(iris_img, this.x - size, this.y - size, iris_img.width * 2, iris_img.height * 2);
        //render.stroke();
    }
}
