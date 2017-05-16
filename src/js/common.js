$(function() {
  $('.js-matchHeight1').matchHeight();
  $('.js-matchHeight2').matchHeight();
  $('.js-matchHeight3').matchHeight();
  $('.js-matchHeight4').matchHeight();
  $('.js-matchHeight5').matchHeight();

  // SP メニュー開閉
  function HeaderMenuToggle() {
    var state = false,
      scrollpos,
      menuStatus = 'is-close is-open',
      $spMenu = $('.l-gNav');

    $('.javascriptPage.spMenu.iframe .l-gNav__btn a').bind("click", function(e) {
      if (state == false) {
        scrollpos = $(window).scrollTop();
        $('body.javascriptPage.spMenu.iframe').addClass('fixed').css({
          'top': -scrollpos
        });
        $spMenu.toggleClass(menuStatus);
        state = true;
      }
      return false;
    });

    $('.javascriptPage.spMenu.iframe .l-gNav__close a').bind("click", function(e) {
      setTimeout(function() {
        $('body.javascriptPage.spMenu.iframe').removeClass('fixed').css({
          'top': 0
        });
        window.scrollTo(0, scrollpos);
        $spMenu.toggleClass(menuStatus);
        state = false;
      }, 0);
      return false;
    });
  }

  // iframeサイズ可変
  $(function() {
    $('#resizable01').resizable({
      handles: 'e, s',
      alsoResize: '#exam02',
      start: function(event, ui) {
        // Add frame helpers
        $("iframe").each(function() {
          var offsetWidth = this.offsetWidth,
            offsetHeight = this.offsetHeight;

          $('<div class="ui-resizable-iframeFix" style="background: #fff;"></div>')
            .css({
              width: offsetWidth + "px",
              height: offsetHeight + "px",
              position: "absolute",
              opacity: "0.001",
              zIndex: 1000
            })
            .css($(this).offset())
            .appendTo("body")
            .data("resizable", {
              width: offsetWidth,
              height: offsetHeight
            });
        });
      },
      resize: function(event, ui) {
        var self = $('#resizable01').data("resizable"),
          o = self.options,
          os = self.originalSize,
          op = self.originalPosition;

        var delta = {
            height: (self.size.height - os.height) || 0,
            width: (self.size.width - os.width) || 0,
            top: (self.position.top - op.top) || 0,
            left: (self.position.left - op.left) || 0
          },

          _alsoResize = function(exp, c) {
            $(exp).each(function() {
              var el = $(this),
                start = $(this).data("resizable"),
                style = {},
                css = c && c.length ? c : ['width', 'height', 'top', 'left'];

              $.each(css || ['width', 'height', 'top', 'left'], function(i, prop) {
                // iframeより少し大きめに設定することで、iframe上でmouseupしてしまったときにmouseupイベント捕捉できない問題解消
                var sum = (start[prop] || 0) + (delta[prop] || 0) + 5;
                if (sum && sum >= 0)
                  style[prop] = sum || null;
              });

              //Opera fixing relative position
              if (/relative/.test(el.css('position')) && $.browser.opera) {
                self._revertToRelativePosition = true;
                el.css({
                  position: 'absolute',
                  top: 'auto',
                  left: 'auto'
                });
              }

              el.css(style);
            });
          };

        _alsoResize('div.ui-resizable-iframeFix', ['width', 'height']);
      },
      stop: function(event, ui) {
        // Remove frame helpers
        $("div.ui-resizable-iframeFix")
          .removeData('resizable')
          .each(function() {
            this.parentNode.removeChild(this);
          });
      }
    });
  });

  $(function() {
    $('#resizable02').resizable({
      handles: 'e, s',
      alsoResize: '#exam03',
      start: function(event, ui) {
        // Add frame helpers
        $("iframe").each(function() {
          var offsetWidth = this.offsetWidth,
            offsetHeight = this.offsetHeight;

          $('<div class="ui-resizable-iframeFix" style="background: #fff;"></div>')
            .css({
              width: offsetWidth + "px",
              height: offsetHeight + "px",
              position: "absolute",
              opacity: "0.001",
              zIndex: 1000
            })
            .css($(this).offset())
            .appendTo("body")
            .data("resizable", {
              width: offsetWidth,
              height: offsetHeight
            });
        });
      },
      resize: function(event, ui) {
        var self = $('#resizable02').data("resizable"),
          o = self.options,
          os = self.originalSize,
          op = self.originalPosition;

        var delta = {
            height: (self.size.height - os.height) || 0,
            width: (self.size.width - os.width) || 0,
            top: (self.position.top - op.top) || 0,
            left: (self.position.left - op.left) || 0
          },

          _alsoResize = function(exp, c) {
            $(exp).each(function() {
              var el = $(this),
                start = $(this).data("resizable"),
                style = {},
                css = c && c.length ? c : ['width', 'height', 'top', 'left'];

              $.each(css || ['width', 'height', 'top', 'left'], function(i, prop) {
                // iframeより少し大きめに設定することで、iframe上でmouseupしてしまったときにmouseupイベント捕捉できない問題解消
                var sum = (start[prop] || 0) + (delta[prop] || 0) + 5;
                if (sum && sum >= 0)
                  style[prop] = sum || null;
              });

              //Opera fixing relative position
              if (/relative/.test(el.css('position')) && $.browser.opera) {
                self._revertToRelativePosition = true;
                el.css({
                  position: 'absolute',
                  top: 'auto',
                  left: 'auto'
                });
              }

              el.css(style);
            });
          };

        _alsoResize('div.ui-resizable-iframeFix', ['width', 'height']);
      },
      stop: function(event, ui) {
        // Remove frame helpers
        $("div.ui-resizable-iframeFix")
          .removeData('resizable')
          .each(function() {
            this.parentNode.removeChild(this);
          });
      }
    });
  });

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

      $window.bind("resize", function(e) {
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
        e.stopPropagation();
      });
    }
  };

  var $spMenu = $('.javascriptPage.spMenu.iframe .l-gNav'),
    resizeManage = new ResizeManage($spMenu, 768);

  if (resizeManage.isSmall) {
    $spMenu.addClass('transition');
  }
  resizeManage.$element.bind("resizeManage", function(e) {
    if (resizeManage.isSmall) {
      setTimeout(function() {
        $spMenu.addClass('transition');
      }, 100);
    } else {
      $spMenu.removeClass('transition');
    }
    e.stopPropagation();
  });

  // トップへ戻るボタン
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
        },
        function() {
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
  $('a[href="#"]').bind("click", function () {
    return false;
  });

  menuNavIcon();
  HeaderMenuToggle();
});
