// header js
let subCategoryLis = document.querySelectorAll('.subCategoryLi');
let innerCatBoxs = document.querySelectorAll('.innerCatBox');
subCategoryLis.forEach(subCategoryLi => {
    subCategoryLi.addEventListener('mouseover', (e) => {
        for(i=0; i<subCategoryLis.length; i++){
            subCategoryLis[i].classList.remove('active')
        }
        for(i=0; i<innerCatBoxs.length; i++){
            innerCatBoxs[i].classList.remove('active')
        }
        let a = e.currentTarget.getAttribute("cat-sec");
        let b = document.getElementById(a);
        b.classList.add('active');
        e.currentTarget.classList.add('active')
    })
})

// hero carousel js
var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });


  // product preview carousel

    var swiper1 = new Swiper(".productthumbCarousel", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".productPrevCarousel", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper1,
      },
    });


    // product Category carousel

    var swiper5 = new Swiper(".productCategorySlider", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });


    // mobile category slider
    var swiper = new Swiper(".mobCategorySlider", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 8,
      breakpoints: {
        0: {
          slidesPerView: 5,
        },
        500: {
          slidesPerView: 6,
        },
        600: {
          slidesPerView: 7,
        },
        700: {
          slidesPerView: 8,
        },
        800: {
          slidesPerView: 9,
        },
        900: {
          slidesPerView: 10,
        },
      },
    });


    // preloader
    $(window).on('load', function () {
      setTimeout(function () {
          $('.loader').fadeOut('active');
      }, 100);
  });


  // login form validation
(() => {
  'use strict'
  const LoginForm = document.querySelectorAll('.loginForm');
  let loginBtn = document.querySelector('.loginBtn')
  Array.from(LoginForm).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()
      if (form.checkValidity()) {
          loginBtn.classList.add('show', 'disabled')
      }

      form.classList.add('was-validated')
    }, false)
  })


    // register form validation
    const registerForm = document.querySelectorAll('.registerForm');
    let registerBtn = document.querySelector('.registerBtn')
    Array.from(registerForm).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        event.stopPropagation()
        if (form.checkValidity()) {
            registerBtn.classList.add('show', 'disabled')
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()


