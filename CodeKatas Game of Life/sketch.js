var size = 10;
let sizes = 30;
var offsetY = 3;

var w;
var grid;
var newGrid;
var keyP;
var randP;

var check;

function setup() {
    createCanvas(600, 400 + offsetY);
    w = floor(width/size);
    grid = create2DArray(2);

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            grid[i][j] = 0;
        }
    }

    keyP = false;
    randP = false;
    buttonP = false;
    check = false;

    
}

function draw() {
  
      if (randP && !keyP) {
        fillGrid();
        write("You can add or remove live cells, as well as wipe the board. Press S to run the game.");
    } else if (keyP == false) {
        fillGrid();
        write("Enter live cells. Press 'S' to randomise or 'R' to wipe the board. Press S to run the game.");
        check = true;
    } else {
        fillGrid();
        write("Game is running. Press S  again to pause. Press 'R' to wipe the board and start again.");

        newGrid = create2DArray(2);

        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {

                var current = grid[i][j];
                var neighbours = countNearbyLives(i, j);

                if (current == 0 && neighbours == 3) {
                    newGrid[i][j] = 1;
                } else if (current == 1 && (neighbours < 2 || neighbours > 3)) {
                    newGrid[i][j] = 0;
                } else {
                    newGrid[i][j] = current;
                }
            }
        }

        grid = newGrid;
        
    }
}

function mousePressed() {

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < sqPerLine; j++) {
            if (check && mouseX > i * w && mouseX < i * w + w && mouseY > j * w + offsetY && mouseY < j * w + w + offsetY) {
                if (grid[i][j] == 0) {
                    grid[i][j] = 1;
                } else {
                    grid[i][j] = 0;
                }
                break;
            }
        }
    }
}

function keyTyped() {

    if (key == 's') {
        if (!keyP ) {
            for (var i = 0; i < size; i++) {
                for (var j = 0; j < size; j++) {
                    grid[i][j] = floor(random(2));
                }
            }

            keyP = false;
            randP = true;
        }
    }

    if (key == 'r' ) {
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                grid[i][j] = 0;
            }
        }

        randP = false;
        keyP = false;
    }

    // 83 represents the 'enter' key
    if (keyCode == 83 ) {
        if (!keyP) {
            keyP = true;
        } else if (keyP) {
            keyP = false;
        }
    }
}

function create2DArray() {

    var arr = new Array(size);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(size);
    }

    return arr;
}

function countNearbyLives(i, j) {

    var lives = 0;

    for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
            if (i + x >= 0 && i + x < size && j + y >= 0 && j + y < size) {
                if (!(x == 0 && y == 0)) {
                    lives += grid[i + x][j + y];
                }
            }
        }
    }

    return lives;
}

function fillGrid() {

    background(255);
    strokeWeight(2);
    stroke(0, 0, 0, 20);

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (grid[i][j] == 1) {
                fill(0);
            } else {
                fill(255);
            }
            rect(i * w, j * w + 30, w - 3, w - 3);
        }
    }
}

function write(words) {

    strokeWeight(2);
    stroke(255);
    fill(0);
    textSize(12);
    text(words, 1, 20);
}

 
