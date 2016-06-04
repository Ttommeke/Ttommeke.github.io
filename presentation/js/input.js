let keyUp = false;
let keyDown = false;
let keyLeft = false;
let keyRight = false;

let keyDownFunc = function(e) {

    if (e.keyCode == 37) {
        if (!keyLeft && wantedPosition > 0) {
            wantedPosition--;
        }
        keyLeft = true;
    }
    else if (e.keyCode == 39) {
        if (!keyRight && wantedPosition < positions.length - 1) {
            wantedPosition++;
        }
        keyRight = true;
    }
}

let keyUpFunc = function(e) {
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
