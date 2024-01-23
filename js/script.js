// video player 

window.addEventListener('load', async () => {
    let video = document.querySelector('video[muted][autoplay]');
    try {
      await video.play();
    } catch (err) {
      video.controls = true;
    }
  });

  // gallery 
    $('.gallery_img').magnificPopup({type:'image'});


// AOS Animation
AOS.init();

// owl carousel


$(document).ready(function(){
  $('.feature_carousel').owlCarousel({
    items:1,
    loop:false,
    centre:true,
    autoplay:false,
    // autoplayHoverPause:true,
    // smartSpeed:1000,
    // URLhashListener:true,
    // autoplayHoverPause:true,
    // startPosition: 'URLHash',
    // responsive:{
    //     0:{
    //       items:1
    //     },
    //     767:{
    //         items:1
    //     },
    // }
})
});