'use strict';

let minecrafterFont = undefined;

let loadFont = function(myFont) {
    minecrafterFont = myFont;

    initMessages();
};

let messages = [];

let createMessage = function(text, size, color = 0xc1c1c1) {
    let geometry = new THREE.TextGeometry(text, {
            font: minecrafterFont,
            size: size,
            height: size/2
        });
    let material = new THREE.MeshLambertMaterial({"color": color});
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

    messages.push(createMessage('Tom Valkeneers', 0.4, 0xFFFFFF));
    messages[4].position.set(-11.5,8.8,+3.7);
    messages[4].rotation.set(3.14 / 8, 0, 0);
    scene.add(messages[4]);

    messages.push(createMessage('2015 - 1016', 0.3, 0xFFFFFF));
    messages[5].position.set(-11.5,8.2,+3.7);
    messages[5].rotation.set(3.14 / 8, 0, 0);
    scene.add(messages[5]);

    messages.push(createMessage('ITalent', 0.3, 0xFFFFFF));
    messages[6].position.set(-7.0,8.2,+3.7);
    messages[6].rotation.set(3.14 / 8, 0, 0);
    scene.add(messages[6]);

    let pxl = createCube(0x222222, -8,11.7,+3.7, 5,4,0.4);
    pxl.rotation.x = 3.14 / 8;
    scene.add( pxl );

    messages.push(createMessage('PXL-IT', 0.6, 0xFFFFFF));
    messages[7].position.set(-9.7,11.3,+3.7);
    messages[7].rotation.set(3.14 / 8, 0, 0);
    scene.add(messages[7]);


    messages.push(createMessage('Tutoring', 0.3));
    messages[8].position.set(-28.3,-0.3,-35.6);
    messages[8].rotation.set(0, 3.14/2, 0);
    scene.add(messages[8]);

    messages.push(createMessage('Math', 0.045, BOOK_RED));
    messages[9].position.set(-29.07,1.05,-37.03);
    messages[9].rotation.order = 'ZYX';
    messages[9].rotation.set(0,3.14*3/8,3.14*3/8);
    scene.add(messages[9]);

    messages.push(createMessage('For IT', 0.04, BOOK_RED));
    messages[10].position.set(-29,1.02,-37.03);
    messages[10].rotation.order = 'ZYX';
    messages[10].rotation.set(0,3.14*3/8,3.14*3/8);
    scene.add(messages[10]);

    messages.push(createMessage('Programing', 0.025, BOOK_RED));
    messages[11].position.set(-29.15,1.205,-36.7);
    messages[11].rotation.order = 'ZYX';
    messages[11].rotation.set(0,3.14*5/8,3.14*3/8);
    scene.add(messages[11]);

    messages.push(createMessage('Basics', 0.03, BOOK_RED));
    messages[12].position.set(-29.1,1.18,-36.7);
    messages[12].rotation.order = 'ZYX';
    messages[12].rotation.set(0,3.14*5/8,3.14*3/8);
    scene.add(messages[12]);

    messages.push(createMessage('Java', 0.06, BOOK_RED));
    messages[13].position.set(-28.8,1.03,-36.73);
    messages[13].rotation.order = 'ZYX';
    messages[13].rotation.set(0,3.14*5/8,3.14*3/8);
    scene.add(messages[13]);

    messages.push(createMessage('Advanced', 0.028, BOOK_RED));
    messages[14].position.set(-28.84,0.95,-37.01);
    messages[14].rotation.order = 'ZYX';
    messages[14].rotation.set(0,3.14*3/8,3.14*3/8);
    scene.add(messages[14]);

}
