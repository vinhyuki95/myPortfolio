//selector navbar
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
  "HI THERE! I'M",
  "VINH",
  "Developer - Frontend",
  "I build things for the Web",
];
for (let i = 0; i < arrInformation.length; i = i + 1) {
  let textElement = document.createElement("div");
  textElement.classList.add("text");

  textElement.innerHTML = arrInformation[i];
  inforContent.appendChild(textElement);
}

const bttGetInTouch = document.createElement("button");
bttGetInTouch.classList.add("btt_getInTouch");
bttGetInTouch.textContent = "Get in touch";
inforContent.appendChild(bttGetInTouch);

const bodyRight = document.querySelector(".body__right");
const backgroundImg = document.createElement("img");
backgroundImg.src = "../img/background-img.png";
bodyRight.appendChild(backgroundImg);

//selector education__left
const educationLeft = document.querySelector(".education__left");
const avataImg = document.createElement("img");
avataImg.src = "../img/avata.jpg";
educationLeft.appendChild(avataImg);

//selector education__right
const educationRight = document.querySelector(".education__right");
let arrEducationRight = [
  "Who I am",
  "About Me",
  "I’m Vinh, a professional front end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, technical writing, product design and SEO analytics.",
  "I develop websites with HTML, CSS and JavaScript.",
  "Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.",
];

let educationContent = document.createElement("div");
educationContent.classList.add("education__content");

//Tạo vòng lặp để chạy qua từng phần tử của arr
for (let i = 0; i < arrEducationRight.length; i = i + 1) {
  let educationItem = document.createElement("div");
  educationItem.classList.add("education__item");
  educationItem.innerHTML = arrEducationRight[i];
  console.log(educationItem);

  educationContent.appendChild(educationItem);
  educationRight.appendChild(educationContent);
}

const bttHireMe = document.createElement("button");
bttHireMe.classList.add("btt__hireMe");
bttHireMe.textContent = "Hire Me";

educationContent.appendChild(bttHireMe);
console.log(bttHireMe);
