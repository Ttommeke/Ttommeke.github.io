
let wantedPosition = 0;
let positions = [
    { "x":-8 , "y":7 , "z":10 , "rx":3.14/8, "ry":0, "rz":0},
    { "x":-8 , "y":2 , "z":2 , "rx":0, "ry":0, "rz":0},
    { "x":-8 , "y":0 , "z":-34 , "rx":3.14 / 12, "ry":0, "rz":0},
    { "x":-24 , "y":0.5 , "z":-37 , "rx":0, "ry":3.14/2, "rz":0},
    { "x":-28.5 , "y":2 , "z":-37 , "rx":-3.14*3/8, "ry":3.14/2, "rz":0}
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
