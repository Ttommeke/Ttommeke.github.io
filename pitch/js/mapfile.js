let map = [
        [ 0, 0, 1, 1, 1, 0, 0, 0, 1,21,22,23,23,23,23,23,23,23,22,21, 1],
        [ 0, 1, 1, 1, 1, 1, 0, 1, 1, 1,21,22,22,22,22,22,22,22,21, 1, 1, 1],
        [ 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1,21,21,21,21,21,21,21, 1, 1, 1],
        [ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
        [ 1, 1, 1, 3, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 1],
        [ 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 4, 1, 0, 0],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [ 0, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0],
        [ 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [ 1, 1, 1, 4, 1, 7, 7, 1, 1,10,10,10, 1, 1, 0, 0, 0, 0, 0],
        [ 1, 1, 1, 1, 1, 7, 7, 1,10, 7, 7, 7,10, 1, 0, 0, 0, 0, 0],
        [ 0, 1, 1, 1, 1, 7, 7, 1,10, 7, 9, 7,10, 1, 1, 0, 0, 0, 0],
        [ 0, 1, 1, 1, 7, 7, 1, 1,10, 7, 7, 7,10, 1, 1, 0, 0, 0, 0],
        [ 0, 0, 3, 1, 7, 1, 1, 1, 1,10,10,10, 1, 1, 0, 0, 0, 0, 0],
        [ 0, 0, 1, 7, 7, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [ 0, 1, 1, 7, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [ 1, 1, 1, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 1, 3, 1, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 1, 1, 1, 7, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 1, 1, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0,11, 7,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0,11, 7,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [ 0, 0,11, 7,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [ 0, 0,11, 7,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 1, 1, 7, 7, 7],
        [ 0, 1, 7, 7, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 7, 7, 7,31,31],
        [ 1, 3, 1, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7,31,31,31,32,32],
        [ 1, 1, 1, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 7,31,32,32,33,33],
        [ 0, 1, 7, 7, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7,31,32,33,33,33,33],
        [ 1, 1, 7, 7, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7,31,32,33,33,33,33],
        [ 1, 1, 1, 7, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 7, 7,31,32,33,33,33,33],
        [ 0, 1, 1, 7, 7, 1, 1, 0, 0, 0, 0, 1, 1, 1, 4, 1, 7, 7,31,32,33,33,33,33],
        [ 0, 1, 1, 7, 7, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 7,31,32,33,33,33,33],
        [ 0, 0, 1, 1, 7, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 7, 7,31,32,33,33,33,33,32,31, 7, 1],
        [ 0, 0, 1, 1, 7, 7, 1,11,11,11, 1, 1, 1, 1, 1, 1, 7, 7, 7,31,32,32,32,32,31, 7, 1, 1],
        [ 0, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 7, 7, 7,31,31,31,31, 7, 1, 1, 0],
        [ 1, 1, 1, 1, 3, 1, 1,11,11,11, 7, 7, 1, 1, 1, 1, 1, 3, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1],
        [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [ 1, 1, 1, 1, 1, 4, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
        [ 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 4, 1, 0, 1, 1, 0],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];


let blackboxX = -20;
let blackboxY = -8;
let blackboxZ = 40;

let initMessages = function() {


    let black_box = createCube(0x222222, blackboxX,blackboxY,blackboxZ, 12,12,12);
    scene.add( black_box );

    messages.push(createMessage('ProductName', 0.6, 0.02, 0xFFFFFF));
    messages[0].position.set(blackboxX-3,blackboxY+1,blackboxZ+6);
    messages[0].rotation.set( 0, 0, 0);
    scene.add(messages[0]);

    messages.push(createMessage('by Steven, Ruben, Bjorn,', 0.3, 0.01, 0xFFFFFF));
    messages[1].position.set(blackboxX-5,blackboxY-1,blackboxZ+6);
    messages[1].rotation.set( 0, 0, 0);
    scene.add(messages[1]);

    messages.push(createMessage(' Tom and Tom', 0.3, 0.01, 0xFFFFFF));
    messages[2].position.set(blackboxX-5,blackboxY-1.7,blackboxZ+6);
    messages[2].rotation.set( 0, 0, 0);
    scene.add(messages[2]);

    messages.push(createMessage('Become', 0.6, 0.01, 0xFFFFFF));
    messages[3].position.set(blackboxX+6,blackboxY+5.8,blackboxZ+4.7);
    messages[3].rotation.set( 0, 3.1415/2, -3.1415/2);
    scene.add(messages[3]);

    messages.push(createMessage('more creative', 0.6, 0.01, 0xFFFFFF));
    messages[4].position.set(blackboxX+6,blackboxY+5.8,blackboxZ+5.6);
    messages[4].rotation.set( 0, 3.1415/2, -3.1415/2);
    scene.add(messages[4]);

    messages.push(createMessage('With your presentations', 0.1, 0.01, 0xFFFFFF));
    messages[5].position.set(blackboxX+6,blackboxY+5.8,blackboxZ+5.8);
    messages[5].rotation.set( 0, 3.1415/2, -3.1415/2);
    scene.add(messages[5]);

    messages.push(createMessage('And discover', 0.5, 0.01, 0xFFFFFF));
    messages[6].position.set(blackboxX-5,blackboxY+6,blackboxZ-3);
    messages[6].rotation.set( -3.1415/2, 0, 0);
    scene.add(messages[6]);

    messages.push(createMessage('the possibilities', 0.5, 0.01, 0xFFFFFF));
    messages[7].position.set(blackboxX-5,blackboxY+6,blackboxZ-2.2);
    messages[7].rotation.set( -3.1415/2, 0, 0);
    scene.add(messages[7]);

    let pilar1 = createCube(0x999999, 0,2,110, 1,4,0.2);
    scene.add( pilar1 );

    let pilar2 = createCube(0x999999, -1.5,2.2,110, 1,4.4,0.2);
    scene.add( pilar2 );

    let pilar3 = createCube(0x999999, -3,2.3,110, 1,4.6,0.2);
    scene.add( pilar3 );

    messages.push(createMessage('5,6', 0.3, 0.01, 0xFFFFFF));
    messages[8].position.set( -4,5.8,110);
    messages[8].rotation.set( 0, 3.1415, 0);
    scene.add(messages[8]);

    let pilar4 = createCube(0xdddddd, -4.5,2.8,110, 1,5.6,0.2);
    scene.add( pilar4 );

    let pilar5 = createCube(0x999999, -6,2.7,110, 1,5.4,0.2);
    scene.add( pilar5 );

    let pilar6 = createCube(0x999999, -7.5,2.9,110, 1,5.8,0.2);
    scene.add( pilar6 );

    let pilar7 = createCube(0xdddddd, -9,3,110, 1,6,0.2);
    scene.add( pilar7 );

    let redBar = createCube(0xFF0000, -5,-1,110, 14,1,0.2);
    scene.add( redBar );

    messages.push(createMessage('Interesting numbers', 0.3, 0.01, 0xFFFFFF));
    messages[9].position.set( 0.2,-1,109.8);
    messages[9].rotation.set( 0, 3.1415, 0);
    scene.add(messages[9]);

    messages.push(createMessage('pi -', 0.3, 0.01, 0xFFFFFF));
    messages[10].position.set( 2,3.1415-0.3,110);
    messages[10].rotation.set( 0, 3.1415, 0);
    scene.add(messages[10]);

    messages.push(createMessage('4  -', 0.3, 0.01, 0xFFFFFF));
    messages[11].position.set( 2,4-0.3,110);
    messages[11].rotation.set( 0, 3.1415, 0);
    scene.add(messages[11]);

    messages.push(createMessage('2  -', 0.3, 0.01, 0xFFFFFF));
    messages[12].position.set( 2,2-0.3,110);
    messages[12].rotation.set( 0, 3.1415, 0);
    scene.add(messages[12]);

    messages.push(createMessage('6  -', 0.3, 0.01, 0xFFFFFF));
    messages[13].position.set( 2,6-0.3,110);
    messages[13].rotation.set( 0, 3.1415, 0);
    scene.add(messages[13]);

    messages.push(createMessage('0  -', 0.3, 0.01, 0xFFFFFF));
    messages[14].position.set( 2,0-0.2,110);
    messages[14].rotation.set( 0, 3.1415, 0);
    scene.add(messages[14]);

    messages.push(createMessage('6', 0.3, 0.01, 0xFFFFFF));
    messages[15].position.set( -8.8,6.2,110);
    messages[15].rotation.set( 0, 3.1415, 0);
    scene.add(messages[15]);

    messages.push(createMessage('\'17', 0.3, 0.01, 0xFFFFFF));
    messages[16].position.set( -8.5, -2.2,110);
    messages[16].rotation.set( 0, 3.1415, 0);
    scene.add(messages[16]);

    messages.push(createMessage('\'16', 0.3, 0.01, 0xFFFFFF));
    messages[17].position.set( -7, -2.2,110);
    messages[17].rotation.set( 0, 3.1415, 0);
    scene.add(messages[17]);

    messages.push(createMessage('\'15', 0.3, 0.01, 0xFFFFFF));
    messages[18].position.set( -5.5, -2.2,110);
    messages[18].rotation.set( 0, 3.1415, 0);
    scene.add(messages[18]);

    messages.push(createMessage('\'14', 0.3, 0.01, 0xFFFFFF));
    messages[19].position.set( -4, -2.2,110);
    messages[19].rotation.set( 0, 3.1415, 0);
    scene.add(messages[19]);

    messages.push(createMessage('\'13', 0.3, 0.01, 0xFFFFFF));
    messages[20].position.set( -2.5, -2.2,110);
    messages[20].rotation.set( 0, 3.1415, 0);
    scene.add(messages[20]);

    messages.push(createMessage('\'12', 0.3, 0.01, 0xFFFFFF));
    messages[21].position.set( -1.0, -2.2,110);
    messages[21].rotation.set( 0, 3.1415, 0);
    scene.add(messages[21]);

    messages.push(createMessage('\'11', 0.3, 0.01, 0xFFFFFF));
    messages[22].position.set( 0.5, -2.2,110);
    messages[22].rotation.set( 0, 3.1415, 0);
    scene.add(messages[22]);

    messages.push(createMessage('Questions?', 0.5, 0.01, 0xFFFFFF));
    messages[23].position.set(blackboxX-5,blackboxY-6,blackboxZ-3);
    messages[23].rotation.set( 3.1415/2, 0, 0);
    scene.add(messages[23]);
};

let wantedPosition = 0;
let positions = [
    { "x":blackboxX , "y":blackboxY , "z":blackboxZ + 12 , "rx":0, "ry":0, "rz":0},
    { "x":blackboxX , "y":blackboxY , "z":blackboxZ + 18 , "rx":0, "ry":0, "rz":0},
    { "x":blackboxX + 18 , "y":blackboxY , "z":blackboxZ , "rx":0, "ry":3.1415/2, "rz":-3.1415/2},
    { "x":blackboxX + 11 , "y":blackboxY + 5 , "z":blackboxZ + 5 , "rx":0, "ry":3.1415/2, "rz":-3.1415/2},
    { "x":blackboxX , "y": 10 , "z":blackboxZ , "rx":-3.1415/2, "ry":0, "rz":0},
    { "x":-20 , "y":4, "z":15 , "rx":0, "ry":0, "rz":0},
    { "x":-10 , "y":4, "z":-5, "rx":-3.1415/4, "ry":+3.1415/4, "rz":0},
    { "x":-16 , "y":1, "z":-6, "rx":+3.1415/12, "ry":-3.1415/4, "rz":0},
    { "x":-17.5 , "y":17, "z":-13, "rx":-3.1415/2, "ry":-3.1415, "rz":0},
    { "x":-5 , "y":2, "z":102, "rx":0, "ry":-3.1415, "rz":0},
    { "x":2 , "y":0, "z":104, "rx":3.1415/12, "ry":-3.1415*6/5, "rz":0},
    { "x":-10 , "y":6, "z":104, "rx":-3.1415/12, "ry":-3.1415*4/5, "rz":0},
    { "x":blackboxX , "y": blackboxY - 18 , "z":blackboxZ , "rx":3.1415/2, "ry":0, "rz":0},
];
