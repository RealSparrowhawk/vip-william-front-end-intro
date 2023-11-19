let modeSwitcher = document.getElementById("modeSwitcherOne")
// let pageBody = document.getElementBy
let lightMode = true

modeSwitcher.addEventListener("click", ()=> {
    lightMode = !lightMode
    if (!lightMode) {
        document.body.style.background = "black";
        document.body.style.color = "white"
        modeSwitcher.id = "modeSwitcherTwo"
    }
    else {
        document.body.style.background = "white";
        document.body.style.color = "black"
        modeSwitcher.id = "modeSwitcherOne"
    }


})