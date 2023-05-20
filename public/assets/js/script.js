(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
    $('.slider-double').slick({
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    $('.slider-triple').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    $('.slider-quadra').slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    $('.js-click-video').click(function(e){
      e.preventDefault();
      let vidUrl = $(this).attr('href');
      $('#videoModal').modal('show');
      // https://www.youtube.com/embed/BhSsopT6h4A
      let embed = 'https://www.youtube.com/embed/'+vidUrl.split('?v=')[1];
      $('#iframeYTB').attr('src',embed);
      $('#videoModal').on('hidden.bs.modal', function (e) {
        $('#iframeYTB').attr('src','');
      })
    })
  });
})(jQuery); // End of use strict
