// var images = [
//      "my_pic_website_4.jpg",
// "my_pic_website_6.jpg",
// ];

// function randImg() {
//     var size = images.length
//     var x = Math.floor(size * Math.random())
//     document.getElementById('image').src = images[x];
// }

// randImg();

// const btn = document.querySelector(".btn-toggle");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     document.body.classList.toggle("light-theme");
//   } else {
//     document.body.classList.toggle("dark-theme");
//   }
// });

// myscript.js

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to toggle theme
function toggleTheme() {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    } else {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
}

// Check for theme preference on page load
let currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
    document.body.classList.toggle("light-theme");
} else if (prefersDarkScheme.matches) {
    document.body.classList.toggle("dark-theme");
}

// Add event listener to toggle button
btn.addEventListener("click", toggleTheme);

  