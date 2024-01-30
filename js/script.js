//   toggle
let menutoggle = document.querySelector('.toggle');
                menutoggle.onclick = function(){
                    menutoggle.classList.toggle('active')
                }

// video player 

window.addEventListener('load', async () => {
    let video = document.querySelector('video[muted][autoplay]');
    try {
      await video.play();
    } catch (err) {
      video.controls = true;
    }
  });

// AOS Animation
AOS.init();

// owl carousel

$(document).ready(function(){
  $('.feature_carousel').owlCarousel({
    items:1,
    loop:false,
    centre:true,
    autoplay:false,
    margin:20,
})
});
