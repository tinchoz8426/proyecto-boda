const toggle = document.querySelector(".toggle");
const listNavbar = document.getElementById("list-navbar");

toggle.addEventListener('click', () => {
    toggle.classList.toggle("rotate");
    listNavbar.classList.toggle("active");
})