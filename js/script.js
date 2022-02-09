var socket = io();
var side = 12;
var weath = 'summer'

function setup() {
    createCanvas(60 * side, 60 * side);
}

socket.on("weather", function (data) {
    weath = data;
})

socket.on('data', nkarel)

function nkarel(matrix) {
    background(225);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (weath == "summer") {
                    fill("green");
                } else if (weath == "autumn") {
                    fill("#333300");
                } else if (weath == "winter") {
                    fill("white");
                } else if (weath == "spring") {
                    fill("#4dffa6");
                }

            }
            else if (matrix[y][x] == 0) {
                fill('#856520')
            }
            else if (matrix[y][x] == 2) {
                fill("#FFC300");
            }
            else if (matrix[y][x] == 3) {
                fill("#000000");
            }
            else if (matrix[y][x] == 4) {
                fill("#e22822");
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on('send matrix', nkarel)


function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}
function addGrassPredator() {
    socket.emit("add grass predator")
}
function addFire() {
    socket.emit("add fire")
}
function deleteGrass() {
    socket.emit("deleteGrass")
}
function deleteGrassEater() {
    socket.emit("deleteGrassEater")
}
function deleteGrassPredator() {
    socket.emit("deleteGrassPredator")
}
function deleteFire() {
    socket.emit("deleteFire")
}












