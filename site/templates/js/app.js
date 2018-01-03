$(document).foundation();

(function () {

  animateHomePageTopBar();
  animateProjectPageTopBar();


  function animateHomePageTopBar() {
    var previousScrollPosition = 0;
    var $topBar = $('.top-bar-home');

    if (!$topBar.length) {
      return;
    }

    var $masthead = $('.masthead-work-wrapper');
    var animationPoint = $masthead.offset().top;

    $(window).scroll(function () {
      var windowTop = $(this).scrollTop();
      var hidePoint = animationPoint + 400;
      var upScroll = windowTop < previousScrollPosition;

      // Appears once in the blue area
      // $topBar[ windowTop > animationPoint ? 'addClass' : 'removeClass']('top-bar-home-animate-in');

      // Appears once in the blue area and Disappears once out of it
      // $topBar[ windowTop > animationPoint && windowTop < hidePoint ? 'addClass' : 'removeClass']('top-bar-home-animate-in');

      // Appears once in the blue area and disappears once out of it, with special attention to up-scroll
      if (windowTop > animationPoint && windowTop < hidePoint) {
        // We are within the blue area
        $topBar.addClass('top-bar-home-animate-in');
      } else if (windowTop > hidePoint && upScroll) {
        // We are outside of the blue area, below it, on an up-scroll
        $topBar.addClass('top-bar-home-animate-in');
      } else {
        // We are outside of the blue area, either above it, or on a down scroll
        $topBar.removeClass('top-bar-home-animate-in');
      }

      // Assign new previous scroll position to handle up-scroll
      previousScrollPosition = windowTop;
    });
  }

  function animateProjectPageTopBar() {
    var previousScrollPosition = 0;
    var $topBar = $('.template-project .je-top-bar');
    var body = $('body');
    var $window = $(window);
    var animationThreshold = 200; // this far down the page we would want to see the top bar when scrolling up
    var windowHeight = $window.height(); // needed to work with bottom threshold
    var bottomThreshold = $(document).height();


    if (!$topBar.length) {
      return;
    }

    $window.scroll(function () {
      var windowTop = $(this).scrollTop();
      var upScroll = windowTop < previousScrollPosition;

      console.log('bottom of the document?', windowTop + windowHeight > bottomThreshold)

      if (upScroll && windowTop > animationThreshold && (windowTop + windowHeight < bottomThreshold)) {
        $topBar.addClass('top-bar-project-animate-in');
        body.addClass('add-padding-back');
      } else if (!upScroll && windowTop > animationThreshold) {
        $topBar.removeClass('top-bar-project-animate-in');
        body.removeClass('add-padding-back');
      }

      // Assign new previous scroll position to handle up-scroll
      previousScrollPosition = windowTop;
    });
  }

})();
