const canvas = document.getElementById('canvas');

var fullscreen = function () {
    if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    } else {
        canvas.mozRequestFullScreen();
    }
}

window.resize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
