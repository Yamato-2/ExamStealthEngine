document.addEventListener('DOMContentLoaded', onInit0x00ff04ff, true);

function onInit0x00ff04ff() {
    console.log("Loaded: /Modules/ForceGoogleTranslation.js")
    document.documentElement.setAttribute("translate", "yes");
    document.querySelector("meta[name=google][content=notranslate]").remove();
}