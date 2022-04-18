const primaryNav = document.querySelector('.menu-container');
const navToggle = document.querySelector(".mobile-nav-toggle");
const toggle = document.getElementById("toggle");

navToggle.addEventListener('click', () => {
    const visiblity = primaryNav.getAttribute("data-visible");
    console.log(visiblity);
    if (visiblity === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        toggle.classList.remove("fa-bars");
        setTimeout(() => {
            toggle.classList.add("fa-xmark");
        }, 340);


    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

        toggle.classList.remove("fa-xmark");
        setTimeout(() => {

            toggle.classList.add("fa-bars");
        }, 340);


    }
});