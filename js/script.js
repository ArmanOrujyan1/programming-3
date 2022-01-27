var socket = io();
var side = 14;



function setup() {
    frameRate(100);
    let canvas = createCanvas(80 * side, 64 * side);
   }

function nkarel(matrix) {
    background(225);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#116E16");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#856520')
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("#FFC300");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#000000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#e22822");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#1950FA");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

    setInterval(
        function () {
            socket.on('send matrix', nkarel)
        }, 1000
    )

    





  




  
