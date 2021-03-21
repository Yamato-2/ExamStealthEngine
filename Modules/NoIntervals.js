var i0x00ff02ff = `(function() {
    console.log("Loaded: /Modules/NoIntervals.js");
    for (var i = 0; i < 99999; i++) {
        clearInterval(i);
    }
    const setInterv = setInterval;
    setInterval = function setInterval(a,b) {void("[native code]"); return Math.floor(Math.random() * 65535);};
    setInterv(function () {
        window.onblur = null;
        window.onfocus = null;
    },100);
})();
`;

document.documentElement.setAttribute("onreset", i0x00ff02ff);
document.documentElement.dispatchEvent(new CustomEvent('reset'));
document.documentElement.removeAttribute("onreset", i0x00ff02ff);