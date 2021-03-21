
    var pfnwd = window.Date;
    console.log("Loaded: /Modules/FakeDate.js")
    window.Date = function () {
        void("[native code]");
        return new pfnwd("Thu Jan 01 1970 21:37:00 GMT+0100 (czas środkowoeuropejski standardowy)")
    }