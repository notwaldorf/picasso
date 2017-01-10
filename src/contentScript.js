(function() {
  "use strict";

  var b = document.createElement('div');
  b.role = 'button';
  b.setAttribute('aria-label', 'Show sidebar');
  b.style.cursor = 'pointer';
  b.style.float = 'left';
  b.tabindex = 0;
  b.innerHTML = '<svg height="24" width="24" viewBox="0 0 24 24" fill="#5a5a5a"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>';
  document.getElementById('mainnav').appendChild(b);

  b.addEventListener('click', function() {
    if (mainbody.classList.contains('expanded')) {
      mainbody.classList.remove('expanded');
      b.setAttribute('aria-label', 'Show sidebar');
    } else {
      mainbody.classList.add('expanded');
      b.setAttribute('aria-label', 'Hide sidebar');
    }
  });
})();
