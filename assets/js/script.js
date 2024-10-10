const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1.5,
  centeredSlides: true,
  loop: true,

  // Add space between slides
  spaceBetween: 20, // Adjust the value (in pixels) to set the desired gap

  // Smooth transition (animation)
  speed: 800, // Smooth transition speed

  // Enable grabbing cursor for a better UX
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,  // Enable pagination to be clickable
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


  document.querySelector('.btn_menu').addEventListener("click", () =>{
    document.querySelector('#menu').classList.add("show")
  })

  document.querySelector('.close a').addEventListener("click", () =>{
    document.querySelector('#menu').classList.remove("show")
  })