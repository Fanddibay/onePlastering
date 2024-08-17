const menuBtn = document.getElementById("menu-btn");
const menuContainer = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Ambil elemen navbar
const navbar = document.querySelector("nav");

// Fungsi untuk menambahkan atau menghapus class shadow saat di-scroll
function handleScroll() {
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
}

// Tambahkan event listener untuk scroll
window.addEventListener("scroll", handleScroll);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoScroll: true,

  // Autoplay parameters
  autoplay: {
    delay: 5000, // Set delay to 5 seconds
    disableOnInteraction: false, // Autoplay will not be disabled after interactions
  },

  // Enable keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: true, // Hanya aktif jika swiper berada di viewport
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  keypress: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperNew = new Swiper(".swiper-new", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Enable keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: true, // Hanya aktif jika swiper berada di viewport
  },

  pagination: {
    el: ".swiper-pagination-new",
    clickable: true, // Ensure bullets are clickable
  },

  navigation: {
    nextEl: ".swiper-button-prev-new",
    prevEl: ".swiper-button-prev-new",
  },

  scrollbar: {
    el: ".swiper-scrollbar-new",
  },
});

const mySwiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
  //   autoplay: {
  //     delay: 5000,
  //   },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },

  // Enable keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: true, // Hanya aktif jika swiper berada di viewport
  },

  pagination: {
    el: ".swiper-pagination1",
    clickable: true, // Ensure bullets are clickable
  },

  //   navigation: {
  //     nextEl: ".swiper-button-prev1",
  //     prevEl: ".swiper-button-prev1",
  //   },

  scrollbar: {
    el: ".swiper-scrollbar1",
  },
});

const swiperContainer2 = document.querySelector(".swiper");

swiperContainer2.addEventListener("wheel", function (e) {
  // CHecking swiper with shift + scroll
  if (e.shiftKey) {
    //  scroll default
    e.preventDefault();

    // Jika scroll ke atas, slide ke prev
    if (e.deltaY < 0) {
      swiper.slidePrev();
    }

    // Jika scroll ke bawah, slide ke next
    if (e.deltaY > 0) {
      swiper.slideNext();
    }
  }
});

const swiperContainer1 = document.querySelector(".swiper-new");

swiperContainer1.addEventListener("wheel", function (e) {
  // CHecking swiper with shift + scroll
  if (e.shiftKey) {
    //  scroll default
    e.preventDefault();

    if (e.deltaY < 0) {
      swiperNew.slidePrev();
    }

    if (e.deltaY > 0) {
      swiperNew.slideNext();
    }
  }
});

const swiperContainer = document.querySelector(".mySwiper");

swiperContainer.addEventListener("wheel", function (e) {
  // CHecking swiper with shift + scroll
  if (e.shiftKey) {
    //  scroll default
    e.preventDefault();

    if (e.deltaY < 0) {
      mySwiper.slidePrev();
    }

    if (e.deltaY > 0) {
      mySwiper.slideNext();
    }
  }
});
