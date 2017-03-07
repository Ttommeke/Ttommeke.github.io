'use strict';

let minecrafterFont = undefined;

let loadFont = function(myFont) {
    minecrafterFont = myFont;

    initMessages();
};

let messages = [];

let createMessage = function(text, size, height, color = 0xc1c1c1) {
    let geometry = new THREE.TextGeometry(text, {
            font: minecrafterFont,
            size: size,
            height: height
        });
    let material = new THREE.MeshLambertMaterial({"color": color});
    let textM = new THREE.Mesh( geometry, material );

    return textM;
};
