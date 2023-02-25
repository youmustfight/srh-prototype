(function() {
  // SETUP
  // --- get elements on page
  var body = document.querySelector('body'), frameWrapper = document.createElement('div');
  // --- setup iframe & attrs
  frameWrapper.id = 'srh-charley'; frameWrapper.style.zIndex = 2147483647; frameWrapper.style.position = 'absolute';
  var frame = document.createElement('iframe');
  frame.src = 'http://localhost:1111?dt=' + Date.now(); // ensure cache is broken?
  frame.id = 'srh-charley';
  frame.style.display = 'block';
  frame.style.position = 'fixed';
  frame.style.zIndex = 2147483647;
  frame.style.height = '72px';
  frame.style.width = '72px';
  frame.style.bottom = '24px';
  frame.style.right = '24px';
  frame.style.border = 'none';
  frame.style.maxWidth = '100vw';
  frame.style.background = 'none transparent';
  // --- append iframe to page
  frameWrapper.appendChild(frame);
  body.appendChild(frameWrapper);

  // LISTENER
  frame.onload = function() {
    frame.contentWindow.postMessage('init', '*');
    // --- listen to iframe messages bubbled up
    window.addEventListener('message', (ev) => {
      // --- if 'show' event
      if (ev.data === 'show') {
        frame.style.height = '100%';
        frame.style.maxHeight = '100vh';
        frame.style.width = '540px';
        frame.style.top = '0';
        frame.style.bottom = '0';
        frame.style.right = '0';
        frame.style.left = 'auto';
        frame.style.overflow = 'visible';
        frame.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 0px 4px 1px';
      // --- if 'hide' event
      } else if (ev.data === 'hide') {
        frame.style.height = '72px';
        frame.style.maxHeight = 'initial';
        frame.style.width = '72px';
        frame.style.top = 'initial';
        frame.style.bottom = '24px';
        frame.style.right = '24px';
        frame.style.left = 'initial';
        frame.style.overflow = 'hidden';
        frame.style.boxShadow = 'none';
      }
    });
  }
})();
