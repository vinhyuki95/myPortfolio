const navbar = document.querySelector(".navbar");
const arrItemNavbar = [
  "Home",
  "Education",
  "Experience",
  "Project",
  "Contact Me",
];
for (let i = 0; i < arrItemNavbar.length; i = i + 1) {
  let navbarItemElement = document.createElement("li");
  navbarItemElement.classList.add("navbar__item");

  let navbarItemLink = document.createElement("div");
  navbarItemLink.classList.add("navbar__item-link");
  navbarItemLink.innerHTML = arrItemNavbar[i];

  navbarItemElement.appendChild(navbarItemLink);
  navbar.appendChild(navbarItemElement);
}

const bodyLeft = document.querySelector(".body__left");
let inforContent = document.createElement("div");
inforContent.classList.add("information__content");
bodyLeft.appendChild(inforContent);

const arrInformation = [
  "Hi",
  "I'M  VINH,",
  "Web Deverloper",
  "Deverloper - Fontend",
];
for (let i = 0; i < arrInformation.length; i = i + 1) {
  let textElement = document.createElement("div");
  textElement.classList.add("text");

  textElement.innerHTML = arrInformation[i];
  inforContent.appendChild(textElement);
}
