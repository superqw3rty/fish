onBodyResize() = function () {
    var dwidth = Math.max(intval(window.innerWidth), intval(document.documentElement.offsetWidth));
    if (window.lastWindowWidth != dwidth) {
        window.lastWindowWidth = dwidth;
        if (browser.msie6) {
            return;
        }
        var pl = document.body.offsetWidth, sbw = sbWidth();
        if (document.body.offsetWidth < pl) {
            document.body.style.overflowX = "auto";
            dwidth = pl + sbw + 2;
        } else {
            document.body.style.overflowX = "hidden";
        }
        if (dwidth) {
            document.body.style.width = dwidth - sbw - 2 + "px";
        }
    }
}

onBodyResize()