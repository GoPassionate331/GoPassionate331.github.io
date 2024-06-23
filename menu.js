//sidebar for smaller displays
const hamburgMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector("#close");
const Menu = document.querySelector(".extended-header");
function menuToggle() {
  if (!Menu.classList.contains("display-toggle")) {
    gsap.fromTo(
      ".extended-header",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.25 }
    );
  }
  hamburgMenu.classList.toggle("display-toggle");
  Menu.classList.toggle("display-toggle");
}
hamburgMenu.addEventListener("click", menuToggle);
closeMenu.addEventListener("click", menuToggle);

//for sidebar
const hamSide = document.querySelector(".hamburg-side");
const side = document.querySelector(".sidebar");
hamSide.addEventListener("click", () => {
  side.classList.toggle("active");
});
