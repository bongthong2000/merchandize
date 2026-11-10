// const menuLinks = document.querySelectorAll(".menus ul li a");
// const menus = document.querySelector(".menus");
// const menuLinks = document.querySelector(".ul-menu");
// const menuUl = document.querySelector(".link");

const menus = document.querySelector(".menus");
const menuLinks = document.querySelectorAll(".ul-menu .link");

menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// /-----------
const iconMenu = document.querySelector(".btn-menu");
const iconbit = document.querySelector(".btn-bit");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", () =>{
    menu.classList.add("active");
})
iconbit.addEventListener("click", () => {
    menu.classList.remove("active");
})


// -----------------
