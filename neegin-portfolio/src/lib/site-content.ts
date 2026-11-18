import portrait from "@/assets/negina-portrait.jpg.asset.json";
import workspace from "@/assets/negina-workspace.jpg.asset.json";
import logoMark from "@/assets/logo-mark.png.asset.json";
import resumePdf from "@/assets/negina-majid-resume.pdf.asset.json";
import ariana from "@/assets/ariana-business-card.jpg.asset.json";
import beauty from "@/assets/beauty-poster.jpg.asset.json";
import bmw from "@/assets/bmw-m4-poster.jpg.asset.json";
import cafeteria from "@/assets/cafeteria-kabul.jpg.asset.json";
import yonalitaVideo from "@/assets/yonalita-poster.mp4.asset.json";
import yonalitaPoster from "@/assets/yonalita-poster.jpg.asset.json";
import zebVideo from "@/assets/zeb-store.mp4.asset.json";
import zebPoster from "@/assets/zeb-store-poster.jpg.asset.json";

export type Lang = "en" | "fa";
type T = { en: string; fa: string };

export const media = {
  portrait: portrait.url,
  workspace: workspace.url,
  logo: logoMark.url,
  resume: resumePdf.url,
};

export const contact = {
  phoneDisplay: "+93 744 516 043",
  phoneTel: "+93744516043",
  whatsappNumber: "93744516043",
  email: "neginamajid@gmail.com",
  linkedin: "https://www.linkedin.com/in/negina-majid-427507425",
  location: { en: "Kabul, Afghanistan", fa: "کابل، افغانستان" } as T,
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const navItems = [
  { id: "home", label: { en: "Home", fa: "خانه" } },
  { id: "about", label: { en: "About", fa: "درباره من" } },
  { id: "services", label: { en: "Services", fa: "خدمات" } },
  { id: "portfolio", label: { en: "Portfolio", fa: "نمونه کارها" } },
  { id: "experience", label: { en: "Experience", fa: "تجربه" } },
  { id: "contact", label: { en: "Contact", fa: "تماس" } },
] satisfies { id: string; label: T }[];

export const ui = {
  en: {
    brandTag: "Web & Graphic Design",
    resume: "Resume",
    downloadResume: "Download resume",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    available: "Available for freelance & full-time work",
    hello: "Hi, I'm",
    name: "Negina Majid",
    iAm: "I'm a",
    roles: ["Full-Stack Web Developer", "UI/UX Designer", "Graphic Designer", "Freelancing Trainer"],
    heroText:
      "I design and build modern, responsive websites and eye-catching visuals that help brands look professional and connect with their customers.",
    seeWork: "See my work",
    hireMe: "Let's talk",
    floatA: ["Web Developer", "React · Django"],
    floatB: ["Graphic Designer", "Photoshop · Illustrator"],
    portraitAlt: "Portrait of Negina Majid, web developer and graphic designer, at her desk",
    stats: ["Work roles", "Courses completed", "Languages spoken", "Featured projects"],
    aboutEyebrow: "About me",
    aboutTitle: "Creative designer, careful developer",
    aboutP1:
      "I am a motivated and creative Full-Stack Web Developer and UI/UX Graphic Designer from Kabul. I create visually appealing content and user-friendly websites, from posters and brand identities to responsive web apps.",
    aboutP2:
      "I'm a fast learner, responsible, and comfortable working independently or with a team. I'm always improving my skills and love helping businesses grow online.",
    workspaceAlt: "Negina working on a laptop surrounded by digital marketing icons",
    facts: { location: "Location", email: "Email", degree: "Degree", degreeVal: "Bachelor, Kabul University of Education", freelance: "Freelance", freelanceVal: "Upwork · Fiverr · Freelancer" },
    languagesTitle: "Languages",
    servicesEyebrow: "What I do",
    servicesTitle: "Services that make your brand stand out",
    servicesLead: "From the first sketch to a live website, I handle design and development with care.",
    skillsTitle: "Tools & skills",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Selected work",
    portfolioLead: "Posters, branding, motion and websites I've designed and built. Click any project to see it bigger.",
    filters: { all: "All", graphic: "Graphic design", web: "Web", video: "Video" },
    view: "View project",
    play: "Watch video",
    visit: "Visit website",
    close: "Close",
    prev: "Previous",
    next: "Next",
    of: "of",
    experienceEyebrow: "Career",
    experienceTitle: "Experience & education",
    workTitle: "Work experience",
    eduTitle: "Education & courses",
    showMore: "Show more",
    showLess: "Show less",
    contactEyebrow: "Contact",
    contactTitle: "Let's build something great together",
    contactLead: "Send a message and I'll reply by email, or reach me instantly on WhatsApp.",
    callMe: "Call me",
    whatsapp: "WhatsApp",
    chatNow: "Chat with me now",
    emailMe: "Email",
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone",
      optional: "(optional)",
      subject: "Subject",
      message: "Your message",
      namePh: "Your name",
      emailPh: "you@example.com",
      phonePh: "+93 7XX XXX XXX",
      subjectPh: "Website, logo, poster…",
      messagePh: "Tell me about your project…",
      send: "Send message",
      sending: "Sending…",
      sendWa: "Send on WhatsApp",
      success: "Thank you! Your message was sent. I'll get back to you soon.",
      error: "Sorry, the message could not be sent. Please try again or contact me on WhatsApp.",
      errors: {
        nameRequired: "Please enter your name.",
        nameShort: "Name must be at least 2 characters.",
        emailRequired: "Please enter your email.",
        emailInvalid: "Please enter a valid email address.",
        phoneInvalid: "Please enter a valid phone number.",
        messageRequired: "Please write a message.",
        messageShort: "Message must be at least 10 characters.",
        tooLong: "This is too long.",
      },
    },
    waGreeting: "Hello Negina! I saw your portfolio and I'd like to talk about a project.",
    footerText: "Full-Stack Web Developer & UI/UX Graphic Designer creating modern websites and memorable visuals.",
    quickLinks: "Quick links",
    getInTouch: "Get in touch",
    rights: "All rights reserved.",
    madeWith: "Designed & built by Negina Majid",
    backToTop: "Back to top",
  },
  fa: {
    brandTag: "طراحی وب و گرافیک",
    resume: "رزومه",
    downloadResume: "دانلود رزومه",
    openMenu: "باز کردن منو",
    closeMenu: "بستن منو",
    toDark: "حالت تاریک",
    toLight: "حالت روشن",
    available: "آماده همکاری آزاد و تمام‌وقت",
    hello: "سلام، من",
    name: "نگینه مجید",
    iAm: "هستم",
    roles: ["توسعه‌دهنده وب فول‌استک", "طراح UI/UX", "طراح گرافیک", "مربی فریلنسینگ"],
    heroText:
      "وب‌سایت‌های مدرن و واکنش‌گرا و طرح‌های چشم‌نواز می‌سازم که به برند شما چهره‌ای حرفه‌ای می‌دهد و آن را به مشتریانش نزدیک‌تر می‌کند.",
    seeWork: "دیدن نمونه کارها",
    hireMe: "با من گفتگو کنید",
    floatA: ["توسعه‌دهنده وب", "React · Django"],
    floatB: ["طراح گرافیک", "Photoshop · Illustrator"],
    portraitAlt: "تصویر نگینه مجید، توسعه‌دهنده وب و طراح گرافیک، پشت میز کار",
    stats: ["سابقه کاری", "دوره‌های آموزشی", "زبان‌ها", "پروژه‌های منتخب"],
    aboutEyebrow: "درباره من",
    aboutTitle: "طراح خلاق، برنامه‌نویس دقیق",
    aboutP1:
      "من یک توسعه‌دهنده وب فول‌استک و طراح گرافیک UI/UX از کابل هستم. از پوستر و هویت بصری برند تا وب‌سایت‌های واکنش‌گرا، محتوای زیبا و کاربرپسند طراحی می‌کنم.",
    aboutP2:
      "سریع یاد می‌گیرم، مسئولیت‌پذیر هستم و هم به‌تنهایی و هم در تیم به‌خوبی کار می‌کنم. همیشه مهارت‌هایم را بهتر می‌سازم و دوست دارم به رشد آنلاین کسب‌وکارها کمک کنم.",
    workspaceAlt: "نگینه در حال کار با لپ‌تاپ در کنار نمادهای بازاریابی دیجیتال",
    facts: { location: "موقعیت", email: "ایمیل", degree: "مدرک", degreeVal: "لیسانس، پوهنتون تعلیم و تربیه کابل", freelance: "فریلنس", freelanceVal: "Upwork · Fiverr · Freelancer" },
    languagesTitle: "زبان‌ها",
    servicesEyebrow: "کار من",
    servicesTitle: "خدماتی که برند شما را متمایز می‌کند",
    servicesLead: "از اولین طرح تا وب‌سایت آماده، طراحی و برنامه‌نویسی را با دقت انجام می‌دهم.",
    skillsTitle: "ابزارها و مهارت‌ها",
    portfolioEyebrow: "نمونه کارها",
    portfolioTitle: "کارهای منتخب",
    portfolioLead: "پوسترها، برندینگ، ویدیو و وب‌سایت‌هایی که طراحی و ساخته‌ام. برای دیدن بزرگ‌تر روی هر پروژه کلیک کنید.",
    filters: { all: "همه", graphic: "طراحی گرافیک", web: "وب", video: "ویدیو" },
    view: "دیدن پروژه",
    play: "دیدن ویدیو",
    visit: "رفتن به وب‌سایت",
    close: "بستن",
    prev: "قبلی",
    next: "بعدی",
    of: "از",
    experienceEyebrow: "مسیر کاری",
    experienceTitle: "تجربه و تحصیلات",
    workTitle: "تجربه کاری",
    eduTitle: "تحصیلات و دوره‌ها",
    showMore: "نمایش بیشتر",
    showLess: "نمایش کمتر",
    contactEyebrow: "تماس",
    contactTitle: "بیایید با هم چیزی عالی بسازیم",
    contactLead: "پیام بفرستید تا از طریق ایمیل پاسخ بدهم، یا همین حالا در واتس‌اپ با من در تماس شوید.",
    callMe: "تماس تلفنی",
    whatsapp: "واتس‌اپ",
    chatNow: "همین حالا گفتگو کنید",
    emailMe: "ایمیل",
    form: {
      name: "نام کامل",
      email: "آدرس ایمیل",
      phone: "شماره تلفن",
      optional: "(اختیاری)",
      subject: "موضوع",
      message: "پیام شما",
      namePh: "نام شما",
      emailPh: "you@example.com",
      phonePh: "+93 7XX XXX XXX",
      subjectPh: "وب‌سایت، لوگو، پوستر…",
      messagePh: "درباره پروژه خود بنویسید…",
      send: "ارسال پیام",
      sending: "در حال ارسال…",
      sendWa: "ارسال در واتس‌اپ",
      success: "تشکر! پیام شما ارسال شد. به‌زودی پاسخ می‌دهم.",
      error: "متأسفانه پیام ارسال نشد. لطفاً دوباره تلاش کنید یا در واتس‌اپ پیام بدهید.",
      errors: {
        nameRequired: "لطفاً نام خود را بنویسید.",
        nameShort: "نام باید حداقل ۲ حرف باشد.",
        emailRequired: "لطفاً ایمیل خود را بنویسید.",
        emailInvalid: "لطفاً یک ایمیل درست بنویسید.",
        phoneInvalid: "لطفاً یک شماره تلفن درست بنویسید.",
        messageRequired: "لطفاً پیام خود را بنویسید.",
        messageShort: "پیام باید حداقل ۱۰ حرف باشد.",
        tooLong: "متن خیلی طولانی است.",
      },
    },
    waGreeting: "سلام نگینه جان! نمونه کارهای شما را دیدم و می‌خواهم درباره یک پروژه صحبت کنم.",
    footerText: "توسعه‌دهنده وب فول‌استک و طراح گرافیک UI/UX؛ سازنده وب‌سایت‌های مدرن و طرح‌های ماندگار.",
    quickLinks: "پیوندهای سریع",
    getInTouch: "در تماس باشید",
    rights: "تمام حقوق محفوظ است.",
    madeWith: "طراحی و ساخت: نگینه مجید",
    backToTop: "بازگشت به بالا",
  },
};

export type UiStrings = (typeof ui)["en"];

export const stats = [
  { value: 6, suffix: "+" },
  { value: 9, suffix: "" },
  { value: 4, suffix: "" },
  { value: 7, suffix: "+" },
];

export const spokenLanguages = [
  { name: { en: "Dari", fa: "دری" }, level: { en: "Excellent", fa: "عالی" }, pct: 100 },
  { name: { en: "English", fa: "انگلیسی" }, level: { en: "Very good", fa: "خیلی خوب" }, pct: 85 },
  { name: { en: "Urdu", fa: "اردو" }, level: { en: "Very good", fa: "خیلی خوب" }, pct: 80 },
  { name: { en: "Pashto", fa: "پښتو" }, level: { en: "Good", fa: "خوب" }, pct: 65 },
];

export const services = [
  {
    icon: "palette",
    title: { en: "Graphic Design", fa: "طراحی گرافیک" },
    text: { en: "Posters, social media designs, banners, business cards and brand identity that people remember.", fa: "پوستر، طرح‌های شبکه‌های اجتماعی، بنر، کارت ویزیت و هویت بصری ماندگار برای برند شما." },
  },
  {
    icon: "code",
    title: { en: "Web Development", fa: "برنامه‌نویسی وب" },
    text: { en: "Fast, responsive websites with React on the front and Python/Django and databases on the back.", fa: "وب‌سایت‌های سریع و واکنش‌گرا با React در بخش ظاهری و Python/Django و دیتابیس در بخش سرور." },
  },
  {
    icon: "layout",
    title: { en: "UI/UX Design", fa: "طراحی UI/UX" },
    text: { en: "Clean, user-friendly interfaces based on Google UX design foundations, tested across browsers.", fa: "رابط‌های کاربری تمیز و آسان بر پایه اصول طراحی تجربه کاربری گوگل، آزمایش‌شده در همه مرورگرها." },
  },
  {
    icon: "users",
    title: { en: "Freelancing Training", fa: "آموزش فریلنسینگ" },
    text: { en: "Teaching students how to find online work on Upwork, Fiverr, Freelancer and LinkedIn.", fa: "آموزش پیدا کردن کار آنلاین در Upwork، Fiverr، Freelancer و LinkedIn برای شاگردان." },
  },
];

export const skillGroups = [
  { title: { en: "Design", fa: "طراحی" }, items: ["Photoshop", "Illustrator", "Canva", "Posters", "Social media", "Banners", "Branding"] },
  { title: { en: "Front-end", fa: "فرانت‌اند" }, items: ["HTML", "CSS", "JavaScript", "React", "Responsive design", "Cross-browser testing"] },
  { title: { en: "Back-end", fa: "بک‌اند" }, items: ["Python", "Django", "MySQL", "REST APIs", "Git & GitHub"] },
  { title: { en: "AI tools", fa: "ابزارهای هوش مصنوعی" }, items: ["ChatGPT", "Gemini", "Lovable", "HeyGen", "Gamma", "Runway", "Topview", "Mocha", "Emergent AI"] },
];

export type WorkCategory = "graphic" | "web" | "video";
export type Work = {
  id: string;
  kind: "image" | "video" | "code";
  src?: string;
  poster?: string;
  category: WorkCategory[];
  layout?: "wide" | "full";
  title: T;
  client: T;
  text: T;
  tags: string[];
  link?: string;
  alt: T;
};

export const works: Work[] = [
  {
    id: "yonalita",
    kind: "video",
    src: yonalitaVideo.url,
    poster: yonalitaPoster.url,
    category: ["video", "graphic"],
    title: { en: "Yonalita AI & Robotics Poster", fa: "پوستر Yonalita AI & Robotics" },
    client: { en: "Yonalita AI & Robotics", fa: "Yonalita AI & Robotics" },
    text: {
      en: "A futuristic poster and motion mockup for an AI & robotics academy, with glowing circuits and a holographic human figure.",
      fa: "پوستر و ویدیوی تبلیغاتی آینده‌نگر برای آکادمی هوش مصنوعی و رباتیک، با مدارهای درخشان و پیکر هولوگرافیک انسان.",
    },
    tags: ["Photoshop", "Motion", "Poster"],
    alt: { en: "Video of a blue AI and robotics poster hanging on a wall", fa: "ویدیوی پوستر آبی هوش مصنوعی و رباتیک روی دیوار" },
  },
  {
    id: "ariana",
    kind: "image",
    src: ariana.url,
    category: ["graphic"],
    layout: "wide",
    title: { en: "Ariana Medical Complex Business Card", fa: "کارت ویزیت مجتمع طبی آریانا" },
    client: { en: "Ariana Medical Complex", fa: "مجتمع طبی آریانا" },
    text: {
      en: "A bilingual English/Dari business card for an orthopedic surgeon, with a geometric red, teal and navy layout and QR code.",
      fa: "کارت ویزیت دو زبانه انگلیسی و دری برای داکتر جراح ارتوپیدی، با طرح هندسی قرمز، فیروزه‌ای و سرمه‌ای و کد QR.",
    },
    tags: ["Branding", "Print", "Bilingual"],
    alt: { en: "Two business cards for Dr. Ab. Waleed Yousufzai of Ariana Medical Complex, in English and Dari", fa: "دو کارت ویزیت داکتر عبدالولید یوسفزی از مجتمع طبی آریانا به انگلیسی و دری" },
  },
  {
    id: "zeb",
    kind: "video",
    src: zebVideo.url,
    poster: zebPoster.url,
    category: ["web", "video"],
    layout: "wide",
    title: { en: "Zeb Online Store", fa: "فروشگاه آنلاین Zeb" },
    client: { en: "Zeb — leather & accessories", fa: "Zeb — چرم و اکسسوری" },
    text: {
      en: "An e-commerce website for a leather goods brand: best-seller grid, product cards and smooth browsing, built in React.",
      fa: "وب‌سایت فروشگاهی برای برند محصولات چرمی: نمایش پرفروش‌ترین‌ها، کارت محصولات و مرور آسان، ساخته‌شده با React.",
    },
    tags: ["React", "E-commerce", "Responsive"],
    alt: { en: "Screen recording of the Zeb online store showing leather wallets, bags and belts", fa: "فیلم صفحه فروشگاه آنلاین Zeb با کیف، کمربند و بکس‌های چرمی" },
  },
  {
    id: "beauty",
    kind: "image",
    src: beauty.url,
    category: ["graphic"],
    title: { en: "“Everything Has Beauty” Poster", fa: "پوستر «هر چیزی زیبایی دارد»" },
    client: { en: "Personal project", fa: "پروژه شخصی" },
    text: {
      en: "An editorial typography poster mixing a pencil-sketch portrait with bold condensed type and a red accent stripe.",
      fa: "پوستر تایپوگرافی با ترکیب چهره طراحی‌شده با مداد، حروف درشت و یک نوار قرمز برجسته.",
    },
    tags: ["Typography", "Photoshop", "Poster"],
    alt: { en: "Black and white sketch portrait poster with the words Everything has beauty but not everyone sees it", fa: "پوستر سیاه و سفید چهره با جمله هر چیزی زیبایی دارد اما همه آن را نمی‌بینند" },
  },
  {
    id: "bmw",
    kind: "image",
    src: bmw.url,
    category: ["graphic"],
    title: { en: "BMW M4 Car Poster", fa: "پوستر موتر BMW M4" },
    client: { en: "Concept design", fa: "طرح مفهومی" },
    text: {
      en: "A pastel neon car poster with glowing lettering, a mirrored reflection and elegant serif copy.",
      fa: "پوستر موتر با رنگ‌های ملایم نئونی، حروف درخشان، بازتاب آینه‌ای و متن شیک.",
    },
    tags: ["Photoshop", "Poster", "Automotive"],
    alt: { en: "Poster of a white BMW M4 on a pink background with large glowing BMW letters", fa: "پوستر موتر سفید BMW M4 روی زمینه صورتی با حروف بزرگ درخشان" },
  },
  {
    id: "cafeteria",
    kind: "image",
    src: cafeteria.url,
    category: ["web"],
    layout: "wide",
    link: "https://cafeteriakabul.netlify.app",
    title: { en: "The Cafeteria Restaurant Website", fa: "وب‌سایت رستورانت کافتریا" },
    client: { en: "The Cafeteria, Kabul", fa: "کافتریا، کابل" },
    text: {
      en: "A responsive, visually engaging restaurant website where customers explore the menu, make reservations and connect with the restaurant.",
      fa: "وب‌سایت واکنش‌گرا و جذاب رستورانت که مشتریان می‌توانند منو را ببینند، میز رزرو کنند و با رستورانت در تماس شوند.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    alt: { en: "Homepage of The Cafeteria Restaurant website with a chef seasoning a pan", fa: "صفحه اصلی وب‌سایت رستورانت کافتریا با تصویر آشپز" },
  },
  {
    id: "faculty",
    kind: "code",
    category: ["web"],
    layout: "full",
    title: { en: "Faculty Management System", fa: "سیستم مدیریت پوهنځی" },
    client: { en: "University project", fa: "پروژه پوهنتون" },
    text: {
      en: "A web application built with React (create-react-app) to manage faculty members, departments and academic records.",
      fa: "یک برنامه تحت وب ساخته‌شده با React برای مدیریت استادان، دیپارتمنت‌ها و اسناد علمی پوهنځی.",
    },
    tags: ["React", "Dashboard", "CRUD"],
    alt: { en: "Faculty Management System project card", fa: "کارت پروژه سیستم مدیریت پوهنځی" },
  },
];

export const experience = [
  {
    year: "2026",
    title: { en: "Freelancing Trainer & Call Center Manager", fa: "مربی فریلنسینگ و مدیر کال سنتر" },
    org: { en: "Momand Prime World — Kabul Crown Building", fa: "مومند پرایم ورلد — تعمیر کراون کابل" },
    text: {
      en: "Taught freelancing skills, guided students to online work, managed call center operations, registrations and team communication.",
      fa: "آموزش مهارت‌های فریلنسینگ، راهنمایی شاگردان برای کار آنلاین، مدیریت کال سنتر، ثبت‌نام‌ها و هماهنگی تیم.",
    },
  },
  {
    year: "2026",
    title: { en: "Graphic Designer & Web Developer", fa: "طراح گرافیک و برنامه‌نویس وب" },
    org: { en: "Aria Ecom Solutions — Kart-e-Char", fa: "آریا ای‌کام سولوشنز — کارته چهار" },
    text: {
      en: "Created professional graphics, developed responsive websites and engaging digital content while keeping brand consistency.",
      fa: "طراحی گرافیک حرفه‌ای، ساخت وب‌سایت‌های واکنش‌گرا و محتوای دیجیتال جذاب با حفظ هویت برند.",
    },
  },
  {
    year: "2025 – 2026",
    title: { en: "Graphic Designer (Remote)", fa: "طراح گرافیک (از راه دور)" },
    org: { en: "CS LINK Employment Services", fa: "CS LINK Employment Services" },
    text: {
      en: "Designed digital and promotional materials for an employment services company, working fully online.",
      fa: "طراحی محتوای دیجیتال و تبلیغاتی برای یک شرکت خدمات استخدامی به‌صورت کاملاً آنلاین.",
    },
  },
  {
    year: "2025",
    title: { en: "Graphic Designer", fa: "طراح گرافیک" },
    org: { en: "Yonalita AI & Robotics — Charahi-Shahed", fa: "یونالیتا AI & Robotics — چهارراهی شهید" },
    text: {
      en: "Designed posters, social media graphics, banners and promotional materials, meeting deadlines with the team.",
      fa: "طراحی پوستر، گرافیک شبکه‌های اجتماعی، بنر و مواد تبلیغاتی همراه با تیم و در زمان مشخص.",
    },
  },
  {
    year: "2020",
    title: { en: "Receptionist", fa: "مسئول پذیرش" },
    org: { en: "Parsa Clinic — Kart-e-Parwan", fa: "کلینیک پارسا — کارته پروان" },
    text: {
      en: "Managed the front desk, greeted patients, scheduled appointments and handled phone calls.",
      fa: "مدیریت میز پذیرش، استقبال از مریضان، تنظیم وقت ملاقات‌ها و پاسخ به تماس‌ها.",
    },
  },
  {
    year: "2018 – 2019",
    title: { en: "English Teacher", fa: "استاد زبان انگلیسی" },
    org: { en: "Rad Educational Center — Kart-e-Parwan", fa: "مرکز آموزشی راد — کارته پروان" },
    text: {
      en: "Taught basic English language skills to beginner-level students.",
      fa: "آموزش مهارت‌های پایه زبان انگلیسی به شاگردان سطح ابتدایی.",
    },
  },
];

export const education = [
  { year: "2018–22", title: { en: "Bachelor's degree", fa: "لیسانس" }, org: { en: "Kabul University of Education — Faculty of Physical Education & Sports Sciences", fa: "پوهنتون تعلیم و تربیه کابل — پوهنځی تربیت بدنی و علوم ورزشی" } },
  { year: "2026", title: { en: "Foundations of UX Design & Python", fa: "مبانی طراحی تجربه کاربری و Python" }, org: { en: "Google · Coursera", fa: "Google · Coursera" } },
  { year: "2026", title: { en: "Introduction to Microsoft Copilot", fa: "آشنایی با Microsoft Copilot" }, org: { en: "Microsoft · Coursera", fa: "Microsoft · Coursera" } },
  { year: "2026", title: { en: "Front-End Web Development & Freelancing", fa: "برنامه‌نویسی فرانت‌اند و فریلنسینگ" }, org: { en: "Top in Town Technology", fa: "Top in Town Technology" } },
  { year: "2025", title: { en: "Graphic Design (Photoshop, Illustrator, Canva)", fa: "طراحی گرافیک (Photoshop، Illustrator، Canva)" }, org: { en: "Afghanistan Online Academy", fa: "اکادمی آنلاین افغانستان" } },
  { year: "2025", title: { en: "Database Development (MySQL)", fa: "توسعه دیتابیس (MySQL)" }, org: { en: "Top in Town Technology", fa: "Top in Town Technology" } },
  { year: "2024", title: { en: "Full-Stack Web Development", fa: "برنامه‌نویسی وب فول‌استک" }, org: { en: "Afghan Cosmos and Solutions", fa: "Afghan Cosmos and Solutions" } },
  { year: "2019–20", title: { en: "English — Intermediate Interchange", fa: "زبان انگلیسی — سطح متوسط Interchange" }, org: { en: "LLC English Program Alumni", fa: "LLC English Program Alumni" } },
  { year: "2017", title: { en: "English Language (DEL)", fa: "زبان انگلیسی (DEL)" }, org: { en: "Rad Academy · Embassy of Pakistan, Kabul", fa: "اکادمی راد · سفارت پاکستان در کابل" } },
  { year: "2017", title: { en: "High School Diploma", fa: "دیپلوم لیسه" }, org: { en: "Ghazi Muhammad Ayub Khan High School", fa: "لیسه غازی محمد ایوب خان" } },
];
