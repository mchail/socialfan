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
    // for (var service in options.services) {
    //   $container.append(
    //     $('<a>').text(service).attr('href', serviceURLs[service] + options.services[service]).attr('target', '_blank')
    //   );
    // }

    $service = $('<div>').addClass('socialfan-service');
    $service.append($('<div>').addClass('socialfan-wedge'));
    $container.append($service);
    $service = $('<div>').addClass('socialfan-service').css('-webkit-transform', 'rotate(-30deg)');
    $service.append($('<div>').addClass('socialfan-wedge'));
    $container.append($service);
    $service = $('<div>').addClass('socialfan-service').css('-webkit-transform', 'rotate(30deg)');
    $service.append($('<div>').addClass('socialfan-wedge'));
    $container.append($service);

    $el.append($container);

  }

}(jQuery));
