const activeBurger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__container");
  burger.addEventListener("click", () => {
    const activeStatus = nav.classList.toggle("nav_active");

    const links = document.querySelectorAll(".nav_item");
    links.forEach((link, index) => {
      link.style.animation = activeStatus
        ? `showNavigationItem 1.5s forwards ${index / 5 + 0.5}s`
        : "";
    });
  });
};

const app = () => {
  activeBurger();
};

app();
