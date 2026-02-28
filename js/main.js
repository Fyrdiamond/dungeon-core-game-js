window.addEventListener("load", async () => {
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

    async function load_mods() {
        const manifest = await fetch('/mods/mods.json')
            .then(r => r.json());

        const modules = await Promise.all(
            manifest.map(mod => import(`/mods/${mod}/mod.js`))
        );

        return modules.map(module => module.default);
    }

    const mods = await load_mods();

    await Promise.all(
        mods.map(mod => new mod())
    );
})
