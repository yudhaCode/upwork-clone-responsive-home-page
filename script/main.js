const getElement = (selector) => document.querySelector(selector);
const getElements = (selector) => document.querySelectorAll(selector);

const btnSearchAside = getElement("#btn-search-aside");
const btnBackAside = getElement("#btn-back-aside");
const searchMenuAside = getElement("#search-menu-aside");
const navMenuBtn = getElement("#menu-button");
const navMenuAside = getElement("#nav-menu-aside");
const dropdownNavbar = getElements(".dropdown-navbar");
const dropdownDownChevron = getElement("#nav-chevron");
const hamburger = getElement("#hamburger");
const mainSection = getElement("#mainSection");
const signUpLink = document.querySelector("#signUpLink");
const headerInner = document.querySelector("#headerInner");
const footer = getElement("#footer");

console.log(dropdownNavbar);

const toggleClass = (element, className) => element.classList.toggle(className);

const toggleMobileMenu = () => {
  toggleClass(searchMenuAside, "translate-x-full");
};

const toggleSearchMenuLeft = () => {
  toggleClass(navMenuAside, "-translate-x-full");
  toggleClass(hamburger, "-active");
  toggleClass(signUpLink, "hidden");
  toggleClass(mainSection, "hidden");
  toggleClass(footer, "hidden");
};

const toggleDropdown = () => {
  toggleClass(dropdownDownChevron, "rotate-180");
};

let previousClicked;

const changeColor = (clickedElement) => {
  if (previousClicked) {
    previousClicked.classList.remove(
      "border-b-2",
      "border-green-500",
      "text-green-500"
    );
  }

  clickedElement.classList.add(
    "border-b-2",
    "border-green-500",
    "text-green-500"
  );
  previousClicked = clickedElement;
};

const talentItem = getElement("#talentItem");
const projectsItem = getElement("#projectsItem");
const jobsItem = getElement("#jobsItem");

talentItem.addEventListener("click", () => changeColor(talentItem));
projectsItem.addEventListener("click", () => changeColor(projectsItem));
jobsItem.addEventListener("click", () => changeColor(jobsItem));

btnSearchAside.addEventListener("click", toggleMobileMenu);
btnBackAside.addEventListener("click", toggleMobileMenu);
hamburger.addEventListener("click", toggleSearchMenuLeft);
// dropdownNavbar.addEventListener("click", toggleDropdown);
dropdownNavbar.forEach((button) => {
  button.addEventListener("click", function () {
    const dropdownContent = button.nextElementSibling;
    const chevron = button.querySelector("img");

    // Toggle class active untuk dropdown content yang terkait dengan button yang di-klik
    dropdownContent.classList.toggle("hidden");
    chevron.classList.toggle("rotate-180");

    // Tutup dropdown content yang lain
    dropdownNavbar.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.nextElementSibling.classList.add("hidden");
      }
    });
  });
});

window.addEventListener("scroll", function () {
  // Check if the window width is less than 768 pixels (mobile and smaller tablets)
  if (window.innerWidth < 768) {
    if (window.scrollY > 60) {
      signUpLink.classList.add("button-mode");
      headerInner.classList.remove("py-4");
      headerInner.classList.add("py-2");
    } else {
      signUpLink.classList.remove("button-mode");
      headerInner.classList.remove("py-2");
      headerInner.classList.add("py-4");
    }
  }
});
