import store from '/src/store'

$(function () {
  var Page = (function () {

    var $navArrows = $('#nav-arrows'),
      $nav = $('#nav-dots > span'),
      slitslider = $('#slider').slitslider({
        onBeforeChange: function (slide, pos) {

          $nav.removeClass('nav-dot-current');
          $nav.eq(pos).addClass('nav-dot-current');

        }
      }),

      init = function () {

        initEvents();

      },
      initEvents = function () {
        // add navigation events
        $navArrows.children(':last').on('click', function () {
          store.state.list = []
          slitslider.next();

          store.state.list.push(
            $('.bg-1')[0].style.display,
            $('.bg-2')[0].style.display,
            $('.bg-3')[0].style.display,
            $('.bg-4')[0].style.display,
          )

          return false;

        });

        $navArrows.children(':first').on('click', function () {
          store.state.list = []
          slitslider.previous();

          store.state.list.push(
            $('.bg-1')[0].style.cssText,
            $('.bg-2')[0].style.cssText,
            $('.bg-3')[0].style.cssText,
            $('.bg-4')[0].style.cssText,
          )

          return false;

        });

        $nav.each(function (i) {


          $(this).on('click', function (event) {

            var $dot = $(this);

            if (!slitslider.isActive()) {

              $nav.removeClass('nav-dot-current');
              $dot.addClass('nav-dot-current');

            }
            store.state.list = []
            slitslider.jump(i + 1);
            store.state.list.push(
              $('.bg-1')[0].style.display,
              $('.bg-2')[0].style.display,
              $('.bg-3')[0].style.display,
              $('.bg-4')[0].style.display,
            )
      
            return false;

          });

        });

      };

    return { init: init };

  })();

  Page.init();



});