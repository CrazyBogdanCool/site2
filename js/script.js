const burger = document.querySelector(".header__burger");
burger.addEventListener("click", function() {
    const menu = document.querySelector(".header__menu");
    burger.classList.toggle("_open");
    menu.classList.toggle("_open");
})