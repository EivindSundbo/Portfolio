const boxes = document.querySelectorAll(".box");
const foodForThought = document.querySelector(".foodforthought");
const foodForThoughtContent = document.querySelector(".foodforthoughtcontent");
const csm = document.querySelector(".csm");
const csmContent = document.querySelector(".csmcontent");
const rainydays = document.querySelector(".rainydays");
const rainydaysContent = document.querySelector(".rainydayscontent");
const about = document.querySelector(".about");
const aboutContent = document.querySelector(".aboutcontent");


boxes.forEach((rect) => rect.addEventListener("click", showInfo));

function showInfo() {
  this.classList.toggle("show");

  foodForThought.classList.toggle("hidden")
  foodForThoughtContent.classList.toggle("hidden");

  csm.classList.toggle("hidden")
  csmContent.classList.toggle("hidden");

  rainydays.classList.toggle("hidden")
  rainydaysContent.classList.toggle("hidden");

  about.classList.toggle("hidden")
  aboutContent.classList.toggle("hidden");
}


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);