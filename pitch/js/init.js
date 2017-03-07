'use strict';

let scene = new THREE.Scene();
let camera = createCamera();

let clock = new THREE.Clock;

let renderer = undefined;
try {
    renderer = new THREE.WebGLRenderer();
    //throw "error test";
} catch (err) {
    console.log("display error");
    let errorBuf = document.getElementById("bufWebglError").style.display = "block";
    let errorM = document.getElementById("webglError").style.display = "block";
}
renderer.setClearColor( 0x2ad3d6, 1 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let fontLoader = new THREE.FontLoader();
fontLoader.load( "js/libs/MineCrafter.js", loadFont, undefined, undefined );

initMap();
initLights();
initClouds();

clock.getDelta();
let render = function () {
    requestAnimationFrame( render );

    let delta = clock.getDelta();

    if (delta > 1) {
        delta = 1;
    }

    moveCamera(delta);
    moveObjectsLeft(delta, clouds);
    recycleClouds();

    renderer.render(scene, camera);
};

render();
