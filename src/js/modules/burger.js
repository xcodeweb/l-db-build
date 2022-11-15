document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", toggleMenu);

  function toggleMenu(e) {
    const menu = document.querySelector(".nav__list");
    const wrapper = document.querySelector(".wrapper");
    const burger = document.querySelector(".nav__burger");

    if (
      e.target.closest(".nav__burger") &&
      !menu.classList.contains("nav__list--active")
    ) {
      menu.classList.add("nav__list--active");
      wrapper.style.height = "100%";
    } else if (!e.target.closest(".nav__list")) {
      menu.classList.remove("nav__list--active");
      wrapper.removeAttribute("style");
    }
  }
});
