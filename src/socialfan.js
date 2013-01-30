/*
 * socialfan
 * https://github.com/mchail/socialfan
 *
 * Copyright (c) 2013 Steve McHail
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  // Collection method.
  $.fn.socialfan = function(options) {
    return this.each(function() {
      socialfan($(this), uOptions);
    });
  };

  function socialfan($el, uOptions) {
    var options = $.extend(true,
      {
        size: 128,
        rounded: true,
        links: [],
        email: ""
      },
      uOptions
    );
  }

}(jQuery));
