window.addEventListener("load", () => {
    const canvas = document.getElementById('canvas');

    function fullscreen() {
        if (canvas.webkitRequestFullScreen) {
            canvas.webkitRequestFullScreen();
        } else {
            canvas.mozRequestFullScreen();
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize, false);
})
