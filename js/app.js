// nav bar active
window.onscroll = () => {
  let nav = document.getElementById("topBar");
  let logo = document.querySelector(".logo");
  let scroll = scrollY;
  if (scroll >= 60) {
    nav.classList.add("navActive");
    logo.classList.add("activeLogo");
  } else {
    nav.classList.remove("navActive");
    logo.classList.remove("activeLogo");
  }
};

let texts = ["Web Developer", "Web Designer"];
let count = 0;
let index = 0;
let currentItem = "";
let letter = "";
(function type() {
  if (count >= texts.length) {
    count = 0;
  }
  currentItem = texts[count];
  letter = currentItem.slice(0, ++index);
  document.getElementById("typing").textContent = letter;
  if (letter.length === currentItem.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();
