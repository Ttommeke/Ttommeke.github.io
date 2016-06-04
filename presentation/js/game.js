'use strict';

let minecrafterFont = undefined;

let loadFont = function(myFont) {
    minecrafterFont = myFont;

    initMessages();
};

let messages = [];

let createMessage = function(text, size) {
    let geometry = new THREE.TextGeometry(text, {
            font: minecrafterFont,
            size: size,
            height: size/2
        });
    let material = new THREE.MeshLambertMaterial({color: 0xc1c1c1});
    let textM = new THREE.Mesh( geometry, material );

    return textM;
};

let initMessages = function() {

    messages.push(createMessage('BOSE', 0.2));
    messages[0].position.set(-8.5,0.0,-37.77);
    scene.add(messages[0]);

    messages.push(createMessage('2', 0.6));
    messages[1].position.set(-8.5,1.2,-37.9);
    scene.add(messages[1]);

    messages.push(createMessage('th', 0.15));
    messages[2].position.set(-7.75,1.65,-37.7);
    scene.add(messages[2]);

    messages.push(createMessage('place', 0.15));
    messages[3].position.set(-8.5,0.9,-37.7);
    scene.add(messages[3]);

    messages.push(createMessage('Tom Valkeneers', 0.4));
    messages[4].position.set(-11.5,2.8,-3.7);
    scene.add(messages[4]);

    messages.push(createMessage('2015 - 1016', 0.3));
    messages[5].position.set(-11.5,2.2,-3.7);
    scene.add(messages[5]);

    messages.push(createMessage('ITalent', 0.3));
    messages[6].position.set(-7.0,2.2,-3.7);
    scene.add(messages[6]);

}
