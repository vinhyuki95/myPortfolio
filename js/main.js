//selector navbar
const navbar = document.querySelector(".navbar");
const arrItemNavbar = ["Home", "Education", "Project", "Contact Me"];
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
  "I build the best for the Website",
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
  "Hi! I'm Vinh I used to be a nurse before. When I moved to Singapore my degree was not accepted, so I started trying for a job. At that time I worked as a chef. After a period of experience and learning I realized that I was not suitable for that job because my health did not allow it. Subsequently I started to improve my English skills and research about the IT industry.",
  "This job required me to always have hard learning, a lot of logical thinking and constant innovation. It's a pity that my previous school environment didn't help me realize that sooner.",
  "I asked myself: “Can I do it at this age?”. And then luckily my husband  is also a software engineer. At that moment he started teaching me to study HTML and CSS to create a basic Website. Then i used Javascript to handle event.",
  "I hope I can learn more to create the best and most beautiful Website for users.",
];

let educationContent = document.createElement("div");
educationContent.classList.add("education__content");

//Tạo vòng lặp để chạy qua từng phần tử của arr
//Tạo một thẻ bọc sau đó gán các phần tử vào thẻ bọc đó
for (let i = 0; i < arrEducationRight.length; i = i + 1) {
  let educationItem = document.createElement("div");
  educationItem.classList.add("education__item");
  educationItem.innerHTML = arrEducationRight[i];

  educationContent.appendChild(educationItem);
  educationRight.appendChild(educationContent);
}

const bttHireMe = document.createElement("button");
bttHireMe.classList.add("btt__hireMe");
bttHireMe.textContent = "Hire Me";

educationContent.appendChild(bttHireMe);

// selector project__container
const projectContainer = document.querySelector(".project__container");
const titleContent = document.createElement("h1");
titleContent.classList.add("title__content");
projectContainer.appendChild(titleContent);
titleContent.textContent = "My Project";

// create h3 Element
const textDisplay = document.createElement("h3");
textDisplay.textContent = "Here are some websites I made in the past.";
projectContainer.appendChild(textDisplay);

// create project__content
const projectContent = document.createElement("div");
projectContent.classList.add("project__content");

projectContainer.appendChild(projectContent);

//create an array
const arrWebDemo = [
  ["../../img/project/demo-article.png", "Writy Article Website"],
  ["../../img/project/demo-foodDX.png", "FoodDX Website"],
  ["../../img/project/tradingWeb-Login.png", "Trade Website"],
];

for (let i = 0; i < arrWebDemo.length; i = i + 1) {
  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("menu-item-container");
  projectContent.appendChild(menuItemContainer);

  const itemDemoImg = document.createElement("img");
  itemDemoImg.classList.add("item__img");
  itemDemoImg.src = arrWebDemo[i][0];
  menuItemContainer.appendChild(itemDemoImg);
  console.log(menuItemContainer);

  const itemDemoName = document.createElement("div");
  itemDemoName.classList.add("item__name");
  itemDemoName.innerHTML = arrWebDemo[i][1];
  menuItemContainer.appendChild(itemDemoName);
}
