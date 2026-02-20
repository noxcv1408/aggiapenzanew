export type Lang = "it" | "en" | "ru" | "ua";

export interface T {
  nav: { about: string; services: string; contact: string; cta: string };
  hero: { sub: string; discoverServices: string; contactUs: string };
  about: { desc: string };
  counter: { clients: string; focus: string; partner: string };
  services: {
    title: string;
    items: { icon: string; title: string; desc: string }[];
  };
  socialProof: { title: string };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    city: string;
  };
  footer: { rights: string; privacy: string; cookie: string };
}

export const translations: Record<Lang, T> = {
  it: {
    nav: { about: "Chi siamo", services: "Servizi", contact: "Contatti", cta: "Scrivici" },
    hero: {
      sub: "La tua crescita digitale, pensata bene.",
      discoverServices: "Scopri i servizi",
      contactUs: "Contattaci",
    },
    about: {
      desc: "Dal dialetto napoletano. Significa pensare con intelligenza prima di agire. È il principio dietro ogni strategia che costruiamo per te.",
    },
    counter: {
      clients: "Clienti soddisfatti",
      focus: "Focus PMI italiane",
      partner: "Interlocutore per tutto il digitale",
    },
    services: {
      title: "I nostri servizi",
      items: [
        { icon: "🔍", title: "SEO", desc: "Visibilità organica che dura nel tempo" },
        { icon: "🌐", title: "Siti Web", desc: "Design che converte, codice che vola" },
        { icon: "📱", title: "Social Media", desc: "Presenza autentica su ogni canale" },
        { icon: "⚙️", title: "Automazione", desc: "Processi che lavorano per te" },
        { icon: "📊", title: "Marketing", desc: "Strategie data-driven su misura" },
        { icon: "🛡️", title: "Cybersecurity", desc: "Proteggi la tua presenza digitale" },
      ],
    },
    socialProof: { title: "Ci affidano la loro crescita digitale" },
    contact: {
      title: "Parliamo.",
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      send: "Invia",
      sending: "Invio in corso…",
      success: "Grazie! Ti contatteremo presto.",
      error: "Errore nell'invio. Riprova.",
      city: "Napoli, Italia",
    },
    footer: { rights: "© 2026 Aggiapenza S.r.l. — Napoli", privacy: "Privacy Policy", cookie: "Cookie Policy" },
  },

  en: {
    nav: { about: "About", services: "Services", contact: "Contact", cta: "Write to us" },
    hero: {
      sub: "Your digital growth, thoughtfully designed.",
      discoverServices: "Discover services",
      contactUs: "Contact us",
    },
    about: {
      desc: "From the Neapolitan dialect. It means thinking intelligently before acting. This is the principle behind every strategy we build for you.",
    },
    counter: {
      clients: "Satisfied clients",
      focus: "Focus on Italian SMEs",
      partner: "One partner for all things digital",
    },
    services: {
      title: "Our services",
      items: [
        { icon: "🔍", title: "SEO", desc: "Organic visibility that lasts" },
        { icon: "🌐", title: "Websites", desc: "Design that converts, code that flies" },
        { icon: "📱", title: "Social Media", desc: "Authentic presence on every channel" },
        { icon: "⚙️", title: "Automation", desc: "Processes that work for you" },
        { icon: "📊", title: "Marketing", desc: "Tailored data-driven strategies" },
        { icon: "🛡️", title: "Cybersecurity", desc: "Protect your digital presence" },
      ],
    },
    socialProof: { title: "They trust us with their digital growth" },
    contact: {
      title: "Let's talk.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending…",
      success: "Thank you! We'll get back to you soon.",
      error: "Failed to send. Please try again.",
      city: "Naples, Italy",
    },
    footer: { rights: "© 2026 Aggiapenza S.r.l. — Naples", privacy: "Privacy Policy", cookie: "Cookie Policy" },
  },

  ru: {
    nav: { about: "О нас", services: "Услуги", contact: "Контакты", cta: "Написать" },
    hero: {
      sub: "Твой цифровой рост, продуманный до мелочей.",
      discoverServices: "Наши услуги",
      contactUs: "Связаться",
    },
    about: {
      desc: "Из неаполитанского диалекта. Означает думать умно, прежде чем действовать. Это принцип, лежащий в основе каждой стратегии, которую мы создаём для тебя.",
    },
    counter: {
      clients: "Довольных клиентов",
      focus: "Фокус на МСП Италии",
      partner: "Один партнёр для всего цифрового",
    },
    services: {
      title: "Наши услуги",
      items: [
        { icon: "🔍", title: "SEO", desc: "Органическая видимость, которая работает" },
        { icon: "🌐", title: "Сайты", desc: "Дизайн, который продаёт, код, который летит" },
        { icon: "📱", title: "Соцсети", desc: "Настоящее присутствие на каждой платформе" },
        { icon: "⚙️", title: "Автоматизация", desc: "Процессы, которые работают за тебя" },
        { icon: "📊", title: "Маркетинг", desc: "Стратегии на основе данных для тебя" },
        { icon: "🛡️", title: "Кибербезопасность", desc: "Защити своё цифровое присутствие" },
      ],
    },
    socialProof: { title: "Они доверяют нам свой цифровой рост" },
    contact: {
      title: "Поговорим.",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      send: "Отправить",
      sending: "Отправка…",
      success: "Спасибо! Мы скоро свяжемся с тобой.",
      error: "Ошибка отправки. Попробуй снова.",
      city: "Неаполь, Италия",
    },
    footer: { rights: "© 2026 Aggiapenza S.r.l. — Неаполь", privacy: "Конфиденциальность", cookie: "Политика Cookie" },
  },

  ua: {
    nav: { about: "Про нас", services: "Послуги", contact: "Контакти", cta: "Написати" },
    hero: {
      sub: "Твій цифровий ріст, продуманий до деталей.",
      discoverServices: "Наші послуги",
      contactUs: "Зв'язатися",
    },
    about: {
      desc: "З неаполітанського діалекту. Означає думати розумно, перш ніж діяти. Це принцип, що лежить в основі кожної стратегії, яку ми створюємо для тебе.",
    },
    counter: {
      clients: "Задоволених клієнтів",
      focus: "Фокус на МСП Італії",
      partner: "Один партнер для всього цифрового",
    },
    services: {
      title: "Наші послуги",
      items: [
        { icon: "🔍", title: "SEO", desc: "Органічна видимість, яка працює" },
        { icon: "🌐", title: "Сайти", desc: "Дизайн, що продає, код, що летить" },
        { icon: "📱", title: "Соцмережі", desc: "Справжня присутність на кожній платформі" },
        { icon: "⚙️", title: "Автоматизація", desc: "Процеси, що працюють за тебе" },
        { icon: "📊", title: "Маркетинг", desc: "Стратегії на основі даних для тебе" },
        { icon: "🛡️", title: "Кібербезпека", desc: "Захисти свою цифрову присутність" },
      ],
    },
    socialProof: { title: "Вони довіряють нам свій цифровий ріст" },
    contact: {
      title: "Поговоримо.",
      name: "Ім'я",
      email: "Email",
      message: "Повідомлення",
      send: "Надіслати",
      sending: "Надсилання…",
      success: "Дякуємо! Ми скоро зв'яжемося з тобою.",
      error: "Помилка надсилання. Спробуй знову.",
      city: "Неаполь, Італія",
    },
    footer: { rights: "© 2026 Aggiapenza S.r.l. — Неаполь", privacy: "Конфіденційність", cookie: "Політика Cookie" },
  },
};
