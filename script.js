// Mobile nav toggle — shared by all pages.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".site-nav__toggle");
  var list = document.querySelector(".site-nav__list");

  if (!toggle || !list) return;

  toggle.addEventListener("click", function () {
    var isOpen = list.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu if someone taps a link or resizes back to desktop.
  list.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 640) {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
