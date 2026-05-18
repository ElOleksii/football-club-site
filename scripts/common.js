const burger = document.getElementById("burger");
const menu = document.getElementById("nav-menu");
burger.addEventListener("click", () => {
  menu.classList.toggle("open");

  document.body.classList.toggle("no-scroll");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");

    document.body.classList.remove("no-scroll");
  });
});
