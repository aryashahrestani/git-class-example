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
      content: '<h2>فرم پویا چیست؟</h2><p>فرم پویا فرمی است که محتوای آن بر اساس داده‌ها یا وضعیت کاربر تغییر می‌کند. در ASP.NET MVC می‌توان با استفاده از ViewModel ها فرم‌ها را به‌صورت اصولی طراحی کرد.</p><h2>اعتبارسنجی</h2><p>اعتبارسنجی سمت کاربر با JavaScript و سمت سرور با DataAnnotation ها انجام می‌شود. ترکیب این دو باعث می‌شود فرم هم سریع پاسخ دهد و هم امن باشد.</p>',
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
    },
    {
      id: 4,
      title: 'آشنایی با شبکه‌های کامپیوتری',
      category: 'شبکه',
      date: '۲ مرداد ۱۴۰۵',
      author: 'مریم حسینی',
      status: 'منتشر شده',
      summary: 'با مفاهیم پایه شبکه، مدل OSI، آدرس IP و نحوه ارتباط دستگاه‌ها در یک شبکه آشنا می‌شوید.',
      content: '<h2>شبکه چیست؟</h2><p>شبکه مجموعه‌ای از دستگاه‌هاست که برای تبادل داده به یکدیگر متصل می‌شوند. شبکه‌ها بر اساس وسعت به LAN، WAN و MAN تقسیم می‌شوند.</p><h2>مدل OSI</h2><p>مدل OSI شامل هفت لایه است که از فیزیکی تا کاربرد را پوشش می‌دهد. شناخت این لایه‌ها به عیب‌یابی بهتر شبکه کمک می‌کند.</p>',
      image: 'https://picsum.photos/400/300?4',
      tags: ['شبکه', 'OSI', 'IP']
    },
    {
      id: 5,
      title: 'امنیت وب و جلوگیری از حملات رایج',
      category: 'امنیت',
      date: '۳۰ تیر ۱۴۰۵',
      author: 'مریم حسینی',
      status: 'منتشر شده',
      summary: 'آشنایی با حملات رایج وب مانند XSS، SQL Injection و روش‌های دفاع در برابر آنها.',
      content: '<h2>XSS چیست؟</h2><p>حملات XSS با تزریق اسکریپت به صفحات وب انجام می‌شود. اعتبارسنجی و پاکسازی ورودی کاربر مهم‌ترین راه مقابله است.</p><h2>SQL Injection</h2><p>با استفاده از پارامترهای آماده (Parameterized Query) می‌توان از نفوذ به پایگاه داده جلوگیری کرد.</p>',
      image: 'https://picsum.photos/400/300?5',
      tags: ['امنیت', 'XSS', 'SQL Injection']
    },
    {
      id: 6,
      title: 'مقدمه‌ای بر طراحی واکنش‌گرا',
      category: 'طراحی وب',
      date: '۲۵ تیر ۱۴۰۵',
      author: 'رضا کریمی',
      status: 'منتشر شده',
      summary: 'یادگیری اصول طراحی واکنش‌گرا با CSS Grid و Flexbox تا سایت شما در همه دستگاه‌ها عالی دیده شود.',
      content: '<h2>چرا واکنش‌گرا؟</h2><p>بیشتر کاربران با موبایل به سایت‌ها دسترسی دارند؛ پس طراحی باید روی هر اندازه صفحه نمایش عالی باشد.</p><h2>ابزارها</h2><p>Flexbox و CSS Grid دو ابزار قدرتمند برای چیدمان واکنش‌گرا هستند و با Media Query می‌توان رفتار صفحه را در اندازه‌های مختلف تنظیم کرد.</p>',
      image: 'https://picsum.photos/400/300?6',
      tags: ['CSS', 'طراحی وب', 'واکنش‌گرا']
    },
    {
      id: 7,
      title: 'آموزش Entity Framework در پروژه‌های MVC',
      category: 'ASP.NET',
      date: '۲۰ تیر ۱۴۰۵',
      author: 'احمد رضایی',
      status: 'منتشر شده',
      summary: 'استفاده از Entity Framework برای کار با پایگاه داده بدون نوشتن کدهای تکراری ADO.NET.',
      content: '<h2>Entity Framework چیست؟</h2><p>Entity Framework یک ORM است که کار با پایگاه داده را با مدل‌های شیءگرا ساده می‌کند.</p><h2>روش‌های Code First</h2><p>در روش Code First کلاس‌ها را می‌نویسید و EF جداول را می‌سازد. Migration ها نیز تغییرات ساختار را مدیریت می‌کنند.</p>',
      image: 'https://picsum.photos/400/300?7',
      tags: ['EF', 'ASP.NET', 'پایگاه داده']
    },
    {
      id: 8,
      title: 'بهینه‌سازی Query های SQL Server',
      category: 'پایگاه داده',
      date: '۱۵ تیر ۱۴۰۵',
      author: 'رضا کریمی',
      status: 'پیش نویس',
      summary: 'تکنیک‌هایی برای افزایش سرعت Query ها شامل ایندکس‌گذاری صحیح و تحلیل Execution Plan.',
      content: '<h2>Execution Plan</h2><p>بررسی Execution Plan نشان می‌دهد کوئری شما کجا کند است و کدام ایندکس می‌تواند کمک کند.</p><h2>ایندکس‌های پوشا</h2><p>با ایندکس‌های Covering می‌توانید از خواندن جدول اصلی جلوگیری کرده و سرعت را به شدت افزایش دهید.</p>',
      image: 'https://picsum.photos/400/300?8',
      tags: ['SQL Server', 'بهینه‌سازی', 'ایندکس']
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

  function deleteArticle(id) {
    saveArticles(getArticles().filter(function (a) {
      return String(a.id) !== String(id);
    }));
  }

  window.ArticleStore = {
    getArticles: getArticles,
    getArticle: getArticle,
    addArticle: addArticle,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
  };
})();
