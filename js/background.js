var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const GRID_HEIGHT = 100;
const GRID_WIDTH = 100;
const MAX_STATES = 8;
const FPS = 6;
const CHARS = "!\"\'\`@#$%^&*()_-=+?:,.~abcdeghnopqrsuvxyÿþýüûúùø÷ç";

class Dot {
    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getState() {
        return this.state;
    }

    advanceState() {
        this.state += 1;
        return this.state;
    }
}

var dots = [];

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function newDot() {
    var x = randomIntFromInterval(0, GRID_WIDTH);
    var y = randomIntFromInterval(0, GRID_HEIGHT);

    var dot = new Dot(x, y, 0);
    dots.push(dot);
    return dot;

}

function settleStates() {
    for(i=0; i<dots.length; i++) {
        dots[i].advanceState();
        if(dots[i].state >= MAX_STATES) {
            dots.splice(i, i);
        }
        
    }
}


function draw() {
    
    // must be redefined in case user resizes
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    textSize = canvas.width / GRID_WIDTH;     // px
    ctx.font = textSize + "px Courier New";

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


    for(let i=0; i<dots.length; i++) {
        // get a random color, then get a decaying opacity
        let r = randomIntFromInterval(0, 255);
        let g = randomIntFromInterval(0, 255);
        let b = randomIntFromInterval(0, 255);
        let a = 1 - dots[i].getState() / MAX_STATES;

        let str = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        let char = CHARS[randomIntFromInterval(0, CHARS.length-1)];
        ctx.fillStyle = str;
        ctx.fillText(char, dots[i].getX() * textSize, dots[i].getY() * textSize);
    }
}

function tick() {
    setTimeout(() => {
        requestAnimationFrame(tick);
    }, 1000 / FPS);
    
    newDot();
    settleStates();
    draw();
}

tick();