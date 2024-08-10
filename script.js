const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-[9%]");
}

//
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let initial_count = 0;
  const final_count = counter.dataset.count;
  const counting = setInterval(updateCounting, 1);
  function updateCounting() {
    initial_count = initial_count + 1;
    counter.innerText = initial_count;

    if (initial_count >= final_count) {
      clearInterval(counting);
    }
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});
