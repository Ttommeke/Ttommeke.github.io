'use strict';

let createCube = function(colorIn, posX, posY, posZ, sizeX, sizeY, sizeZ) {
    let geometry = new THREE.BoxGeometry( sizeX, sizeY, sizeZ );
    let material =  new THREE.MeshLambertMaterial({color: colorIn});
    let cube = new THREE.Mesh( geometry, material );
    cube.position.set(posX, posY, posZ);

    return cube;
};
