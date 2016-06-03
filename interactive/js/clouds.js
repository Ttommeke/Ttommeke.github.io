
var clouds = [];

var initClouds = function() {
    for (var i = 0; i < 15; i++) {
        clouds.push( createCube(0xFFFFFF,
            30 - Math.random()*130, -10, -(Math.random()*150 / 15 + i*10),
            10 + 15*Math.random() , 2 , 2 + 15*Math.random()) );
        scene.add(clouds[i]);
    }
};

var moveObjectsLeft = function(delta, objects) {
    for (var i = 0; i < objects.length; i++) {
        objects[i].position.x = objects[i].position.x - delta;
    }
};

var recycleClouds = function() {
    for (var i = 0; i < clouds.length; i++) {
        if (clouds[i].position.x < -100) {
            clouds[i].position.x = 30;
        }
    }
};
