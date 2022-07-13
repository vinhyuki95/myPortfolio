//selector navbar
const navbar = document.querySelector(".navbar");
const arrItemNavbar = [
  "Home",
  "Education",
  "Project",
  "Portfolio",
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
  "HELLO, MY NAME IS",
  "",
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
bttGetInTouch.textContent = "VIEW PORTFOLIO";
inforContent.appendChild(bttGetInTouch);

const bodyRight = document.querySelector(".body__right");
const backgroundImg = document.createElement("img");
backgroundImg.src = "../img/bg-right.jpg";
bodyRight.appendChild(backgroundImg);

//selector education__left
const educationLeft = document.querySelector(".education__left");
const avataImg = document.createElement("img");
avataImg.src = "../img/avata.jpg";
educationLeft.appendChild(avataImg);

//selector education__right
const educationRight = document.querySelector(".education__right");
let arrEducationRight = [
  "Who I am ?",
  "About Me",
  "Hi! I'm Vinh I used to be a nurse before. When I moved to Singapore my degree was not accepted, I started trying for some job. At that time I worked as a chef. After a period of experience and learning I realized that I was not suitable for this job because my health did not allow it. Subsequently I started to improve my English skills and research about the IT industry.",
  "The IT job required me always have to hard learning, logical thinking and constant innovation. It's a pity that my previous school environment didn't help me realize that sooner.",
  "I asked myself: “Can I do it at this age?” But I want to give myself a chance to challenge myself. I started studying HTML and CSS to create a basic Website. Then i used Javascript to handle event.",
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

// selector project__containerWrap
const projectContainer = document.querySelector(".project__container");
const titleContent = document.createElement("h1");
titleContent.classList.add("title__content");
projectContainer.appendChild(titleContent);
titleContent.textContent = "My Project";

// create h3 Element
const textDisplay = document.createElement("h3");
textDisplay.textContent = "Here are some of my Websites";
projectContainer.appendChild(textDisplay);

// create project__content
const projectContent = document.createElement("div");
projectContent.classList.add("project__content");

projectContainer.appendChild(projectContent);

//create an array(cách 1 lấy từng vị trí của index)
// const arrWebDemo = [
//   [["../../img/project/demo-article.png"], "Writy Article Website"],
//   [
// [
//   "../../img/project/demo1-foodDX.png",
//   "../../img/project/demo2-foodDX.png",
//   "../../img/project/demo3-foodDX.png",
//   "../../img/project/demo4-foodDX.png",
//   "../../img/project/demo5-foodDX.png",
//   "../../img/project/demo6-foodDX.png",
//   "../../img/project/demo7-foodDX.png",
// ],
//     "FoodDX Website",
//   ],
//   [
//     [
//       "../../img/project/tradingWeb-Login.png",
//       "../../img/project/market-picture1.png",
//       "../../img/project/market-picture2.png",
//     ],
//     "Trade Website",
//   ],
// ];

// for (let i = 0; i < arrWebDemo.length; i = i + 1) {
//   const menuItem = document.createElement("div");
//   menuItem.classList.add("menu-item-containerWrap");
//   projectContent.appendChild(menuItemContainer);

//   const itemDemoImg = document.createElement("img");
//   itemDemoImg.classList.add("item__img");
//   itemDemoImg.src = arrWebDemo[i][0];
//   menuItem.appendChild(itemDemoImg);

//   if (arrWebDemo[i][0][2] !== undefined) {
//     const marketDemo = document.querySelector(
//       ".menu-item-containerWrap:last-child .item__img"
//     );
//     marketDemo.src = arrWebDemo[i][0][0];
//     let currentIndex = -1;
//     setInterval(function () {
//       currentIndex += 1;
//       currentIndex %= arrWebDemo.length;

//       document.querySelector(
//         `.menu-item-containerWrap:nth-child(${i + 1}) .item__img`
//       ).src = arrWebDemo[i][0][currentIndex];
//     }, 2000);
//   }

//   const itemDemoName = document.createElement("div");
//   itemDemoName.classList.add("item__name");
//   itemDemoName.innerHTML = arrWebDemo[i][1];
//   menuItem.appendChild(itemDemoName);
// }

//tạo object, mỗi một object là một project(cách2 dùng object)
const projects = [
  {
    images: ["../../img/project/demo-article.png"],
    titleImg: "Writy Article Website",
  },
  {
    images: [
      "../../img/project/demo1-foodDX.png",
      "../../img/project/demo2-foodDX.png",
      "../../img/project/demo3-foodDX.png",
      "../../img/project/demo4-foodDX.png",
      "../../img/project/demo5-foodDX.png",
      "../../img/project/demo6-foodDX.png",
      "../../img/project/demo7-foodDX.png",
    ],
    titleImg: "FoodDX Website",
  },
  {
    images: [
      "../../img/project/tradingWeb-Login.png",
      "../../img/project/market-picture1.png",
      "../../img/project/market-picture2.png",
    ],
    titleImg: "Trade Website",
  },
];
// console.log(projects);
for (let i = 0; i < projects.length; i = i + 1) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item-container");
  // projectContent.appendChild(menuItem);

  const project = projects[i];
  let itemImg = document.createElement("img");
  itemImg.classList.add("item__img");
  menuItem.appendChild(itemImg);
  itemImg.src = project.images[0];

  let currentIndex = 0;
  setInterval(function () {
    currentIndex += 1;
    currentIndex %= project.images.length;
    itemImg.src = project.images[currentIndex];
    console.log(itemImg);
  }, 2000);

  let itemName = document.createElement("div");
  itemName.classList.add("item__name");
  menuItem.appendChild(itemName);
  itemName.innerHTML = project.titleImg;

  projectContent.appendChild(menuItem);
}

const footerElement = document.querySelector(".footer");
