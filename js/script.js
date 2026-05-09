const translations = {
  ar: {
    dir: "rtl",
    flag: "🇪🇬",
    name: "العربية",
    home: "الرئيسية",
    about: "من نحن",
    elec: "خدمات الكهرباء",
    paint: "خدمات الدهانات",
    portfolio: "أعمالنا",
    quote: "طلب عرض سعر",
    contact: "اتصل بنا",
    heroBadge: "👑 خبراء في باريس منذ 2005",
    heroTitle:
      'حلول <span class="gold-text">كهرباء ودهانات</span> احترافية في باريس',
    heroDesc:
      "نقدم خدمات الكهرباء والدهانات والتشطيبات العصرية للمنازل والشقق الباريسية والمكاتب التجارية.",
    quoteBtn: "طلب عرض سعر",
    contactBtn: "اتصل بنا",
    whyTitle: "لماذا تختار NASA؟",
    whyItems: [
      {
        icon: "fa-medal",
        title: "خبرة 20 عاماً",
        desc: "خبرة في المشاريع الباريسية الراقية",
      },
      {
        icon: "fa-shield-haltered",
        title: "معايير NF C15-100",
        desc: "التزام بالمعايير الكهربائية الفرنسية",
      },
      {
        icon: "fa-paint-roller",
        title: "دهانات بيئية",
        desc: "منتجات حاصلة على شهادة Écolabel",
      },
      {
        icon: "fa-clock",
        title: "احترام المواعيد",
        desc: "تسليم مضمون في الوقت المتفق عليه",
      },
    ],
    elecTitle: "خدمات الكهرباء",
    elecDesc: "حلول كهربائية متكاملة وفق المعايير الفرنسية.",
    elecList: [
      "تمديدات كهربائية كاملة",
      "لوحات كهربائية NF",
      "إضاءة ذكية وديكورية",
      "شبكات VDI",
      "أنظمة أمان ومراقبة",
      "صيانة دورية",
      "تدفئة كهربائية",
      "شهادة Consuel",
    ],
    paintTitle: "خدمات الدهانات",
    paintDesc: "أجود أنواع الدهانات الصديقة للبيئة.",
    paintList: [
      "دهانات داخلية فاخرة",
      "دهانات خارجية مقاومة",
      "ورق جدران فاخر",
      "تأثيرات زخرفية",
      "طلاء إيبوكسي",
      "ترميم وتجديد",
      "مضاد للرطوبة",
      "استشارات ألوان مجانية",
    ],
    processTitle: "منهجية العمل",
    processSteps: ["المعاينة", "التخطيط", "التنفيذ", "التسليم"],
    portfolioTitle: "أعمالنا في باريس",
    portfolioDesc: "معرض لأحدث مشاريعنا مع إمكانية عرض التفاصيل الكاملة.",
    viewDetails: "عرض التفاصيل",
    hideDetails: "إخفاء التفاصيل",
    projects: [
      {
        name: "شقة فاخرة – الشانزليزيه",
        location: "الدائرة 8، باريس",
        shortDesc: "تجديد كامل لشقة 200م²",
        fullDesc:
          "تجديد كامل لشقة مساحة 200م² تشمل تمديدات كهربائية ذكية ودهانات بتشطيبات راقية. تم استخدام أجود أنواع الدهانات الإيطالية.",
        tags: ["كهرباء ذكية", "دهانات فاخرة", "تجديد كامل"],
        images: 5,
        hasVideo: true,
      },
      {
        name: "مكتب محاماة – لا ديفونس",
        location: "كوربفوا، باريس",
        shortDesc: "إضاءة ذكية لمكتب 500م²",
        fullDesc:
          "تركيب أنظمة إضاءة ذكية وتحكم آلي لمكتب مساحته 500م² مع شبكات VDI متطورة وأنظمة أمان.",
        tags: ["إضاءة ذكية", "شبكات", "أتمتة"],
        images: 3,
        hasVideo: false,
      },
      {
        name: "فندق بوتيك – لو ماريه",
        location: "الدائرة 4، باريس",
        shortDesc: "دهانات فاخرة لفندق 5 نجوم",
        fullDesc:
          "دهانات بتشطيبات جدارية مخصصة وورق جدران مستورد من إيطاليا وفرنسا.",
        tags: ["دهانات فندقية", "ورق جدران"],
        images: 6,
        hasVideo: true,
      },
      {
        name: "مطعم – سان جيرمان",
        location: "الدائرة 6، باريس",
        shortDesc: "إضاءة معمارية لمطعم راقٍ",
        fullDesc:
          "إضاءة معمارية ودهانات ديكورية لمطعم يجمع بين الأصالة والحداثة.",
        tags: ["إضاءة", "دهانات ديكورية"],
        images: 4,
        hasVideo: false,
      },
    ],
    testimonialTitle: "آراء عملائنا",
    testimonialDesc: "ماذا يقول عملاؤنا عن خدماتنا.",
    testimonials: [
      {
        text: "عمل احترافي وأنيق. أنصح بهم لكل من يبحث عن الجودة الباريسية.",
        author: "ماري دوبوا – باريس 16",
        stars: 5,
      },
      {
        text: "احترام تام للمواعيد. شقتي أصبحت رائعة بفضل NASA.",
        author: "بيير لوران – نويي",
        stars: 5,
      },
    ],
    testimonialFormTitle: "شاركنا تجربتك",
    testimonialFormName: "الاسم",
    testimonialFormText: "رأيك",
    testimonialFormRating: "تقييمك",
    testimonialFormSubmit: "إرسال",
    testimonialSuccess: "✅ شكراً لك! تم الإرسال.",
    formName: "الاسم الكامل",
    formPhone: "الهاتف",
    formEmail: "البريد الإلكتروني",
    formService: "نوع الخدمة",
    formCity: "المدينة",
    formDetails: "التفاصيل",
    formUpload: "رفع صور",
    formDate: "التاريخ المفضل",
    submit: "إرسال",
    successMsg: "✅ تم الإرسال! سنتواصل معك خلال 24 ساعة.",
    contactTitle: "اتصل بنا",
    address: "15 rue Lepic Paris 75018",
    mobileQuoteBtn: "طلب عرض سعر",
  },
  fr: {
    dir: "ltr",
    flag: "🇫🇷",
    name: "Français",
    home: "Accueil",
    about: "À propos",
    elec: "Électricité",
    paint: "Peinture",
    portfolio: "Réalisations",
    quote: "Devis",
    contact: "Contact",
    heroBadge: "👑 Experts à Paris depuis 2005",
    heroTitle:
      'Solutions d\'<span class="gold-text">Électricité & Peinture</span> à Paris',
    heroDesc:
      "Services d'électricité, peinture et finitions pour appartements parisiens et bureaux.",
    quoteBtn: "Demander un devis",
    contactBtn: "Contactez-nous",
    whyTitle: "Pourquoi NASA ?",
    whyItems: [
      {
        icon: "fa-medal",
        title: "20 ans d'expérience",
        desc: "Expertise parisienne",
      },
      {
        icon: "fa-shield-haltered",
        title: "Normes NF",
        desc: "Conformité stricte",
      },
      {
        icon: "fa-paint-roller",
        title: "Écolabel",
        desc: "Produits écologiques",
      },
      {
        icon: "fa-clock",
        title: "Délais respectés",
        desc: "Livraison à temps",
      },
    ],
    elecTitle: "Services Électriques",
    elecDesc: "Solutions électriques complètes.",
    elecList: [
      "Câblage complet",
      "Tableaux NF",
      "Éclairage intelligent",
      "Réseaux VDI",
      "Sécurité",
      "Maintenance",
      "Chauffage",
      "Consuel",
    ],
    paintTitle: "Services Peinture",
    paintDesc: "Peintures haut de gamme.",
    paintList: [
      "Intérieur luxe",
      "Extérieur",
      "Papier peint",
      "Effets décoratifs",
      "Sol époxy",
      "Rénovation",
      "Anti-humidité",
      "Conseil couleur",
    ],
    processTitle: "Processus",
    processSteps: ["Diagnostic", "Planification", "Réalisation", "Livraison"],
    portfolioTitle: "Nos Réalisations",
    portfolioDesc: "Détails complets de nos projets.",
    viewDetails: "Voir détails",
    hideDetails: "Masquer détails",
    projects: [
      {
        name: "Appartement – Champs-Élysées",
        location: "Paris 8",
        shortDesc: "Rénovation 200m²",
        fullDesc:
          "Rénovation complète avec éclairage intelligent et peintures de luxe.",
        tags: ["Smart", "Peinture"],
        images: 5,
        hasVideo: true,
      },
      {
        name: "Bureau – La Défense",
        location: "Courbevoie",
        shortDesc: "Éclairage intelligent",
        fullDesc: "Système d'éclairage connecté pour 500m² de bureaux.",
        tags: ["Éclairage", "Réseaux"],
        images: 3,
        hasVideo: false,
      },
    ],
    testimonialTitle: "Témoignages",
    testimonialDesc: "Avis de nos clients.",
    testimonials: [
      {
        text: "Travail professionnel. Je recommande.",
        author: "Marie Dubois",
        stars: 5,
      },
      {
        text: "Respect des délais. Magnifique.",
        author: "Pierre Laurent",
        stars: 5,
      },
    ],
    testimonialFormTitle: "Partagez votre expérience",
    testimonialFormName: "Nom",
    testimonialFormText: "Avis",
    testimonialFormRating: "Note",
    testimonialFormSubmit: "Envoyer",
    testimonialSuccess: "✅ Merci !",
    formName: "Nom",
    formPhone: "Téléphone",
    formEmail: "Email",
    formService: "Service",
    formCity: "Ville",
    formDetails: "Détails",
    formUpload: "Photos",
    formDate: "Date",
    submit: "Envoyer",
    successMsg: "✅ Envoyé !",
    contactTitle: "Contact",
    address: "15 rue Lepic Paris 75018",
    mobileQuoteBtn: "Devis",
  },
  en: {
    dir: "ltr",
    flag: "🇬🇧",
    name: "English",
    home: "Home",
    about: "About",
    elec: "Electrical",
    paint: "Painting",
    portfolio: "Portfolio",
    quote: "Quote",
    contact: "Contact",
    heroBadge: "👑 Paris Experts since 2005",
    heroTitle:
      'Professional <span class="gold-text">Electrical & Painting</span> in Paris',
    heroDesc:
      "Premium electrical, painting and finishing services for Parisian apartments and offices.",
    quoteBtn: "Request a Quote",
    contactBtn: "Contact Us",
    whyTitle: "Why NASA?",
    whyItems: [
      { icon: "fa-medal", title: "20 Years", desc: "Parisian expertise" },
      {
        icon: "fa-shield-haltered",
        title: "NF Standards",
        desc: "Strict compliance",
      },
      {
        icon: "fa-paint-roller",
        title: "Eco-friendly",
        desc: "Écolabel certified",
      },
      { icon: "fa-clock", title: "On Time", desc: "Guaranteed delivery" },
    ],
    elecTitle: "Electrical Services",
    elecDesc: "Complete electrical solutions.",
    elecList: [
      "Full Wiring",
      "NF Panels",
      "Smart Lighting",
      "VDI Networks",
      "Security",
      "Maintenance",
      "Heating",
      "Consuel",
    ],
    paintTitle: "Painting Services",
    paintDesc: "Premium eco-friendly paints.",
    paintList: [
      "Luxury Interior",
      "Exterior",
      "Wallpaper",
      "Decorative",
      "Epoxy",
      "Renovation",
      "Anti-humidity",
      "Color Advice",
    ],
    processTitle: "Process",
    processSteps: ["Inspection", "Planning", "Execution", "Delivery"],
    portfolioTitle: "Our Projects",
    portfolioDesc: "Full project details available.",
    viewDetails: "View Details",
    hideDetails: "Hide Details",
    projects: [
      {
        name: "Apartment – Champs-Élysées",
        location: "Paris 8",
        shortDesc: "Full renovation 200m²",
        fullDesc:
          "Complete renovation with smart lighting and luxury painting finishes.",
        tags: ["Smart", "Painting"],
        images: 5,
        hasVideo: true,
      },
      {
        name: "Office – La Défense",
        location: "Courbevoie",
        shortDesc: "Smart lighting 500m²",
        fullDesc: "Connected lighting system for 500m² office space.",
        tags: ["Lighting", "Networks"],
        images: 3,
        hasVideo: false,
      },
    ],
    testimonialTitle: "Testimonials",
    testimonialDesc: "What our clients say.",
    testimonials: [
      {
        text: "Professional work. Highly recommended.",
        author: "Marie Dubois",
        stars: 5,
      },
      {
        text: "Perfect timing. Beautiful.",
        author: "Pierre Laurent",
        stars: 5,
      },
    ],
    testimonialFormTitle: "Share Your Experience",
    testimonialFormName: "Name",
    testimonialFormText: "Review",
    testimonialFormRating: "Rating",
    testimonialFormSubmit: "Submit",
    testimonialSuccess: "✅ Thank you!",
    formName: "Full Name",
    formPhone: "Phone",
    formEmail: "Email",
    formService: "Service",
    formCity: "City",
    formDetails: "Details",
    formUpload: "Photos",
    formDate: "Date",
    submit: "Submit",
    successMsg: "✅ Submitted!",
    contactTitle: "Contact Us",
    address: "15 rue Lepic Paris 75018",
    mobileQuoteBtn: "Quote",
  },
};

let currentLang = "fr",
  currentPage = "home";
const pages = [
  "home",
  "about",
  "elec",
  "paint",
  "portfolio",
  "quote",
  "contact",
];
function t(k) {
  return translations[currentLang]?.[k] || k;
}

function updateDir() {
  document.documentElement.dir = t("dir");
  document.documentElement.lang = currentLang;
  document.getElementById("currentLangFlag").textContent = t("flag");
  document.getElementById("currentLangText").textContent = t("name");
  document
    .querySelectorAll(".lang-option")
    .forEach((o) =>
      o.classList.toggle("active", o.dataset.lang === currentLang),
    );
}

const langDropdown = document.getElementById("langDropdown");
document.getElementById("langToggle").addEventListener("click", (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle("open");
});
document.addEventListener("click", () => langDropdown.classList.remove("open"));
document.getElementById("langMenu").addEventListener("click", (e) => {
  const opt = e.target.closest(".lang-option");
  if (opt) {
    currentLang = opt.dataset.lang;
    updateDir();
    buildAll();
    renderPage();
    langDropdown.classList.remove("open");
  }
});

const mobileMenu = document.getElementById("mobileMenu"),
  mobileOverlay = document.getElementById("mobileOverlay");
function openM() {
  mobileMenu.classList.add("open");
  mobileOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeM() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("hamburgerBtn").addEventListener("click", openM);
document.getElementById("mobileClose").addEventListener("click", closeM);
mobileOverlay.addEventListener("click", closeM);

function buildMobileNav() {
  const c = document.getElementById("mobileNavLinks");
  c.innerHTML = pages
    .map(
      (p) =>
        `<a href="#" data-nav="${p}" class="${currentPage === p ? "active-link" : ""}">${t(p)}</a>`,
    )
    .join("");
  c.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(a.dataset.nav);
      closeM();
    }),
  );
  document.querySelector("#mobileMenu .btn-primary span").textContent =
    t("mobileQuoteBtn");
}
function buildDesktopNav() {
  document.getElementById("mainNav").innerHTML = pages
    .map(
      (p) =>
        `<a href="#" data-nav="${p}" class="${currentPage === p ? "active-link" : ""}">${t(p)}</a>`,
    )
    .join("");
  document.getElementById("ctaBtn").querySelector("span").textContent =
    t("quoteBtn");
  document.querySelectorAll("[data-nav]").forEach((el) => {
    if (!el.dataset.bound) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(el.dataset.nav);
      });
      el.dataset.bound = "1";
    }
  });
}
function buildFooter() {
  document.getElementById("footerLinksTitle").textContent =
    currentLang === "ar"
      ? "روابط سريعة"
      : currentLang === "fr"
        ? "Liens Rapides"
        : "Quick Links";
  const fl = document.getElementById("footerLinks");
  fl.innerHTML = pages
    .map((p) => `<a href="#" data-nav="${p}">${t(p)}</a>`)
    .join("");
  fl.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(a.dataset.nav);
    }),
  );
}
function buildAll() {
  buildDesktopNav();
  buildMobileNav();
  buildFooter();
}

function renderStars(n) {
  return Array.from(
    { length: 5 },
    (_, i) =>
      `<i class="fas fa-star" style="color:${i < n ? "var(--gold)" : "#555"};"></i>`,
  ).join("");
}

function renderPage() {
  const c = document.getElementById("pageContent");
  let h = "";
  if (currentPage === "home") {
    h = `<div class="hero"><div class="container"><div class="hero-content"><div class="hero-badge">${t("heroBadge")}</div><h1>${t("heroTitle")}</h1><p>${t("heroDesc")}</p><div class="hero-buttons"><a href="#" class="btn-primary" data-nav="quote"><i class="fas fa-calculator"></i> ${t("quoteBtn")}</a><a href="#" class="btn-outline-white" data-nav="contact"><i class="fas fa-phone"></i> ${t("contactBtn")}</a></div></div></div></div>
    <section><div class="container"><div class="section-header"><h2 class="section-title">${t("whyTitle")}</h2></div><div class="grid-4">${t(
      "whyItems",
    )
      .map(
        (i) =>
          `<div class="card" style="text-align:center;"><div class="card-icon" style="margin:0 auto 12px;background:var(--navy);color:var(--gold);"><i class="fas ${i.icon}"></i></div><h3>${i.title}</h3><p>${i.desc}</p></div>`,
      )
      .join("")}</div></div></section>
    <section class="bg-cream"><div class="container"><div class="section-header"><h2 class="section-title">${t("portfolioTitle")}</h2><p class="section-desc">${t("portfolioDesc")}</p></div><div class="grid-2" id="homeProjects"></div></div></section>
    <section><div class="container"><div class="section-header"><h2 class="section-title">${t("testimonialTitle")}</h2></div><div class="grid-3">${t(
      "testimonials",
    )
      .map(
        (tm) =>
          `<div class="testimonial-card"><div class="stars">${renderStars(tm.stars)}</div><p>"${tm.text}"</p><div class="author">— ${tm.author}</div></div>`,
      )
      .join("")}</div>
    <div class="testimonial-form"><h3>${t("testimonialFormTitle")}</h3><form id="testimonialForm"><div class="form-group"><label>${t("testimonialFormName")}</label><input required></div><div class="form-group"><label>${t("testimonialFormText")}</label><textarea rows="3" required></textarea></div><div class="form-group"><label>${t("testimonialFormRating")}</label><select>${[5, 4, 3, 2, 1].map((n) => `<option>${n} ⭐</option>`).join("")}</select></div><button type="submit" class="submit-btn">${t("testimonialFormSubmit")}</button><p id="testimonialSuccess" style="color:green;text-align:center;display:none;margin-top:8px;">${t("testimonialSuccess")}</p></form></div></div></section>`;
  } else if (currentPage === "about") {
    h = `<section><div class="container"><div class="section-header"><h2 class="section-title">${t("about")}</h2></div><p style="max-width:700px;margin:0 auto;text-align:center;">تأسست NASA في باريس عام 2005 على يد أمهر الحرفيين الفرنسيين.</p></div></section>`;
  } else if (currentPage === "elec") {
    h = `<section><div class="container"><div class="section-header"><h2 class="section-title">${t("elecTitle")}</h2><p class="section-desc">${t("elecDesc")}</p></div><div class="grid-2">${t(
      "elecList",
    )
      .map(
        (i) =>
          `<div class="card"><i class="fas fa-bolt" style="color:var(--gold);margin-${t("dir") === "rtl" ? "left" : "right"}:8px;"></i> ${i}</div>`,
      )
      .join(
        "",
      )}</div><div class="section-header" style="margin-top:40px;"><h2 class="section-title">${t("processTitle")}</h2></div><div class="grid-4">${t(
      "processSteps",
    )
      .map(
        (s, i) =>
          `<div class="process-step"><div class="process-number">${i + 1}</div><h4>${s}</h4></div>`,
      )
      .join("")}</div></div></section>`;
  } else if (currentPage === "paint") {
    h = `<section><div class="container"><div class="section-header"><h2 class="section-title">${t("paintTitle")}</h2><p class="section-desc">${t("paintDesc")}</p></div><div class="grid-2">${t(
      "paintList",
    )
      .map(
        (i) =>
          `<div class="card"><i class="fas fa-paint-roller" style="color:var(--gold);margin-${t("dir") === "rtl" ? "left" : "right"}:8px;"></i> ${i}</div>`,
      )
      .join("")}</div></div></section>`;
  } else if (currentPage === "portfolio") {
    h = `<section><div class="container"><div class="section-header"><h2 class="section-title">${t("portfolioTitle")}</h2><p class="section-desc">${t("portfolioDesc")}</p></div><div class="grid-2" id="fullPortfolio"></div></div></section>`;
  } else if (currentPage === "quote") {
    h = `<section><div class="container"><div class="form-card"><div class="section-header"><h2 class="section-title">${t("quote")}</h2></div><form id="quoteForm"><div class="form-group"><label>${t("formName")}</label><input required></div><div class="form-group"><label>${t("formPhone")}</label><input type="tel" required></div><div class="form-group"><label>${t("formEmail")}</label><input type="email"></div><div class="form-group"><label>${t("formService")}</label><select><option>${t("elec")}</option><option>${t("paint")}</option><option>${t("elec")} + ${t("paint")}</option></select></div><div class="form-group"><label>${t("formCity")}</label><input placeholder="Paris"></div><div class="form-group"><label>${t("formDetails")}</label><textarea rows="3"></textarea></div><div class="form-group"><label>${t("formUpload")}</label><input type="file"></div><div class="form-group"><label>${t("formDate")}</label><input type="date"></div><button type="submit" class="submit-btn">${t("submit")}</button><p id="formSuccess" style="color:green;text-align:center;display:none;margin-top:12px;">${t("successMsg")}</p></form></div></div></section>`;
  } else if (currentPage === "contact") {
    h = `<section><div class="container"><div class="section-header"><h2 class="section-title">${t("contactTitle")}</h2></div><div class="grid-2"><div class="card"><h3>NASA</h3><p><i class="fas fa-map-marker-alt"></i> ${t("address")}</p><p><i class="fas fa-phone"></i> +33651545129</p><p><i class="fas fa-envelope"></i> nasabatiment75@gmail.com</p></div><div class="card" style="min-height:250px;display:flex;align-items:center;justify-content:center;background:var(--gray-100);">🗺️ Google Maps – Paris</div></div></div></section>`;
  }
  c.innerHTML = h;
  c.className = "active-page container";

  // Render project cards
  const projectsContainer =
    document.getElementById("homeProjects") ||
    document.getElementById("fullPortfolio");
  if (projectsContainer) {
    projectsContainer.innerHTML = t("projects")
      .map(
        (p, i) => `
      <div class="project-card">
        <div class="project-thumb">
          <div class="thumb-placeholder"><i class="fas fa-image"></i></div>
          <div class="media-badge"><i class="fas ${p.hasVideo ? "fa-video" : "fa-camera"}"></i> ${p.images} ${p.hasVideo ? "+ فيديو" : ""}</div>
        </div>
        <div class="project-preview">
          <h3>${p.name}</h3>
          <div class="location"><i class="fas fa-map-marker-alt"></i> ${p.location}</div>
          <p class="short-desc">${p.shortDesc}</p>
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px;">${p.tags.map((tg) => `<span class="tag">${tg}</span>`).join("")}</div>
          <button class="btn-details" data-project="${i}">
            <span>${t("viewDetails")}</span> <i class="fas fa-chevron-down"></i>
          </button>
        </div>
        <div class="project-details" id="projectDetail${i}">
          <p style="margin-bottom:12px;">${p.fullDesc}</p>
          <div class="detail-info">
            <p><i class="fas fa-map-marker-alt"></i> <strong>${currentLang === "ar" ? "الموقع" : "Location"}:</strong> ${p.location}</p>
            <p><i class="fas fa-tools"></i> <strong>${currentLang === "ar" ? "نوع المشروع" : "Type"}:</strong> ${p.tags.join("، ")}</p>
          </div>
          <h4 style="margin:12px 0 8px;">${currentLang === "ar" ? "معرض الصور" : "Gallery"}</h4>
          <div class="detail-gallery">
            ${Array.from({ length: p.images }, (_, j) => `<div class="gallery-item"><i class="fas fa-image"></i></div>`).join("")}
            ${p.hasVideo ? `<div class="gallery-item video-item"><div class="play-icon"><i class="fas fa-play"></i></div></div>` : ""}
          </div>
        </div>
      </div>
    `,
      )
      .join("");

    // Bind toggle buttons
    projectsContainer.querySelectorAll(".btn-details").forEach((btn) => {
      btn.addEventListener("click", function () {
        const idx = this.dataset.project;
        const detail = document.getElementById("projectDetail" + idx);
        const isOpen = detail.classList.contains("open");
        detail.classList.toggle("open");
        this.classList.toggle("expanded");
        this.querySelector("span").textContent = isOpen
          ? t("viewDetails")
          : t("hideDetails");
      });
    });
  }

  bindContentLinks();
  document.getElementById("quoteForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formSuccess").style.display = "block";
  });
  document
    .getElementById("testimonialForm")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("testimonialSuccess").style.display = "block";
    });
}

function bindContentLinks() {
  document.querySelectorAll("#pageContent [data-nav]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.nav);
    }),
  );
}
function navigateTo(p) {
  if (pages.includes(p)) {
    currentPage = p;
    renderPage();
    buildDesktopNav();
    buildMobileNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

updateDir();
buildAll();
renderPage();
