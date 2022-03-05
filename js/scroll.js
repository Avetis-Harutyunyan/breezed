"use strict";

window.addEventListener("scroll", () => {
    const navChange = document.querySelector(".header__section");
    navChange.classList.toggle("change-active", window.scrollY > 100);

    const toTopBtn = document.querySelector(".toTopBtn");
    toTopBtn.classList.toggle("topBtn-active", window.scrollY > 500);
});