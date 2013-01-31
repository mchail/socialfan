/*
 * socialfan
 * https://github.com/mchail/socialfan
 *
 * Copyright (c) 2013 Steve McHail
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var serviceURLs = {
    github: "https://github.com/",
    linkedIn: "http://www.linkedin.com/in/",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/"
  }

  // Collection method.
  $.fn.socialfan = function(uOptions) {
    return this.each(function() {
      socialfan($(this), uOptions);
    });
  };

  function socialfan($el, uOptions) {
    var options = $.extend(true,
      {
        size: 160,
        services: {},
        email: ""
      },
      uOptions
    );

    var gravatarHex = hex_md5(options.email);
    $container = $('<div>').addClass('socialfan-container');
    $imgContainer = $('<div>').addClass('socialfan-img-container').css('width', options.size + 4 + 'px');
    $imgContainer.append(
      $('<img>').attr('src', "http://gravatar.com/avatar/" + gravatarHex + "?s=" + options.size)
    );
    $container.append($imgContainer);

    var angle = (Object.keys(options.services).length - 1) / 2 * -30
    for (var service in options.services) {
      $service = $('<a>').attr('href', serviceURLs[service] + options.services[service]).attr('target', '_blank')
        .addClass('socialfan-service')
        .css('-webkit-transform', 'rotate(' + angle + 'deg)');
      $service.append($('<div>').addClass('socialfan-wedge'));
      $service.append($('<div>').addClass('socialfan-wedge-inner'));
      $service.append($('<div>').addClass('socialfan-' + service).addClass('socialfan-icon'));
      $container.append($service);
      angle += 30;
    }

    // $service = $('<div>').addClass('socialfan-service');
    // $service.append($('<div>').addClass('socialfan-wedge'));
    // $service.append($('<div>').addClass('socialfan-wedge-inner'));
    // $container.append($service);
    // $service = $('<div>').addClass('socialfan-service').css('-webkit-transform', 'rotate(30deg)');
    // $service.append($('<div>').addClass('socialfan-wedge'));
    // $service.append($('<div>').addClass('socialfan-wedge-inner'));
    // $container.append($service);

    $el.append($container);

  }

}(jQuery));
