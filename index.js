let lightMode = getMode();
let modeSwitcher = document.getElementById("modeSwitcherOne")
if (lightMode) {
    document.body.id = "lightBody"
}
else {
    document.body.id = "darkBody"
    modeSwitcher.id = "modeSwitcherTwo"
}

modeSwitcher.addEventListener("click", ()=> {
    lightMode = !lightMode;
    setMode(lightMode);
    setCookie(lightMode);
})

function getMode() {
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (i = 0; i < cookies.length; i++) {
        if (cookies[i].includes("lightMode")) {
            mode = cookies[i].split("=")[1];
            if (mode === "off") {
                return false;
            }
            else {
                return true;
            }
        }
    }
    return true;
}

function setMode(lightMode) {
    if (!lightMode) {
        document.body.id = "darkBody";
        modeSwitcher.id = "modeSwitcherTwo";
    }
    else {
        document.body.id = "lightBody";
        modeSwitcher.id = "modeSwitcherOne";
    }
}

function setCookie(lightMode) {
    if (!lightMode) {
        document.cookie = "lightMode=off; path=/";
    }
    else {
        document.cookie = "lightMode=on; path=/";
    }
}