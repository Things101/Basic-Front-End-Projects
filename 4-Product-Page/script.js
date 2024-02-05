const menu_btn = document.querySelector('.options');
const menu = document.querySelector(".menu");
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle("active");
  menu.classList.toggle("show")
})