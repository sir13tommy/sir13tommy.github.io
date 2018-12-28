(function() {
  var gameSrcKey = 'src'

  var $frame = $('.mobile iframe')
  var urlParams = new URLSearchParams(window.location.search);
  var gameSrc = urlParams.get(gameSrcKey)

  if (gameSrc) {
    $frame.attr('src', gameSrc)
  }
})()