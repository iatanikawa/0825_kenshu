window.addEventListener('load', function() {
    var fadeElements = document.getElementsByClassName('fade-in');
  
    function fadeInHandler() {
      for (var i = 0; i < fadeElements.length; i++) {
        var element = fadeElements[i];
        var rect = element.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= viewportHeight * 0.75) {
          element.classList.add('show'); /* .showクラスを追加してアニメーションを開始 */
        }
      }
    }
  
    window.addEventListener('scroll', fadeInHandler);
    fadeInHandler();
  });

  
  
  
  
  