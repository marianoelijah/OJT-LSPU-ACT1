const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header.nav");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
});