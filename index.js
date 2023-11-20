let lightMode = getMode(); // Used to tell if page is in light or dark mode
// Grabbing mode switcher button so we can change its style as well
let modeSwitcher = document.getElementById("modeSwitcherOne")
// Initially sets document to either light or dark mode based on settings from cookies
if (lightMode) {
    document.body.id = "lightBody"
}
else {
    document.body.id = "darkBody"
    modeSwitcher.id = "modeSwitcherTwo"
}

// Adds action listening to button, updates the "mode" variable and the cookies to reflect new page state
modeSwitcher.addEventListener("click", ()=> {
    lightMode = !lightMode;
    setMode(lightMode);
    setCookie(lightMode);
})

/*
Function that checks the page's cookies for the "lightMode" keyword, which will be either on or off. Returns false
if off, true if on (and true if no cookies have been set, as page defaults to light mode)
 */
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

// Function that changes styles of body and the dark mode button once page state has been changed.
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

// Function that sets the appropriate lightMode on or off cookie.
function setCookie(lightMode) {
    if (!lightMode) {
        document.cookie = "lightMode=off; path=/";
    }
    else {
        document.cookie = "lightMode=on; path=/";
    }
}