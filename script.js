document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const body = document.querySelector("body");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      body.classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-x");
      this.classList.toggle("bi-list");
    });
  }

  document.querySelectorAll("#navmenu ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");
        mobileToggle.classList.remove("bi-x");
        mobileToggle.classList.add("bi-list");
      }
    });
  });

  // ===== Counter Animation =====
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const step = Math.ceil(target / 100);

    const update = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = current + step;
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

const swiper = new Swiper(".feedback-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 600,
});