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

document.addEventListener("DOMContentLoaded", () => {
  const openPopups = document.querySelectorAll(".open-popup");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");
  const quoteForm = document.getElementById("quote-form");
  const formContainer = document.getElementById("form-container");
  const successMessage = document.getElementById("success-message");
  const closeSuccess = document.getElementById("close-success");

  openPopups.forEach((openPopup) => {
    openPopup.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.remove("hidden");

      closePopup.addEventListener("click", function () {
        popup.classList.add("hidden");
      });

      popup.addEventListener("click", function (event) {
        if (event.target === popup) {
          popup.classList.add("hidden");
        }
      });
    });
  });

  // Handle form submission
  quoteForm.addEventListener("submit", function (event) {
    setTimeout(() => {
      // Hide form and show success message
      formContainer.classList.add("hidden");
      successMessage.classList.remove("hidden");

      // Reset the form for the next use
      quoteForm.reset();
    }, 500); // Delay for opening new tab
  });

  // Close success message
  closeSuccess.addEventListener("click", function () {
    successMessage.classList.add("hidden");
    popup.classList.add("hidden");
    formContainer.classList.remove("hidden");
  });
});

const formContainer = document.getElementById("form-container");
const successMessage = document.getElementById("success-message");
const quoteForm = document.getElementById("quote-form");
const closeSuccess = document.getElementById("close-success");
const submitForm = document.getElementById("submitForm");

// // Event untuk pengiriman formulir
// quoteForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Fetch form data
//   const formData = new FormData(quoteForm);

//   // Send form data via Fetch API to FormSubmit
//   fetch(quoteForm.action, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Tampilkan pesan sukses dan sembunyikan form
//         formContainer.classList.add("hidden");
//         successMessage.classList.remove("hidden");
//       } else {
//         // Handle error
//         alert("There was an issue with submitting your request.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// });

// // Event untuk menutup pop-up setelah pesan sukses
// closeSuccess.addEventListener("click", function () {
//   popup.classList.add("hidden");
//   // Reset form untuk pengiriman berikutnya
//   formContainer.classList.remove("hidden");
//   successMessage.classList.add("hidden");
//   quoteForm.reset();
// });
