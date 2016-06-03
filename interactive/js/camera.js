var createCamera = function() {
    var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );

    camera.position.set(7,5,7);

    camera.rotation.order = 'YXZ';
    camera.rotation.y = 3.14 / 7;
    camera.rotation.x = - 3.14 / 5;

    return camera;
};

var moveCamera = function(delta) {
    var oldCamX = camera.position.x - 2.2;
    var oldCamZ = camera.position.z - 5;

    camera.position.x = oldCamX + (cube.position.x - oldCamX) * delta * 2 + 2.2;
    camera.position.z = oldCamZ + (cube.position.z - oldCamZ) * delta * 2 + 5;
}
