document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");
    var scrollThreshold = 50;
    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollThreshold) {
            header.style.backgroundColor = "#00436a";
            header.style.padding = "5px";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.padding = "20px";
        }
    });
});