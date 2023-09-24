// Dropdown
const dropdownBtns = document.querySelectorAll(".dropdown__btn");
const dropdownContents = document.querySelectorAll(".dropdown__content");

dropdownBtns.forEach((item, index) => {
    item.addEventListener("click", function () {
        dropdownContents[index].classList.toggle("show");
    });
})

window.addEventListener("click", function (event) {
    dropdownContents.forEach((content) => {
        if (content.classList.contains("show") && !event.target.matches(".dropdown__btn")) {
            content.classList.remove("show");
        }
    });
});

let sidebar = document.querySelector(".sidebar");
let openIcon = document.querySelector(".basket");
let closeIcon = document.querySelector(".sidebar .fa-xmark");

openIcon.addEventListener("click", function () {
    sidebar.classList.remove("move-sidebar");
});

closeIcon.addEventListener("click", function () {
    sidebar.classList.add("move-sidebar");
});

let rightIcon = document.querySelector(".fa-chevron-right");
let leftIcon = document.querySelector(".fa-chevron-left");

function rightSlider() {
    let active = document.querySelector(".active");
    if (active.nextElementSibling != null) {
        active.classList.remove("active");
        active.nextElementSibling.classList.add("active");
    } else {
        active.classList.remove("active");
        active.parentNode.firstElementChild.classList.add("active");
    }
}

function leftSlider() {
    let active = document.querySelector(".active");
    if (active.previousElementSibling != null) {
        active.classList.remove("active");
        active.previousElementSibling.classList.add("active");
    } else {
        active.classList.remove("active");
        active.parentNode.lastElementChild.classList.add("active");
    }
}

rightIcon.addEventListener("click", rightSlider);
leftIcon.addEventListener("click", leftSlider);

setInterval(() => {
    rightSlider();
}, 5000);