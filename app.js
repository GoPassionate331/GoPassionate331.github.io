//Carousel Part

const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    if (offset == -1) {
      gsap.from(slides.children[newIndex], {
        xPercent: 100,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.from(slides.children[newIndex], {
        xPercent: -100,
        duration: 0.5,
        ease: "power3.out",
      });
    }
    slides.children[newIndex].dataset.active = true;
    const sl = slides.children[newIndex];
    delete activeSlide.dataset.active;
  });
});
var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".carousel",
    start: "top center",
    end: "center center",
    scrub: false,
    markers: false,
    toggleActions: "play none none reverse",
  },
});
t1.from(".carousel", {
  width: "50%",
  ease: "power2.out",
});

//Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
