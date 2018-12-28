(function() {
  var gameSrcKey = 'src'
  var origin = window.location.origin

  var $frame = $('.mobile iframe')
  var urlParams = new URLSearchParams(window.location.search);
  var gameSrc = origin + urlParams.get(gameSrcKey)
  
  if (gameSrc) {
    $frame.attr('src', gameSrc)
  }
})()