$(document).ready(function() {



  $('#fullpage').fullpage({
    anchors:['nav'],
    scrollOverflow: true,
    easingcss3: 'ease-out',
    // paddingTop: '40px',
    loopHorizontal: false,
    verticalCentered: false,

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
      //first slide of the second section
      if(index == 1 && slideIndex == 0){
        $('.header-title').addClass('header-title--cover');
      }

    },
    onSlideLeave: function( anchorLink, index, slideIndex, direction){
      if(index == 1 && slideIndex == 0 && direction == 'right'){
          $('.header-title').removeClass('header-title--cover');
      }

      if(index == 1 && slideIndex == 1 && direction == 'left'){
          $('.header-title').addClass('header-title--cover');
      }
    }
  });


  $('.header-title').hover(function() {
    $('span > a', this).text('┬─┬ノ( º _ ºノ)');
  }, function() {
    $('span > a', this).text('(╯°□°）╯︵ ┻━┻');
  });

  $('.tabs__tabs__tab').hide();
  $('.tabs__nav a').on('click', function(event) {

    if ($(this).hasClass('current')) {
      event.preventDefault();
    } else {
      event.preventDefault();
      $('.tabs__tabs__tab').slideUp();
      $('.tabs__nav a').removeClass('current');

      $(this).addClass('current');

      var thisId = $(this).attr('href');

      $(thisId).slideDown();
      $.fn.fullpage.reBuild();
    };
  });

  $('.slide--cover, .header-title--cover').on('click', function(event) {
    event.preventDefault();
    $.fn.fullpage.moveSlideRight();
  });


  $('.btn-toc').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('open');
    $('.toc-wrap').fadeToggle('fast');
    $('#fullpage .section').toggleClass('blur');
    $('.header-title').removeClass('header-title--cover');
  });

  $('.toc-wrap ul a').on('click', function(event) {
    $('.toc-wrap').fadeToggle('fast');
    $('#fullpage .section').toggleClass('blur');
    $('.btn-toc').toggleClass('open');
  });

  var timer="";
  var isBlurred=false;
  window.onblur=function() {
    isBlurred = true;
    timer=window.setInterval(function() {
      document.title = document.title == "(╯°□°）╯︵ ┻━┻ // LEVEL1 2014 kokkuvõte" ? "┬─┬ノ( º _ ºノ) // LEVEL1 2014 kokkuvõte" : "(╯°□°）╯︵ ┻━┻ // LEVEL1 2014 kokkuvõte";
    }, 1000);
  }
  window.onfocus=function() {
    isBlurred = false;
    document.title = "(╯°□°）╯︵ ┻━┻ // LEVEL1 2014 kokkuvõte";
    clearInterval(timer);
  }

  $(".slide--moo").fitVids();

});

