var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    centeredSlides:false,
    slidesPerGroupSkip: 1,
    loop  : false ,
    loopFillGroupWithBlank : false ,
    spaceBetween : 20,
    grabCursor: true,
    autoplay : {
        delay : 2500,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1560: {
        spaceBetween : 60,
      },
      768: {
          slidesPerView: 4,
          spaceBetween : 20,
        },
      0:{
        slidesPerView : 1,
        spaceBetween : 20,
      },

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets : true,
    },
  })

  // more detail js starts here 
const slides = [...document.querySelectorAll('#teaching .slide') , ...document.querySelectorAll
              ('#mentor .slide')],
      boxes = document.querySelectorAll('#mentor .more-detail .box'),
      moreDetail = document.querySelector('#mentor .more-detail'),
      moreBtns = [...document.querySelectorAll('#teaching .slide .read-more button') , ...document.querySelectorAll('#mentor .slide .read-more button')],
      closeBtn = document.querySelectorAll('#mentor .more-detail .box span.icon');

      moreBtns.forEach((btn , index)=>{
        btn.onclick = ()=>{
          moreDetail.classList.add('active');
          boxes[index].classList.add('active');
        }
      })

      closeBtn.forEach(btn =>{

        btn.onclick = ()=>{

          boxes.forEach(box =>{
            box.classList.remove('active');
          })
          moreDetail.classList.remove('active');
        }

      })
window.onclick = (e)=>{
  if(e.target == moreDetail){

    boxes.forEach(box =>{
      box.classList.remove('active');
    })
    moreDetail.classList.remove('active');

  }
}