'use strict';

var createCube = function(colorIn, posX, posY, posZ, sizeX, sizeY, sizeZ) {
    var geometry = new THREE.BoxGeometry( sizeX, sizeY, sizeZ );
    var material =  new THREE.MeshLambertMaterial({color: colorIn});
    var cube = new THREE.Mesh( geometry, material );
    cube.position.set(posX, posY, posZ);

    return cube;
};

var moveCube = function(delta) {
    var posX = cube.position.x;
    var posZ = cube.position.z;
    var wanX = cube.wantedposition.x;
    var wanZ = cube.wantedposition.z;
    var deltaX = (wanX - posX);
    var deltaZ = (wanZ - posZ);

    cube.position.x = posX + deltaX * delta * 20;
    cube.position.z = posZ + deltaZ * delta * 20;

    var deltaAbs = Math.abs(deltaZ);
    if (deltaAbs < Math.abs(deltaX)) {
        deltaAbs = Math.abs(deltaX);
    }

    var scaleY = - 4 * Math.pow(deltaAbs,2) + 4 * deltaAbs + 1;

    cube.scale.y = scaleY;
    cube.scale.x = 1 / scaleY;
    cube.scale.z = 1 / scaleY;
    cube.position.y = scaleY*2 - 2;
}

var kazouModeEnabled = false;
var oldHemiIntensity = 0;
var oldSunIntensity = 0;

var startKazouMode = function() {
    if (!kazouModeEnabled) {
        oldSunIntensity = sunLight.intensity;
        oldHemiIntensity = hemisphereLight.intensity;
        sunLight.intensity = 0.2;
        hemisphereLight.intensity = 0;
        blueLight.intensity = 1;
        kazouModeEnabled = true;
        audio.play();
    }
};
var stopKazouMode = function() {
    if (kazouModeEnabled) {
        sunLight.intensity = oldSunIntensity;
        hemisphereLight.intensity = oldHemiIntensity;
        kazouModeEnabled = false;
        redLight.intensity = 0;
        greenLight.intensity = 0;
        blueLight.intensity = 0;
        audio.pause();
    }
}

var totalDanceTime = 0;

var danceCube = function(delta) {

    if (kazouModeEnabled) {
        var f = totalDanceTime*3.14*128/60;

        var scaleY = 1 + Math.sin(f*2)/2;
        cube.scale.y = scaleY;
        cube.scale.x = 1 / (scaleY);
        cube.scale.z = 1 / (scaleY);
        cube.position.y = scaleY*0.6 - 0.5;

        if (f/2 % 3 < 1){
            redLight.intensity = 0;
            greenLight.intensity = 0;
            blueLight.intensity = 1;
        }
        else if (f/2 % 3 < 2){
            redLight.intensity = 0;
            greenLight.intensity = 1;
            blueLight.intensity = 0;
        }
        else if (f/2 % 3 < 3){
            redLight.intensity = 1;
            greenLight.intensity = 0;
            blueLight.intensity = 0;
        }

        totalDanceTime += delta;
    }

}

var checkCubeCollision = function(map,x,z) {
    var xToUse = -x;
    var zToUse = -z;

    if (xToUse < map.length && zToUse < map[xToUse].length && xToUse >= 0 && zToUse >= 0
        && (map[xToUse][zToUse] == 1 || map[xToUse][zToUse] == 3 || map[xToUse][zToUse] == 7
         || map[xToUse][zToUse] == 13 || map[xToUse][zToUse] == 14)) {
        return false;
    }
    else {
        return true;
    }
}

var checkEventEnter = function( map, x, z, oldX, oldZ) {
    var xToUse = Math.abs(x);
    var zToUse = Math.abs(z);
    var oldXToUse = Math.abs(oldX);
    var oldZToUse = Math.abs(oldZ);

    for (var i = 0; i < map.length; i++) {
        if (map[i].x == xToUse && map[i].z == zToUse && map[i].eventEnter != undefined) {
            map[i].eventEnter();
        }
        if (map[i].x == oldXToUse && map[i].z == oldZToUse && map[i].eventExit != undefined) {
            map[i].eventExit();
        }
    }
}
