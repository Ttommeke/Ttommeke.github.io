
let wantedPosition = 0;
let positions = [
    { "x":-8 , "y":7 , "z":10 , "rx":3.14/8, "ry":0, "rz":0},
    { "x":-8 , "y":2 , "z":2 , "rx":0, "ry":0, "rz":0},
    { "x":-8 , "y":0 , "z":-34 , "rx":3.14 / 12, "ry":0, "rz":0},
    { "x":-24 , "y":0.5 , "z":-37 , "rx":0, "ry":3.14/2, "rz":0},
    { "x":-28.5 , "y":2 , "z":-37 , "rx":-3.14*3/8, "ry":3.14/2, "rz":0},
    { "x":-22 , "y":2.7 , "z":-27 , "rx":-3.14/8, "ry":3.14*3/4, "rz":0},
    { "x":-52 , "y":22 , "z":-22 , "rx":-3.14/12, "ry":-3.14*0.1/4, "rz":0},
    { "x":-19 , "y":0.7, "z":-0.8 , "rx":-3.14/12, "ry":3.14*1.7/4, "rz":0},
    { "x":-25 , "y":0.7, "z":-6 , "rx":-3.14/12, "ry":3.14*2.3/4, "rz":0},
    { "x":-30 , "y":0.7, "z":-0.8 , "rx":-3.14/12, "ry":3.14*1.5/4, "rz":0},
    { "x":-34 , "y":0.7, "z":-9 , "rx":-3.14/12, "ry":3.14*3.7/4, "rz":0},
    { "x":-34 , "y":0.7, "z":-11 , "rx":-3.14/12, "ry":3.14*8.3/4, "rz":0},
    { "x":-40 , "y":0.7, "z":-12 , "rx":-3.14/12, "ry":3.14*4.3/4, "rz":0},
    { "x":-37 , "y":0.7, "z":-1 , "rx":-3.14/12, "ry":3.14*1.7/4, "rz":0},
    { "x":-8 , "y":7 , "z":10 , "rx":3.14/8, "ry":0, "rz":0},
    { "x":-8 , "y":7 , "z":10 , "rx":3.14/4, "ry":0, "rz":0}
];

let createCamera = function() {
    let camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );

    camera.position.set(0,0,0);

    camera.rotation.order = 'YXZ';
    //camera.rotation.y = 3.14 / 7;
    camera.rotation.x = + 3.14 / 12;

    return camera;
};

let moveCamera = function(delta) {
    let oldCamX = camera.position.x;
    let oldCamY = camera.position.y;
    let oldCamZ = camera.position.z;

    camera.position.x = oldCamX + (positions[wantedPosition].x - oldCamX) * delta * 2;
    camera.position.y = oldCamY + (positions[wantedPosition].y - oldCamY) * delta * 2;
    camera.position.z = oldCamZ + (positions[wantedPosition].z - oldCamZ) * delta * 2;


    let oldCamRX = camera.rotation.x;
    let oldCamRY = camera.rotation.y;
    let oldCamRZ = camera.rotation.z;

    camera.rotation.x = oldCamRX + (positions[wantedPosition].rx - oldCamRX) * delta * 2;
    camera.rotation.y = oldCamRY + (positions[wantedPosition].ry - oldCamRY) * delta * 2;
    camera.rotation.z = oldCamRZ + (positions[wantedPosition].rz - oldCamRZ) * delta * 2;


}
