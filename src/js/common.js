$(function() {
  $('.js-matchHeight1').matchHeight();
  $('.js-matchHeight2').matchHeight();
  $('.js-matchHeight3').matchHeight();
  $('.js-matchHeight4').matchHeight();
  $('.js-matchHeight5').matchHeight();

  // ウィンドウリサイズ時のSPメニューちらつき防止
  var ResizeManage = function() {
    this.initialize.apply(this, arguments);
  };
  ResizeManage.prototype = {
    initialize: function($element, breakpoint) {
      var $window = $(window),
          _this = this;
      this.isSmall = $window.width() < breakpoint;
      this.$element = $element;
      this.breakpoint = breakpoint;

      $window.on('resize', function() {
        if ($window.width() >= _this.breakpoint) {
          if (_this.isSmall) {
            _this.isSmall = false;
            _this.$element.triggerHandler('resizeManage');
          }
        } else {
          if (!_this.isSmall) {
            _this.isSmall = true;
            _this.$element.triggerHandler('resizeManage');
          }
        }
      });
    }
  };

  var $spMenu = $('.l-gNav'),
  resizeManage = new ResizeManage($spMenu, 768);

  if (resizeManage.isSmall) {
    $spMenu.addClass('transition');
  }
  resizeManage.$element.on('resizeManage', function() {
    if (resizeManage.isSmall) {
      setTimeout(function() {
        $spMenu.addClass('transition');
      }, 100);
    } else {
      $spMenu.removeClass('transition');
    }
  });

  function menuNavIcon() {
    if (resizeManage.isSmall) {
      $('.l-pagetop a').hover(
        function() {
          navIconUrl = "/img/svg/toppage.svg?" + (new Date).getTime();
          $(this).animate({
            'width': 80,
            'height': 80
          }, 200)
          $(this).css('background-image', 'url(' + navIconUrl + ')');
        },function() {
          $(this).animate({
            'width': 60,
            'height': 60
          }, 200)
        }
      )
    }
  };

  $('.l-pagetop a').click(function() {
    $('html, body').animate({
      'scrollTop': 0
    }, 400);
  });

  // リンク無効化
  $('a[href="#"]').on('click', function() {
    return false;
  });

  menuNavIcon();
});
