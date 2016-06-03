var keyUp = false;
var keyDown = false;
var keyLeft = false;
var keyRight = false;

var keyDownFunc = function(e) {

    if (e.keyCode == 37) {
        if (!keyLeft && !checkCubeCollision(map,cube.wantedposition.x - 1, cube.wantedposition.z)) {
            cube.wantedposition.x -= 1;
            checkEventEnter(eventMap, cube.wantedposition.x, cube.wantedposition.z, cube.wantedposition.x + 1, cube.wantedposition.z);
        }
        keyLeft = true;
    }
    else if (e.keyCode == 39) {
        if (!keyRight && !checkCubeCollision(map,cube.wantedposition.x + 1, cube.wantedposition.z)) {
            cube.wantedposition.x += 1;
            checkEventEnter(eventMap, cube.wantedposition.x, cube.wantedposition.z, cube.wantedposition.x - 1, cube.wantedposition.z);
        }
        keyRight = true;
    }
    else if (e.keyCode == 38) {
        if (!keyUp && !checkCubeCollision(map,cube.wantedposition.x, cube.wantedposition.z - 1)) {
            cube.wantedposition.z -= 1;
            checkEventEnter(eventMap, cube.wantedposition.x, cube.wantedposition.z, cube.wantedposition.x, cube.wantedposition.z + 1);
        }
        keyUp = true;
    }
    else if (e.keyCode == 40) {
        if (!keyDown && !checkCubeCollision(map,cube.wantedposition.x, cube.wantedposition.z + 1)) {
            cube.wantedposition.z += 1;
            checkEventEnter(eventMap, cube.wantedposition.x, cube.wantedposition.z, cube.wantedposition.x + 1, cube.wantedposition.z - 1);
        }
        keyDown = true;
    }


    console.log('x: ' + cube.wantedposition.x + ' z: ' + cube.wantedposition.z);
}

var keyUpFunc = function(e) {
    if (e.keyCode == 37) {
        keyLeft = false;
    }
    else if (e.keyCode == 39) {
        keyRight = false;
    }
    else if (e.keyCode == 38) {
        keyUp = false;
    }
    else if (e.keyCode == 40) {
        keyDown = false;
    }
}

var moveMouse = function(e) {
    var x = -(e.clientX + 0.0 - window.innerWidth/2) / 600;
    var y = -(e.clientY - window.innerHeight/2) / 600;

    //camera.position.x = 7-x-y;
    //camera.position.z = 7+x-y;
    //camera.position.y = y+5;
};
