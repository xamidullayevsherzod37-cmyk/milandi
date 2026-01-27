// Lang
function changeLang(element) {
  const btns = document.querySelectorAll(".lang-switcher__btn");
  btns.forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");
  console.log("Til tanlandi: " + element.innerText);
}

// ADD SHOP
let count = 0;
const badge = document.querySelector(".cart-badge");
const shopButtons = document.querySelectorAll(".add__shop");

shopButtons.forEach((button) => {
  let isAdded = false;

  button.addEventListener("click", () => {
    if (!isAdded) {
      count++;
      isAdded = true;
      button.classList.add("active");
      button.innerText = "УБРАТЬ";
    } else {
      count--;
      isAdded = false;
      button.classList.remove("active");
      button.innerText = "Добавить в корзину";
    }
    badge.innerText = count;

    if (count > 0) {
      badge.classList.add("show");
    } else {
      badge.classList.remove("show");
    }
  });
});

// Functions
function makeActive(element) {
  const links = document.querySelectorAll(".functions__link");
  links.forEach((item) => item.classList.remove("active"));
  element.classList.add("active");
}

function myFunction(x) {
  // Hamburgerni X ga aylantiradi
  x.classList.toggle("change");

  // Menuni chiqaradi
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");

  // Menyu ochilganda orqa fon qimirlamasligi uchun
  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
function makeActive(element) {
  // 1. Hamma menyu linklarini topamiz
  const links = document.querySelectorAll(".functions__link");

  // 2. Hammasidan 'active' klassini olib tashlaymiz
  links.forEach((item) => item.classList.remove("active"));

  // 3. Faqat biz bosganimizga 'active' klassini qo'shamiz
  element.classList.add("active");
}

// CAROUSEL
var swiper = new (".mySwiper",
{
  loop: true, // Cheksiz aylanish
  grabCursor: true, // Mishka bilan surishni bildirish
  autoplay: {
    delay: 5000, // 5 soniya
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800, // O'tish tezligi (millisekundda)
})();
