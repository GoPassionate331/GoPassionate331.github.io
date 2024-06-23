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
/*const car = document.querySelector(".carousel");
console.log(car);
function hoverEnlarge() {
  gsap.to(car, {
    width: "90%",
  });
}
car.addEventListener("mouseover", hoverEnlarge);
car.removeEventListener("mouseout", hoverEnlarge);
*/

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
// general animation
// var sections = gsap.utils.toArray([".section-1", ".section-2", ".section-3"]);

// sections.forEach((section) => {
//   var t2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: section,
//       start: "top center",
//       end: "bottom center",
//       scrub: false,
//       markers: true,
//       toggleActions: "play none none reverse",
//     },
//   });

//   const cc = section.querySelectorAll([".core-commitee-img-container"]);
//   t2.from(cc, {
//     scale: 2,
//     opacity: 0,
//     ease: "power2.out",
//   });
//   const p = section.querySelectorAll(["h1", "h2", "h3", "p", "img", "button"]);
//   t2.from(p, {
//     opacity: 0,
//     scale: 2,
//     ease: "power2.out",
//   });
//   // gsap.from(section, {
//   //   opacity: 0,
//   //   scale: 2,
//   //   ease: "power2.in",
//   //   scrollTrigger: {
//   //     trigger: section,
//   //     start: "top center",
//   //     end: "center center",
//   //     toggleActions: "play none none reverse",
//   //   },
//   // });
// });
