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
var swiper = new Swiper(".mySwiper", {
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

    var swiper = new Swiper(".productthumbCarousel", {
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
        swiper: swiper,
      },
    });