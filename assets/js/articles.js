(function () {
  var STORAGE_KEY = 'mywebsite_articles';

  var DEFAULT_ARTICLES = [
    {
      id: 1,
      title: 'آشنایی با Git و مدیریت نسخه',
      category: 'برنامه‌نویسی',
      date: '۱۰ مرداد ۱۴۰۵',
      author: 'احمد رضایی',
      status: 'منتشر شده',
      summary: 'در این مقاله با مفاهیم اولیه Git، Repository، Commit، Branch و نحوه استفاده از آن در پروژه‌های تیمی آشنا می‌شوید.',
      content: '<h2>Git چیست؟</h2><p>Git یک سیستم کنترل نسخه توزیع‌شده است که به توسعه‌دهندگان اجازه می‌دهد تغییرات کد را مدیریت کنند. با Git می‌توانید تاریخچه کامل تغییرات را نگهداری و در صورت نیاز به نسخه‌های قبلی بازگردید.</p><h2>مفاهیم پایه</h2><p>Repository محل ذخیره پروژه است، Commit یک نقطه ذخیره از تغییرات و Branch یک شاخه موازی برای توسعه است. در تیم‌ها هر عضو می‌تواند روی یک Branch کار کند و در نهایت تغییرات با Merge ترکیب می‌شوند.</p>',
      image: 'https://picsum.photos/400/300?1',
      tags: ['Git', 'مقدماتی', 'کنترل نسخه']
    },
    {
      id: 2,
      title: 'بهترین روش طراحی فرم در ASP.NET MVC',
      category: 'ASP.NET',
      date: '۸ مرداد ۱۴۰۵',
      author: 'احمد رضایی',
      status: 'منتشر شده',
      summary: 'در این مقاله با ساخت فرم‌های پویا، اعتبارسنجی سمت کاربر و سمت سرور و پیاده‌سازی اصولی ViewModel آشنا خواهید شد.',
      content: '<h2>فرم پویا چیست؟</h2><p>فرم پویا فرمی است که محتوای آن بر اساس داده‌ها یا وضعیت کاربر تغییر می‌کند. در ASP.NET MVC می‌توان با استفاده از ViewModel ها فرم‌ها را به‌صورت اصولی طراحی کرد.</p><h2>اعتبارسنجی</h2><p>اعتبارسنجی سمت کاربر با jQuery و سمت سرور با DataAnnotation ها انجام می‌شود. ترکیب این دو باعث می‌شود فرم هم سریع پاسخ دهد و هم امن باشد.</p>',
      image: 'https://picsum.photos/400/300?2',
      tags: ['ASP.NET', 'MVC', 'فرم']
    },
    {
      id: 3,
      title: 'آشنایی با SQL Server برای توسعه‌دهندگان',
      category: 'پایگاه داده',
      date: '۵ مرداد ۱۴۰۵',
      author: 'احمد رضایی',
      status: 'منتشر شده',
      summary: 'در این مقاله مهم‌ترین نکات طراحی جداول، ایندکس‌ها، Query ها و افزایش کارایی SQL Server بررسی می‌شود.',
      content: '<h2>طراحی جدول</h2><p>یک جدول خوب باید کلید اصلی داشته باشد، از نوع داده مناسب استفاده کند و نرمال‌سازی را رعایت کند. این موارد سرعت و صحت داده‌ها را تضمین می‌کنند.</p><h2>ایندکس و Query</h2><p>ایندکس‌گذاری روی ستون‌های پرکاربرد سرعت جستجو را چند برابر می‌کند. نوشتن Query های بهینه و اجتناب از SELECT * از دیگر نکات کلیدی است.</p>',
      image: 'https://picsum.photos/400/300?3',
      tags: ['SQL', 'پایگاه داده', 'ایندکس']
    }
  ];

  function ensureSeeded() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_ARTICLES));
    }
  }

  function getArticles() {
    ensureSeeded();
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return DEFAULT_ARTICLES.slice();
    }
  }

  function saveArticles(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function getArticle(id) {
    var list = getArticles();
    for (var i = 0; i < list.length; i++) {
      if (String(list[i].id) === String(id)) return list[i];
    }
    return null;
  }

  function addArticle(article) {
    var list = getArticles();
    article.id = Date.now();
    list.unshift(article);
    saveArticles(list);
    return article;
  }

  function updateArticle(updated) {
    var list = getArticles();
    for (var i = 0; i < list.length; i++) {
      if (String(list[i].id) === String(updated.id)) {
        list[i] = updated;
        break;
      }
    }
    saveArticles(list);
  }

  window.ArticleStore = {
    getArticles: getArticles,
    getArticle: getArticle,
    addArticle: addArticle,
    updateArticle: updateArticle
  };
})();
