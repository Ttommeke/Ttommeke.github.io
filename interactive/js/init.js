'use strict';

var scene = new THREE.Scene();
var camera = createCamera();

var clock = new THREE.Clock;

var renderer = undefined;
try {
    renderer = new THREE.WebGLRenderer();
    //throw "error test";
} catch (err) {
    console.log("display error");
    var errorBuf = document.getElementById("bufWebglError").style.display = "block";
    var errorM = document.getElementById("webglError").style.display = "block";
}
renderer.setClearColor( 0x2ad3d6, 1 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var cube = createCube(0x0000AA, -11,0,-4, 0.8,1.2,0.8);
cube.wantedposition = { x: cube.position.x, z: cube.position.z}
scene.add(cube);

var fontLoader = new THREE.FontLoader();
fontLoader.load( "js/libs/MineCrafter.js", loadFont, undefined, undefined );

initMap();
initLights();
initClouds();

clock.getDelta();
var render = function () {
    requestAnimationFrame( render );

    var delta = clock.getDelta();

    if (delta > 1) {
        delta = 1;
    }

    moveCamera(delta);
    moveCube(delta);
    danceCube(delta);
    objectFade(delta, messages );
    objectFade(delta, fadingObjects );
    moveObjectsLeft(delta, clouds);
    recycleClouds();

    renderer.render(scene, camera);
};

var audio = new Audio('rartyRock.mp3');

render();
