const realEstate = document.querySelectorAll('.real-estate');
const cars = document.querySelectorAll('.cars');
const travels = document.querySelectorAll('.travels');
const filterBtn = document.querySelectorAll('.filter__btn');


filterBtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.value === 'cars') {
      travels.forEach((item) => item.style.display = 'none');
      realEstate.forEach((item) => item.style.display = 'none');
      cars.forEach((item) => item.style.display = 'flex');
    }
    if (e.target.value === 'travels') {
      travels.forEach((item) => item.style.display = 'flex');
      realEstate.forEach((item) => item.style.display = 'none');
      cars.forEach((item) => item.style.display = 'none');
    }
    if (e.target.value === 'real-estate') {
      travels.forEach((item) => item.style.display = 'none');
      realEstate.forEach((item) => item.style.display = 'flex');
      cars.forEach((item) => item.style.display = 'none');
    }
  })
})


$(document).ready(function () {
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })
  // document ready  
});