var i0x00ff03ff = `(function(){
    console.log("Loaded: /Modules/NoLocalStorage.js");
    var originw = window.localStorage;
    window.cLocalStorage = originw;
    var objdefprop = Object.defineProperty;
    Object.defineProperty = function defineProperty(a,b,c) {
        if (b == "localStorage") {
            throw new ReferenceError("Access to write to this object has been locked!");
            
        } else {
            objdefprop(a,b,c);
        };
    };  
    localStorage.clear();
})()`;
document.documentElement.setAttribute("reset", i0x00ff03ff);
document.documentElement.dispatchEvent(new CustomEvent('reset'));
document.documentElement.removeAttribute("reset", i0x00ff03ff);