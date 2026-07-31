(function () {
  var LINKS = [
    { key: 'home', url: 'index.html', label: 'خانه', icon: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>' },
    { key: 'articles', url: 'Articles/ArticleList.html', label: 'مقالات', icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
    { key: 'payment', url: 'payment.html', label: 'پرداخت', icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>' },
    { key: 'about', url: 'about.html', label: 'درباره ما', icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>' },
    { key: 'contact', url: 'contact.html', label: 'تماس با ما', icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>' },
    { key: 'admin', url: 'Admin/AdminPanel.html', label: 'مدیریت', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' }
  ];

  function prefix() {
    return /(\/Articles\/|\/Admin\/)/.test(window.location.pathname) ? '../' : '';
  }

  function icon(paths) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }

  function renderNav() {
    var el = document.getElementById('site-nav');
    if (!el) return;
    var p = prefix();
    var current = document.body.getAttribute('data-page');
    var links = LINKS.map(function (l) {
      return '<a href="' + p + l.url + '"' + (l.key === current ? ' class="active"' : '') + '>' +
        icon(l.icon) + l.label + '</a>';
    }).join('');
    el.innerHTML =
      '<div class="navbar"><div class="nav-inner">' +
        '<a class="nav-brand" href="' + p + 'index.html"><span class="brand-logo">ن</span>سایت نمونه</a>' +
        '<nav class="nav-links">' + links + '</nav>' +
      '</div></div>';
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;
    var p = prefix();
    el.innerHTML =
      '<div class="footer"><div class="footer-inner">' +
        '<div>' +
          '<b>سایت نمونه</b>' +
          '<p>یک وب‌سایت نمونه برای تمرین Git و توسعه وب با HTML، CSS و JavaScript.</p>' +
        '</div>' +
        '<div class="footer-links">' +
          LINKS.map(function (l) { return '<a href="' + p + l.url + '">' + l.label + '</a>'; }).join('') +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">© ۱۴۰۵ سایت نمونه | ساخته شده برای تمرین Git</div>' +
      '</div>';
  }

  window.SiteMessages = {
    save: function (m) {
      var list = this.getAll();
      m.id = Date.now();
      m.date = new Date().toLocaleDateString('fa-IR');
      list.unshift(m);
      localStorage.setItem('mywebsite_messages', JSON.stringify(list));
    },
    getAll: function () {
      try {
        var parsed = JSON.parse(localStorage.getItem('mywebsite_messages'));
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        return [];
      }
    },
    remove: function (id) {
      localStorage.setItem('mywebsite_messages', JSON.stringify(
        this.getAll().filter(function (m) { return String(m.id) !== String(id); })
      ));
    }
  };

  renderNav();
  renderFooter();
})();
