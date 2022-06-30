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

  let navbarItemLink = document.createElement("a");
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
  "HI THERE!  I'M",
  "Vinh",
  "Deverloper - Fontend",
  "I build things for the Web",
];
for (let i = 0; i < arrInformation.length; i = i + 1) {
  let textElement = document.createElement("div");
  textElement.classList.add("text");

  textElement.innerHTML = arrInformation[i];
  inforContent.appendChild(textElement);
}

const btt_HireMe = document.createElement("button");
btt_HireMe.classList.add("btt_hireMe");
btt_HireMe.textContent = "Get in touch";
inforContent.appendChild(btt_HireMe);

const bodyRight = document.querySelector(".body__right");
const backgroundImg = document.createElement("img");
backgroundImg.src = "../../background-img.png";
console.log(backgroundImg);
// bodyRight.appendChild(backgroundImg);
