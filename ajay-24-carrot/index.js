console.log("hlw");

let nav = document.getElementById("navigation-bar");
let sticky = nav.offsetTop;
window.onscroll = function() { sticker() };

function sticker() {
    if (window.scrollY >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}