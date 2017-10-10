function yaoInit() {
    var shake = document.getElementById('shake');
    document.addEventListener("WeixinJSBridgeReady", function() {
        shake.play();
        shake.pause();
    }, false);
    if (window.DeviceMotionEvent) {　　　　
        window.addEventListener('devicemotion', deviceMotionHandler, true); //devicemotion                　　
    }
}
yaoInit();
var SHAKE_THRESHOLD = 1200;
var last_update = 0;
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;
var count = 0;
var isplay = false;
var encrypted = $('.encrypted').val();

function deviceMotionHandler(eventData) {　　
    var acceleration = eventData.accelerationIncludingGravity;　　
    var curTime = new Date().getTime();　　
    var diffTime = curTime - last_update;　　
    if (diffTime > 100) {　　　　
        last_update = curTime;　　　　
        x = acceleration.x;　　　　
        y = acceleration.y;　　　　
        z = acceleration.z;　　　　
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;　　　　
        if (speed > SHAKE_THRESHOLD) {
            if (!isplay) {
                isplay = true;
                yaoAfterAjax();
            } else {
                //$('.tk-load').removeClass('none');
            }　　　　
        }　　　　
        last_x = x;　　　　
        last_y = y;　　　　
        last_z = z;　　
    }
}

function yaoAfterAjax() {
    shake.play();
    setTimeout(function() {
        shake.pause();
    }, 1400);
    setTimeout(function() {
        alert("isplay:" + isplay)
    }, 500);
}