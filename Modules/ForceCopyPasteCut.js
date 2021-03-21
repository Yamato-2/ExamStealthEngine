document.addEventListener('DOMContentLoaded', onInit0x00ff01ff, true);

var forceBrowserDefault0x00ff01ff = function (e) {
    e.stopImmediatePropagation();
    return true;
}

document.addEventListener("copy", forceBrowserDefault0x00ff01ff, true);
document.addEventListener("cut", forceBrowserDefault0x00ff01ff, true);
document.addEventListener("paste", forceBrowserDefault0x00ff01ff, true);

var stylesheet0x00ff01ff = `
    * {
        user-select: text !important;
    }
`;

function onInit0x00ff01ff() {
    console.log("Loaded: /Modules/ForceCopyPasteCut.js");
    window.document.styleSheets[0].insertRule(stylesheet0x00ff01ff, 0);
}