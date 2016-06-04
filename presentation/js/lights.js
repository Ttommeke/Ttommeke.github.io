'use strict';

let hemisphereLight = undefined;
let sunLight = undefined;
let greenLight = undefined;
let redLight = undefined;
let blueLight = undefined;

let initLights = function() {
    sunLight = new THREE.DirectionalLight( 0xffffff, 1 );
    sunLight.position.set( 25, 50, 10 );
    scene.add( sunLight );

    hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.4 );
    scene.add( hemisphereLight );
};
