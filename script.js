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
// ------
const media  = document.querySelector(".media");
const searching  = document.querySelector(".searching");
const openSearch = document.querySelector(".open-search");
const bitSearch  = document.querySelector(".bit-search");
let isAnimating = false;

openSearch.addEventListener("click", () =>{
  if (isAnimating) return;

    isAnimating = true;

    media.classList.add ("hide");
    searching.classList.add("active");
    bitSearch.classList.remove("hide");
    openSearch.classList.add("hide");
})
bitSearch.addEventListener("click", () =>{

  if (isAnimating) return;

    isAnimating = true;

    searching.classList.remove("active");
    bitSearch.classList.add("hide");
    openSearch.classList.remove("hide");
    setTimeout(() => {
        media.classList.remove("hide");
    }, 1000);
})


searching.addEventListener("transitionend", (event) => {

    if (event.propertyName !== "width") return;

    if (!searching.classList.contains("active")) {
        media.style.display = "flex";
    }

    isAnimating = false;

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
