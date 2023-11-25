document.addEventListener('DOMContentLoaded', function () {
     const starImg = document.querySelector(".star-img");

     const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
     });

     scroll.on('scroll', ScrollTrigger);

     function ScrollTrigger() {
          const triggerTop = starImg.getBoundingClientRect().top;
          const triggerBottom = starImg.getBoundingClientRect().bottom;

          if (triggerTop < window.innerHeight && triggerBottom > 0) {
               const progress = (triggerTop + window.innerHeight) / (triggerBottom + window.innerHeight);
               gsap.to(starImg, { scale: 2 * progress });
          }
     }
});
