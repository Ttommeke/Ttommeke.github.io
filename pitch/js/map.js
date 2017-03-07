
var WALL_BASE_COLOR = 0xfcc75d;
var TILE_BASE_COLOR = 0xcc9d41;
var BRIDGE_RAIL_COLOR = 0x603a18;
var WATER_COLOR = 0x3690d1;
var GRASS_COLOR = 0x00FF00;
var ROCK_COLOR = 0x776d5e;
var TREE_TRUNK_COLOR = 0x604b18;
var LEAF_COLOR = 0x06b500;
var BOSE_BLACK = 0x3f3f3f;
var BOSE_GRAY = 0x5e5e5e;
var BOOK_RED = 0xed2d02;
var BOOK_PAPER = 0xfce9b8;
var BEEHIVE_YELLOW = 0xf9d907;
var BEEHIVE_BROWN = 0x562b00;
var ROCK_BROWN_COLOR = 0xb26e3e;


let fadingObjects = [];

let generateMap = function(map) {
    for (let x = 0; x < map.length; x++) {
        for (let z = 0; z < map[x].length; z++) {
            if (map[x][z] == 8) {
                let wallCube = createCube(WALL_BASE_COLOR, -x,0.5,-z, 1,2,1);
                scene.add( wallCube );
            }
            else if (map[x][z] == 9) {
                let waterCube = createCube(WATER_COLOR, -x,-0.2,-z, 3,0.6,3);
                waterCube.material.opacity = 0.4;
                waterCube.material.transparent = true;
                scene.add( waterCube );

                scene.add( createCube(WALL_BASE_COLOR, -x,-0.15,-z, 1,0.7,1) );
                scene.add( createCube(WALL_BASE_COLOR, -x,0.5,-z, 0.3,1,0.3) );
                scene.add( createCube(WALL_BASE_COLOR, -x,1.1,-z, 0.6,0.2,0.6) );
                scene.add( createCube(WALL_BASE_COLOR, -x,1.35,-z, 0.2,0.3,0.2) );
            }
            else if (map[x][z] == 10) {
                let wallCube = createCube(WALL_BASE_COLOR, -x,-0.15,-z, 1,0.7,1);
                scene.add( wallCube );
            }
            else if (map[x][z] == 11) {
                scene.add( createCube(BRIDGE_RAIL_COLOR, -x,-0.15,-z, 0.3,0.7,0.3) );

                if (map[x-1][z] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x+0.35,+0.1,-z, 0.35,0.2,0.3) );
                }
                if (map[x+1][z] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x-0.35,+0.1,-z, 0.35,0.2,0.3) );
                }
                if (map[x][z-1] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x,+0.1,-z+0.35, 0.3,0.2,0.35) );
                }
                if (map[x][z+1] >= 8) {
                    scene.add( createCube(BRIDGE_RAIL_COLOR, -x,+0.1,-z-0.35, 0.3,0.2,0.35) );
                }

            }
            else if (map[x][z] == 12) {
                scene.add( createCube(WALL_BASE_COLOR, -x,-0.15,-z, 1,0.7,1) );
                scene.add( createCube(WALL_BASE_COLOR, -x,1.3,-z, 1,0.4,1) );
            }
            else if (map[x][z] == 13) {
                scene.add( createCube(WALL_BASE_COLOR, -x,1.4,-z, 1,0.2,1) );
            }
            else if (map[x][z] == 14) {
                let cubeB = createCube(BRIDGE_RAIL_COLOR, -x,-1,-z, 1,1,1);
                cubeB.material.transparent = true;
                cubeB.material.opacity = 0;
                fadingObjects.push( cubeB );
                scene.add( cubeB );

                let displayCube = () => { cubeB.material.wantedOpacity = 1; };

                eventMap.push(new eventMapItem( x, z-1, displayCube, undefined));
                eventMap.push(new eventMapItem( x-1, z-1, displayCube, undefined));
                eventMap.push(new eventMapItem( x+1, z-1, displayCube, undefined));
            }
            else if (map[x][z] == 15) {
                for (let i = 0; i < 7; i++) {
                    scene.add( createCube(WATER_COLOR, -x - 0.5 + Math.random(),Math.random(),-z -0.5 + Math.random(), Math.random(),Math.random(),Math.random()) );
                }
            }
            else if (map[x][z] == 16) {
                scene.add( createCube(BOSE_BLACK, -x,1.5,-z, 8,4,2) );
                scene.add( createCube(BOSE_BLACK, -x,1.5,-z+1, 1.5,1.5,0.65) );
                scene.add( createCube(BOSE_GRAY, -x,1,-z+1, 2,3,0.6) );

                let heightBuf = 0.3;

                scene.add( createCube(BOSE_GRAY, -x-2.5,2 + heightBuf,-z+1, 2,0.3,0.2) );
                scene.add( createCube(BOSE_GRAY, -x-2.5,0.3 + heightBuf,-z+1, 2,0.3,0.2) );
                scene.add( createCube(BOSE_GRAY, -x-3.35,1.15 + heightBuf,-z+1, 0.3,2,0.2) );
                scene.add( createCube(BOSE_GRAY, -x-1.65,1.15 + heightBuf,-z+1, 0.3,2,0.2) );
                scene.add( createCube(BOSE_GRAY, -x-2.5,1.15 + heightBuf,-z+1, 0.4,0.4,0.3) );

                scene.add( createCube(BOSE_GRAY, -x+2.5,2 + heightBuf,-z+1, 2,0.3,0.2) );
                scene.add( createCube(BOSE_GRAY, -x+2.5,0.3 + heightBuf,-z+1, 2,0.3,0.2) );
                scene.add( createCube(BOSE_GRAY, -x+3.35,1.15 + heightBuf + heightBuf,-z+1, 0.3,2,0.2) );
                scene.add( createCube(BOSE_GRAY, -x+1.65,1.15 + heightBuf,-z+1, 0.3,2,0.2) );
                scene.add( createCube(BOSE_GRAY, -x+2.5,1.15 + heightBuf,-z+1, 0.4,0.4,0.3) );
            }
            else if (map[x][z] == 17) {
                let leftHalf = createCube(BOOK_RED, -x,1,-z-0.15, 0.4,0.7,0.05);
                let rightHalf = createCube(BOOK_RED, -x,1,-z+0.15, 0.4,0.7,0.05);
                leftHalf.rotation.order = 'ZYX';
                rightHalf.rotation.order = 'ZYX';
                leftHalf.rotation.set(0,3.14*3/8,3.14*3/8);
                rightHalf.rotation.set(0,-3.14*3/8,3.14*3/8);

                let leftHalfPaper = createCube(BOOK_PAPER, -x+0.02,1.05,-z-0.15, 0.35,0.6,0.05);
                let rightHalfPaper = createCube(BOOK_PAPER, -x+0.02,1.05,-z+0.15, 0.35,0.6,0.05);
                leftHalfPaper.rotation.order = 'ZYX';
                rightHalfPaper.rotation.order = 'ZYX';
                leftHalfPaper.rotation.set(0,3.14*3/8,3.14*3/8);
                rightHalfPaper.rotation.set(0,-3.14*3/8,3.14*3/8);

                scene.add( leftHalf );
                scene.add( rightHalf );
                scene.add( leftHalfPaper );
                scene.add( rightHalfPaper );

                let wallCube = createCube(WALL_BASE_COLOR, -x,-0.15,-z, 1,0.7,1);
                scene.add( wallCube );
            }
            else if (map[x][z] == 18) {

                scene.add( createCube(WALL_BASE_COLOR, -x,-0.1,-z, 1.9,0.8,1.9) );
                for (var i = 0; i < 6; i++) {
                    scene.add( createCube(BEEHIVE_YELLOW, -x,+0.4 + 0.3*i,-z, 1.5,0.2,1.5) );
                    scene.add( createCube(BEEHIVE_BROWN, -x,+0.55 + 0.3*i,-z, 1.2,0.1,1.2) );
                }
                scene.add( createCube(BEEHIVE_YELLOW, -x,2.2,-z, 1.3,0.2,1.3) );
                scene.add( createCube(BEEHIVE_BROWN, -x+0.7,0.5,-z, 0.16,0.4,0.3) );
            }
            else if (map[x][z] == 4) {
                scene.add( createCube(TREE_TRUNK_COLOR, -x,0.5,-z, 0.5,2,0.5) );
                scene.add( createCube(LEAF_COLOR, -x,2,-z, 1.3,1.3,1.3) );
            }
            else if (map[x][z] == 3) {
                let bigRockCube = createCube(ROCK_COLOR, -x-0.3,-0.43,-z-0.3, 0.3,0.14,0.2);
                scene.add( bigRockCube );
                let smallBigRockCube = createCube(ROCK_COLOR, -x+0.2,-0.45,-z-0.2, 0.2,0.1,0.20);
                scene.add( smallBigRockCube );
                let smallRockCube = createCube(ROCK_COLOR, -x-0.15,-0.46,-z+0.3, 0.12,0.08,0.21);
                scene.add( smallRockCube );
            }

            else if (map[x][z] == 21) {
                var height = Math.random() * 3 + 0.5;
                scene.add( createCube(0x9e907b, -x,(height-1)/2,-z, 1,height,1) );
                if (Math.random() > 0.66) {
                    scene.add( createCube(0xFFFFFF, -x,height-0.5,-z, 1.1,0.2,1.1) );
                }
            }
            else if (map[x][z] == 22) {
                var height = Math.random() * 4 + 3;
                scene.add( createCube(0x9e907b, -x,(height-1)/2,-z, 1,height,1) );
                if (Math.random() > 0.33) {
                    scene.add( createCube(0xFFFFFF, -x,height-0.5,-z, 1.1,0.2,1.1) );
                }
            }
            else if (map[x][z] == 23) {
                var height = Math.random() * 5 + 5;
                scene.add( createCube(0x9e907b, -x,(height-1)/2,-z, 1,height,1) );
                scene.add( createCube(0xFFFFFF, -x,height-0.5,-z, 1.1,0.2,1.1) );
            }
            else if (map[x][z] == 31) {
                var height = Math.random() * 3 + 0.5;
                scene.add( createCube(ROCK_BROWN_COLOR, -x,(height-1)/2,-z, 1,height,1) );

            }
            else if (map[x][z] == 32) {
                var height = Math.random() * 4 + 3;
                scene.add( createCube(ROCK_BROWN_COLOR, -x,(height-1)/2,-z, 1,height,1) );

            }
            else if (map[x][z] == 33) {
                var height = 9;
                scene.add( createCube(ROCK_BROWN_COLOR, -x,(height-1)/2,-z, 1,height,1) );
            }

            if (map[x][z] == 14) {
                //displayNothing
            }
            else if (map[x][z] >= 7) {
                let wallCube = createCube(TILE_BASE_COLOR, -x,-1,-z, 1,1,1);
                scene.add( wallCube );
            }
            else if (map[x][z] > 0) {
                let wallCube = createCube(GRASS_COLOR, -x,-1,-z, 1,1,1);
                scene.add( wallCube );
            }

        }
    }
}

let initMap = function() {
    generateMap(map);
}
