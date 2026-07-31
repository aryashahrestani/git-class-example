(function () {
  var LINKS = [
    { key: 'home', url: 'index.html', label: 'خانه' },
    { key: 'articles', url: 'Articles/ArticleList.html', label: 'مقالات' },
    { key: 'payment', url: 'payment.html', label: 'پرداخت' },
    { key: 'about', url: 'about.html', label: 'درباره ما' },
    { key: 'contact', url: 'contact.html', label: 'تماس با ما' },
    { key: 'admin', url: 'Admin/AdminPanel.html', label: 'مدیریت' }
  ];

  function prefix() {
    return /(\/Articles\/|\/Admin\/)/.test(window.location.pathname) ? '../' : '';
  }

  function renderNav() {
    var el = document.getElementById('site-nav');
    if (!el) return;
    var p = prefix();
    var current = document.body.getAttribute('data-page');
    var links = LINKS.map(function (l) {
      return '<a href="' + p + l.url + '"' + (l.key === current ? ' class="active"' : '') + '>' + l.label + '</a>';
    }).join('');
    el.innerHTML =
      '<div class="navbar"><div class="nav-inner">' +
        '<a class="nav-brand" href="' + p + 'index.html">سایت نمونه</a>' +
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
