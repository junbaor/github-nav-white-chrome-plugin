(function() {
    'use strict';
    const cls = 'header-dark';
    const els = document.querySelectorAll('.' + cls) || [];
    els.forEach(function(el){ el.classList.remove(cls); });
})();