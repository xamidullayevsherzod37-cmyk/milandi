// Lang
function changeLang(element) {
  const btns = document.querySelectorAll(".lang-switcher__btn");
  btns.forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");
  console.log("Til tanlandi: " + element.innerText);
}

// ADD SHOP
document.addEventListener("click", function (e) {
  const addBtn = e.target.closest(".add__shop");
  if (addBtn) {
    e.preventDefault();
    e.stopPropagation();
    const cardAction = addBtn.closest(".card__action");
    const counterControl = cardAction.querySelector(".counter__control");
    addBtn.style.display = "none";
    counterControl.style.display = "flex";
    updateTotalCart();
    return;
  }
  const plusBtn = e.target.closest(".plus");
  if (plusBtn) {
    e.preventDefault();
    e.stopPropagation();

    const countSpan = plusBtn
      .closest(".counter__control")
      .querySelector(".count");
    countSpan.textContent = parseInt(countSpan.textContent) + 1;

    updateTotalCart();
    return;
  }
  const minusBtn = e.target.closest(".minus");
  if (minusBtn) {
    e.preventDefault();
    e.stopPropagation();

    const counterControl = minusBtn.closest(".counter__control");
    const countSpan = counterControl.querySelector(".count");
    const addShopBtn = minusBtn
      .closest(".card__action")
      .querySelector(".add__shop");
    let current = parseInt(countSpan.textContent);
    if (current > 1) {
      countSpan.textContent = current - 1;
    } else {
      counterControl.style.display = "none";
      addShopBtn.style.display = "block";
      countSpan.textContent = "1";
    }
    updateTotalCart();
    return;
  }
});

function updateTotalCart() {
  const badge = document.querySelector(".cart-badge");
  let total = 0;
  document.querySelectorAll(".counter__control").forEach((ctrl) => {
    if (ctrl.style.display === "flex") {
      total += parseInt(ctrl.querySelector(".count").textContent);
    }
  });

  if (badge) {
    badge.textContent = total;
    if (total > 0) {
      badge.classList.add("show");
    } else {
      badge.classList.remove("show");
    }
  }
}

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
// 1. Swiper (Karusel) - TO'G'RILANDI
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 800,
    });
  }
});

// 2. SAVAT FUNKSIYASI (Event Delegation bilan) - TO'G'RILANDI
document.addEventListener("click", function (e) {
  // Savatga qo'shish tugmasi
  const addBtn = e.target.closest(".add__shop");
  if (addBtn) {
    e.preventDefault();
    e.stopPropagation();
    const cardAction = addBtn.closest(".card__action");
    const counterControl = cardAction.querySelector(".counter__control");
    addBtn.style.display = "none";
    counterControl.style.display = "flex";
    updateTotalCart();
    return;
  }

  // Plus tugmasi
  const plusBtn = e.target.closest(".plus");
  if (plusBtn) {
    e.preventDefault();
    e.stopPropagation();
    const countSpan = plusBtn
      .closest(".counter__control")
      .querySelector(".count");
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
    updateTotalCart();
    return;
  }

  // Minus tugmasi
  const minusBtn = e.target.closest(".minus");
  if (minusBtn) {
    e.preventDefault();
    e.stopPropagation();
    const counterControl = minusBtn.closest(".counter__control");
    const countSpan = counterControl.querySelector(".count");
    const addShopBtn = minusBtn
      .closest(".card__action")
      .querySelector(".add__shop");

    let current = parseInt(countSpan.textContent);
    if (current > 1) {
      countSpan.textContent = current - 1;
    } else {
      counterControl.style.display = "none";
      addShopBtn.style.display = "block";
      countSpan.textContent = "1";
    }
    updateTotalCart();
    return;
  }
});

// Savat raqamini yangilash
function updateTotalCart() {
  const badge = document.querySelector(".cart-badge");
  let total = 0;

  document.querySelectorAll(".counter__control").forEach((ctrl) => {
    if (ctrl.style.display === "flex") {
      const num = parseInt(ctrl.querySelector(".count").textContent);
      total += num;
    }
  });

  if (badge) {
    badge.textContent = total;
    // Agarda mahsulot bo'lsa badgeni ko'rsatish (SCSS dagi show klassi)
    if (total > 0) {
      badge.classList.add("show");
    } else {
      badge.classList.remove("show");
    }
  }
}

// 3. BOSHQA FUNKSIYALAR (Til va Menyu)
function changeLang(element) {
  const btns = document.querySelectorAll(".lang-switcher__btn");
  btns.forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");
}

function myFunction(x) {
  x.classList.toggle("change");
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
  document.body.style.overflow = menu.classList.contains("active")
    ? "hidden"
    : "auto";
}

function makeActive(element) {
  const links = document.querySelectorAll(".functions__link");
  links.forEach((item) => item.classList.remove("active"));
  element.classList.add("active");
}
