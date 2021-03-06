//headerWrap

const navbar = document.querySelector(".navbar");
const arrItemNavbar = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Project",
    id: "project",
  },

  {
    name: "Contact Me",
    id: "contact",
  },
];

for (let i = 0; i < arrItemNavbar.length; i = i + 1) {
  let navbarItemElement = document.createElement("li");
  navbarItemElement.classList.add("navbar__item");

  let navbarItemLink = document.createElement("a");
  navbarItemLink.classList.add("navbar__item-link");

  const arrItem = arrItemNavbar[i];
  navbarItemLink.innerHTML = arrItem.name;
  navbarItemLink.href = `#tab-${arrItem.id}`;
  navbarItemElement.appendChild(navbarItemLink);
  navbar.appendChild(navbarItemElement);
}
//event click menu-icon show sidebar (breakpoint: 768px)
const menuIcon = document.querySelector(".menu-icon");
const headerWrap = document.querySelector(".header__wrap");

const sideBarContainer = document.createElement("div");
sideBarContainer.classList.add("sidebar__container");

headerWrap.appendChild(sideBarContainer);

menuIcon.onclick = function () {
  // sideBarContainer.classList.toggle("active");
  // console.log(sideBarContainer);
  if (sideBarContainer.classList.contains("active")) {
    sideBarContainer.classList.remove("active");
  } else {
    sideBarContainer.classList.add("active");
  }
};
// click vao navbar se remove class active
const navbarItem = document.querySelectorAll(".navbar__item");
// navbarItem.onclick = function () {
//   sideBarContainer.classList.remove("active");
// };

// dùng lại arrItemNavbar ở trên để show navItem trong sidebar khi active
for (let i = 0; i < arrItemNavbar.length; i = i + 1) {
  let navbarItem = document.createElement("a");
  navbarItem.classList.add("navbar__item");

  const arrItem = arrItemNavbar[i];
  navbarItem.innerHTML = arrItem.name;
  navbarItem.href = `#tab-${arrItem.id}`;
  sideBarContainer.appendChild(navbarItem);
}

//end-event onclick menu-icon

//selector body__left
const bodyLeft = document.querySelector(".body__left");
let inforContent = document.createElement("div");
inforContent.classList.add("information__content");
bodyLeft.appendChild(inforContent);

const arrInformation = [
  "HELLO, MY NAME IS",
  "",
  "VINH",
  "Frontend - Developer",
  "I build the best for the Website",
];
for (let i = 0; i < arrInformation.length; i = i + 1) {
  let textElement = document.createElement("div");
  textElement.classList.add("text");

  textElement.innerHTML = arrInformation[i];
  inforContent.appendChild(textElement);
}

//add link dẫn tới trang portfolio
const bttGetInTouchBox = document.createElement("a");
bttGetInTouchBox.href = "https://vinhyuki95.github.io/myPortfolio/";
const bttGetInTouch = document.createElement("button");
bttGetInTouchBox.appendChild(bttGetInTouch);
inforContent.appendChild(bttGetInTouchBox);
bttGetInTouch.classList.add("btt_getInTouch");
bttGetInTouch.textContent = "VIEW PORTFOLIO";

const bodyRight = document.querySelector(".body__right");
const backgroundImg = document.createElement("img");
backgroundImg.src = "img/bg-right.jpg";
bodyRight.appendChild(backgroundImg);

//selector about__left
const aboutLeft = document.querySelector(".about__left");
const avataImg = document.createElement("img");
avataImg.src = "img/avata.jpg";
aboutLeft.appendChild(avataImg);

//selector about__right
const aboutRight = document.querySelector(".about__right");
let arraboutRight = [
  "Who I am ?",
  "About Me",
  "Hi! I'm Vinh I used to be a nurse before. When I moved to Singapore my degree was not accepted, I started trying for some job. At that time I worked as a chef. After a period of experience and learning I realized that I was not suitable for this job because my health did not allow it. Subsequently I started to improve my English skills and research about the IT industry.",
  "The IT job required me always have to hard learning, logical thinking and constant innovation. It's a pity that my previous school environment didn't help me realize that sooner.",
  "I asked myself: “Can I do it at this age?” But I want to give myself a chance to challenge myself. I started studying HTML and CSS to create a basic Website. Then i used Javascript to handle event.",
  "I hope I can learn more to create the best and most beautiful Website for users.",
];

let aboutContent = document.createElement("div");
aboutContent.classList.add("about__content");

//Tạo vòng lặp để chạy qua từng phần tử của arr
//Tạo một thẻ bọc sau đó gán các phần tử vào thẻ bọc đó
for (let i = 0; i < arraboutRight.length; i = i + 1) {
  let aboutItem = document.createElement("div");
  aboutItem.classList.add("about__item");
  aboutItem.innerHTML = arraboutRight[i];

  aboutContent.appendChild(aboutItem);
  aboutRight.appendChild(aboutContent);
}

const bttContactBox = document.createElement("a");
bttContactBox.href = "#tab-contact";
const bttContact = document.createElement("button");
bttContactBox.appendChild(bttContact);
bttContact.classList.add("btt__contact");
bttContact.textContent = "Contact Me";

aboutContent.appendChild(bttContactBox);

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
//tạo object, mỗi một object là một project(cách2 dùng object)
const projects = [
  {
    images: ["img/project/demo-article.png"],
    titleImg: "Writy Article Website",
    href: "https://vinhyuki95.github.io/update.writy.html/",
  },
  {
    images: [
      "img/project/demo1-foodDX.png",
      "img/project/demo2-foodDX.png",
      "img/project/demo3-foodDX.png",
      "img/project/demo4-foodDX.png",
      "img/project/demo5-foodDX.png",
      "img/project/demo6-foodDX.png",
      "img/project/demo7-foodDX.png",
    ],
    titleImg: "FoodDX Website",
    href: "https://vinhyuki95.github.io/FoodDX/",
  },
  {
    images: [
      "img/project/tradingWeb-Login.png",
      "img/project/market-picture1.png",
      "img/project/market-picture2.png",
    ],
    titleImg: "Trade Website",
    href: "https://vinhyuki95.github.io/tradingWeb/",
  },
];

for (let i = 0; i < projects.length; i = i + 1) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item-container");
  let itemImgBox = document.createElement("a");
  menuItem.appendChild(itemImgBox);
  // projectContent.appendChild(menuItem);

  const project = projects[i];
  let itemImg = document.createElement("img");
  itemImgBox.appendChild(itemImg);
  itemImg.classList.add("item__img");
  itemImgBox.href = project.href;
  itemImg.src = project.images[0];

  let currentIndex = 0;
  setInterval(function () {
    currentIndex += 1;
    currentIndex %= project.images.length;
    itemImg.src = project.images[currentIndex];
  }, 2000);

  let itemName = document.createElement("a");
  itemName.classList.add("item__name");
  menuItem.appendChild(itemName);
  itemName.innerHTML = project.titleImg;
  itemName.href = project.href;
  projectContent.appendChild(menuItem);
}

// selector contact__container
const contactContainerElement = document.querySelector(".contact__container");

const contactContent = document.createElement("div");
contactContent.classList.add("contact__content");
contactContent.id = "tab-contact";
contactContainerElement.appendChild(contactContent);

const inner = document.createElement("div");
inner.classList.add("inner");
contactContent.appendChild(inner);

const arrtitles = [
  {
    titleText: "Contact Me",
  },

  {
    titleText: "Get in Touch",
  },
];

for (let i = 0; i < arrtitles.length; i = i + 1) {
  const contact = arrtitles[i];
  const titleItem = document.createElement("div");
  titleItem.classList.add("title__item");
  titleItem.innerHTML = contact.titleText;
  inner.appendChild(titleItem);
}

//create flex box chứa nội dụng contact
const flexBox = document.createElement("div");
flexBox.classList.add("flexBox");
contactContent.appendChild(flexBox);

//appendChild flexLeft into flexBox
const flexLeft = document.createElement("div");
flexLeft.classList.add("flexLeft");
flexBox.appendChild(flexLeft);

const flexRight = document.createElement("div");
flexRight.classList.add("flexRight");
flexBox.appendChild(flexRight);

//create arr for flexLeft
const arrflexLeft = [
  ["img/icon-contact/email-icon.svg", "Vinhyuki1995@gmail.com"],
  ["img/icon-contact/location-icon.svg", "#13-22 Lorong2 Toa Payoh Center"],
  ["img/icon-contact/phone-icon.svg", "+ 65-9893-1879"],
];
for (let i = 0; i < arrflexLeft.length; i = i + 1) {
  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("flexLeft__menu");
  flexLeft.appendChild(menuItemContainer);

  const imgItem = document.createElement("img");
  imgItem.classList.add("img__item");
  imgItem.src = arrflexLeft[i][0];
  menuItemContainer.appendChild(imgItem);

  const informationItem = document.createElement("a");
  informationItem.classList.add("information__item");
  informationItem.href = "#";
  informationItem.innerHTML = arrflexLeft[i][1];
  menuItemContainer.appendChild(informationItem);
}

//create arr for flexRight
const arrFlexRight = ["", "", "", ""];
for (let i = 0; i < arrFlexRight.length; i = i + 1) {
  const bttMenu = document.createElement("input");
  // bttMenu.classList.add("btt__item");
  bttMenu.innerHTML = arrFlexRight[i];
  // bttMenu.placeholder = "name";
  flexRight.appendChild(bttMenu);
}

const bttName = document.querySelector("input:nth-child(1)");
bttName.classList.add("btt__name");
bttName.placeholder = "Full Name";

const bttEmail = document.querySelector("input:nth-child(2)");
bttEmail.classList.add("btt__mail");
bttEmail.placeholder = "Email";

const bttSubject = document.querySelector("input:nth-child(3)");
bttSubject.classList.add("btt__subject");
bttSubject.placeholder = "Subject";

const bttMessage = document.querySelector("input:nth-child(4)");
bttMessage.classList.add("btt__message");
bttMessage.placeholder = "Enter your message";
// create a button
const bttSendMessage = document.createElement("button");
bttSendMessage.classList.add("btt__sentMessage");
bttSendMessage.textContent = "Send message";
flexRight.appendChild(bttSendMessage);

//display footer content
const rootElement = document.querySelector("#root");
const footer = document.createElement("div");
footer.classList.add("footer");
rootElement.appendChild(footer);

const brandLogo = document.createElement("div");
brandLogo.classList.add("brand__logo");
footer.appendChild(brandLogo);

const arrBrandLogos = [
  {
    logo: "img/footer/facebook-brand.svg",
    href: "https://www.facebook.com/profile.php?id=100004369698133",
  },
  {
    logo: "img/footer/github-brand.svg",
    href: "https://github.com/",
  },
  {
    logo: "img/footer/linkedin-brand.svg",
    href: "https://www.linkedin.com/in/vinhyuki-le-922001233/",
  },
];
for (let i = 0; i < arrBrandLogos.length; i = i + 1) {
  const arrBrandLogo = arrBrandLogos[i];

  const logoBox = document.createElement("a");
  logoBox.classList.add("logo__box");
  logoBox.href = arrBrandLogo.href;

  const logoImg = document.createElement("img");
  logoImg.classList.add("logo__img");

  logoImg.src = arrBrandLogo.logo;

  logoBox.appendChild(logoImg);
  brandLogo.appendChild(logoBox);
}

const textPortfolio = document.createElement("a");
textPortfolio.classList.add("text__port");
textPortfolio.textContent = "@ 2022. Portfolio. All right reserved.";
footer.appendChild(textPortfolio);
