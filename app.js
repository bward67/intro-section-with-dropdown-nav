const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
//this is the div the hamburger btn is in
const hamburgerIcon = document.querySelector(".hamburger-icon");
//console.log(mobileMenuBtn);
//console.log(hamburgerIcon);
const desktopTitles = document.querySelectorAll(".nav-desktop .selected-title");
//features & company
//console.log(desktopTitles);
const mobileTitle1 = document.querySelector(".nav-mobile .selected-title-1");
const mobileTitle2 = document.querySelector(".nav-mobile .selected-title-2");
//console.log(mobileTitle1);
//console.log(mobileTitle2);
const list = document.querySelector(".nav-mobile .list");
//console.log(list);
const list2 = document.querySelector(".nav-mobile .list-two");
//console.log(list2);
const navMobile = document.querySelector(".nav-mobile");
const body = document.querySelector("body");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navMobile.classList.toggle("active");
  body.classList.toggle("overlay");
  if (mobileMenuBtn.classList.contains("active")) {
    hamburgerIcon.src = "./images/icon-close-menu.svg";
  } else {
    hamburgerIcon.src = "./images/icon-menu.svg";
  }
});

desktopTitles.forEach((item) => {
  //so item is the features or company
  const list = item.querySelector(".list");
  //console.log(list);
  //so this gets the dropdown list of 3-4 items
  //the boxshadowed box
  item.addEventListener("click", () => {
    //so when you click on features or company
    item.classList.toggle("active");
    list.classList.toggle("active");
  });
});

mobileTitle2.addEventListener("click", () => {
  mobileTitle2.classList.toggle("line-height-sml");
  mobileTitle2.classList.toggle("active");
  list2.classList.toggle("active");
});

mobileTitle1.addEventListener("click", () => {
  mobileTitle1.classList.toggle("line-height-lg");
  mobileTitle1.classList.toggle("active");
  list.classList.toggle("active");
});
