import type { Dictionary, Locale } from "./types";

const en: Dictionary = {
  meta: {
    title: "Atheeq Syed — AI Strategy & Product",
    description:
      "AI strategist, product manager, and AI vibe coder — from strategy decks to working PoCs. Based in Paris.",
  },
  nav: {
    work: "Work",
    projects: "Projects",
    about: "About",
    experience: "Experience",
    contact: "Contact",
    language: "Language",
  },
  hero: {
    role: "AI Strategy · Product · AI Vibe Coder",
    headline: "From strategy decks to working PoCs.",
    sub: "I shape AI portfolio decisions, craft the narrative for leadership, then build GenAI prototypes teams actually use — currently at Sanofi, after ESSEC and a CS foundation.",
    email: "Email me",
    resume: "Download resume",
    basedIn: "Paris, France",
  },
  about: {
    label: "About",
    title: "Strategy when it matters. Code when it ships.",
    p1: "I’m Atheeq Syed. I studied Computer Science at SRM University, then spent a year as a Technology Analyst at Fiserv — mostly building systems, with real business analysis work alongside.",
    p2: "I then pursued a two-year Master’s in Management at ESSEC. Year one in Singapore: founding-team business development and product. Year two in France: AI strategy and portfolio at Sanofi — market analysis, executive dashboards, and GenAI PoCs.",
    p3: "I’m an AI vibe coder: comfortable building strategy decks for leadership and spinning up end-to-end PoCs with tools like Cursor. Personal products include NidahAI and Meet Your Plate. Looking for entry-level roles in AI strategy, product management, and business analysis.",
  },
  work: {
    label: "Selected work",
    title: "Where strategy becomes something teams can run with.",
    items: [
      {
        name: "Sanofi — GenAI PoC & AI portfolio",
        tag: "AI Strategy · Portfolio · PoC",
        summary:
          "Built a GenAI-powered proof of concept for internal workflows so teams can focus on strategic goals — now used by 100+ teams. Also delivered a Power BI dashboard for the Communications team tracking reach across 80,000+ customers in 50+ countries.",
        points: [
          "Market and capability analysis across a large AI product portfolio",
          "Strategy framing for leadership, then an end-to-end GenAI PoC (Cursor + Snowflake Cortex)",
          "Executive-facing adoption and communications metrics",
        ],
      },
    ],
  },
  projects: {
    label: "Personal projects",
    title: "AI vibe coder — products I shipped myself.",
    intro:
      "I don’t stop at the slide deck. I design the story, then build living products — from voice agents to AR experiences.",
    visit: "Visit site",
    items: [
      {
        name: "NidahAI",
        tag: "Voice AI · Healthcare",
        href: "https://nidahai.com/",
        summary:
          "A Voice AI agent for healthcare operations — booking, rescheduling, and cancelling appointments, answering information requests, and sending confirmation messages to the user’s WhatsApp.",
        points: [
          "Conversational voice flows for clinic operations",
          "Appointment lifecycle: book, reschedule, cancel",
          "WhatsApp confirmation messaging",
        ],
      },
      {
        name: "Meet Your Plate",
        tag: "Product · AR Experience",
        href: "https://www.meetyourplate.com/",
        summary:
          "A platform where restaurant owners build their menus and host AR models — giving diners a richer, more immersive way to experience dishes before they order.",
        points: [
          "Menu builder for restaurant owners",
          "AR model hosting for dish previews",
          "Enriched dining discovery experience",
        ],
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "A path across engineering, product, and AI strategy.",
    roles: [
      {
        company: "Sanofi",
        title: "AI Strategy & Portfolio Intern",
        period: "Sep 2025 – Present",
        location: "Paris, France",
        bullets: [
          "Market analysis and GenAI PoC for internal workflows — adopted by 100+ teams",
          "Power BI dashboards for Communications reach across 80,000+ customers in 50+ countries",
          "Partnered with cross-functional teams to evaluate AI use cases and reduce duplicate effort",
        ],
      },
      {
        company: "KidsPass.Asia",
        title: "Product Analyst Intern (Founding Team)",
        period: "Nov 2024 – Jan 2025",
        location: "Singapore",
        bullets: [
          "Customer discovery with 50+ B2C customers; contributed to ~50% partner onboarding",
          "Market research, competitor mapping, and product feedback loops",
        ],
      },
      {
        company: "Fiserv",
        title: "Technology Analyst",
        period: "Jun 2022 – Jun 2023",
        location: "Chennai, India",
        bullets: [
          "Built token-based auth adopted by a 1,000+ member support organization",
          "Translated stakeholder needs into roadmaps and requirements; cut scoping time ~40%",
        ],
      },
    ],
  },
  education: {
    label: "Education & credentials",
    title: "Business school rigor. Engineering grounding.",
    schools: [
      {
        school: "ESSEC Business School",
        degree: "Master in Management, Grande École",
        period: "Sep 2024 – Present",
        detail: "Singapore campus, then Paris · FT-ranked Grande École",
      },
      {
        school: "SRM University AP",
        degree: "B.Tech in Computer Science and Engineering",
        period: "Jun 2018 – Jun 2022",
        detail: "India",
      },
    ],
    certsLabel: "Certifications",
    certs: [
      "Microsoft AI Product Manager Professional Certificate — Coursera",
      "Six Sigma: White Belt — LinkedIn Learning",
      "Introduction to Business Analysis — LinkedIn Learning (IIBA®-endorsed)",
    ],
  },
  contact: {
    label: "Contact",
    title: "Let’s talk AI strategy or product.",
    sub: "Open to entry-level roles in AI strategy, product management, and business analysis.",
    email: "Email",
    linkedin: "LinkedIn",
    resume: "Resume",
  },
  footer: {
    rights: "Built with intention in Paris.",
  },
};

const fr: Dictionary = {
  meta: {
    title: "Atheeq Syed — Stratégie IA & Produit",
    description:
      "Stratège IA, product manager et AI vibe coder — des strategy decks aux PoCs qui tournent. Basé à Paris.",
  },
  nav: {
    work: "Travail",
    projects: "Projets",
    about: "À propos",
    experience: "Parcours",
    contact: "Contact",
    language: "Langue",
  },
  hero: {
    role: "Stratégie IA · Produit · AI Vibe Coder",
    headline: "Des strategy decks aux PoCs qui marchent.",
    sub: "Je façonne les décisions de portefeuille IA, construis le récit pour le leadership, puis prototype des solutions GenAI que les équipes utilisent — actuellement chez Sanofi, après l’ESSEC et une base en informatique.",
    email: "M’écrire",
    resume: "Télécharger le CV",
    basedIn: "Paris, France",
  },
  about: {
    label: "À propos",
    title: "La stratégie quand il faut. Le code quand ça doit livrer.",
    p1: "Je m’appelle Atheeq Syed. J’ai étudié l’informatique à SRM University, puis passé un an comme Technology Analyst chez Fiserv — surtout du développement, avec une vraie part d’analyse métier.",
    p2: "J’ai ensuite suivi un Master in Management de deux ans à l’ESSEC. Première année à Singapour : business development et produit en founding team. Deuxième année en France : stratégie IA et portefeuille chez Sanofi — analyses, dashboards, et PoCs GenAI.",
    p3: "Je suis un AI vibe coder : à l’aise pour bâtir des strategy decks pour le leadership et pour livrer des PoCs de bout en bout avec des outils comme Cursor. Produits perso : NidahAI et Meet Your Plate. Je vise des rôles junior en stratégie IA, product management et business analysis.",
  },
  work: {
    label: "Travail sélectionné",
    title: "Là où la stratégie devient actionnable.",
    items: [
      {
        name: "Sanofi — PoC GenAI & portefeuille IA",
        tag: "Stratégie IA · Portefeuille · PoC",
        summary:
          "Conception d’un proof of concept GenAI pour les workflows internes — adopté par plus de 100 équipes. Dashboard Power BI pour l’équipe Communications, mesurant la portée auprès de plus de 80 000 clients dans plus de 50 pays.",
        points: [
          "Analyse marché et capacités sur un large portefeuille de produits IA",
          "Cadre stratégique pour le leadership, puis PoC GenAI bout en bout (Cursor + Snowflake Cortex)",
          "Métriques d’adoption et de communication pour le leadership",
        ],
      },
    ],
  },
  projects: {
    label: "Projets personnels",
    title: "AI vibe coder — des produits que j’ai livrés moi-même.",
    intro:
      "Je ne m’arrête pas au slide. Je conçois l’histoire, puis je construis des produits vivants — des agents vocaux aux expériences AR.",
    visit: "Voir le site",
    items: [
      {
        name: "NidahAI",
        tag: "Voice AI · Santé",
        href: "https://nidahai.com/",
        summary:
          "Un agent vocal IA pour les opérations de santé — prise, report et annulation de rendez-vous, réponses informationnelles, et confirmation WhatsApp à l’utilisateur.",
        points: [
          "Parcours conversationnels pour les opérations cliniques",
          "Cycle de vie du rendez-vous : réserver, reporter, annuler",
          "Messages de confirmation WhatsApp",
        ],
      },
      {
        name: "Meet Your Plate",
        tag: "Produit · Expérience AR",
        href: "https://www.meetyourplate.com/",
        summary:
          "Une plateforme où les restaurateurs construisent leur menu et hébergent des modèles AR — pour une découverte des plats plus riche avant la commande.",
        points: [
          "Éditeur de menu pour restaurateurs",
          "Hébergement de modèles AR pour les plats",
          "Expérience de découverte enrichie",
        ],
      },
    ],
  },
  experience: {
    label: "Parcours",
    title: "Un chemin entre ingénierie, produit et stratégie IA.",
    roles: [
      {
        company: "Sanofi",
        title: "Stagiaire Stratégie IA & Portefeuille",
        period: "Sep 2025 – Présent",
        location: "Paris, France",
        bullets: [
          "Analyse de marché et PoC GenAI pour workflows internes — 100+ équipes",
          "Dashboards Power BI pour la portée Communications : 80 000+ clients, 50+ pays",
          "Collaboration transverse pour évaluer les cas d’usage IA",
        ],
      },
      {
        company: "KidsPass.Asia",
        title: "Stagiaire Product Analyst (équipe fondatrice)",
        period: "Nov 2024 – Jan 2025",
        location: "Singapour",
        bullets: [
          "Customer discovery auprès de 50+ clients B2C ; ~50% d’onboarding partenaires",
          "Études de marché, cartographie concurrentielle et boucles produit",
        ],
      },
      {
        company: "Fiserv",
        title: "Technology Analyst",
        period: "Jun 2022 – Jun 2023",
        location: "Chennai, Inde",
        bullets: [
          "Système d’authentification adopté par une organisation de support de 1 000+ personnes",
          "Traduction des besoins stakeholders en roadmaps ; scoping réduit d’environ 40%",
        ],
      },
    ],
  },
  education: {
    label: "Formation & certifications",
    title: "Rigueur business school. Socle ingénieur.",
    schools: [
      {
        school: "ESSEC Business School",
        degree: "Master in Management, Grande École",
        period: "Sep 2024 – Présent",
        detail: "Campus Singapour, puis Paris · Grande École classée FT",
      },
      {
        school: "SRM University AP",
        degree: "B.Tech en Computer Science and Engineering",
        period: "Jun 2018 – Jun 2022",
        detail: "Inde",
      },
    ],
    certsLabel: "Certifications",
    certs: [
      "Microsoft AI Product Manager Professional Certificate — Coursera",
      "Six Sigma: White Belt — LinkedIn Learning",
      "Introduction to Business Analysis — LinkedIn Learning (IIBA®)",
    ],
  },
  contact: {
    label: "Contact",
    title: "Parlons stratégie IA ou produit.",
    sub: "Ouvert aux rôles junior en stratégie IA, product management et business analysis.",
    email: "Email",
    linkedin: "LinkedIn",
    resume: "CV",
  },
  footer: {
    rights: "Conçu avec intention à Paris.",
  },
};

const ar: Dictionary = {
  meta: {
    title: "عتيق سيد — استراتيجية الذكاء الاصطناعي والمنتج",
    description:
      "استراتيجي ذكاء اصطناعي ومدير منتجات وAI vibe coder — من عروض الاستراتيجية إلى إثباتات المفهوم. مقيم في باريس.",
  },
  nav: {
    work: "العمل",
    projects: "المشاريع",
    about: "نبذة",
    experience: "الخبرة",
    contact: "تواصل",
    language: "اللغة",
  },
  hero: {
    role: "استراتيجية الذكاء الاصطناعي · المنتج · AI Vibe Coder",
    headline: "من عروض الاستراتيجية إلى إثباتات مفهوم تعمل.",
    sub: "أصوغ قرارات محفظة الذكاء الاصطناعي، وأبني الرواية للقيادة، ثم أنشئ نماذج GenAI تستخدمها الفرق فعلاً — حالياً في سانوفي، بعد ESSEC وأساس في علوم الحاسوب.",
    email: "راسلني",
    resume: "تحميل السيرة",
    basedIn: "باريس، فرنسا",
  },
  about: {
    label: "نبذة",
    title: "استراتيجية حين تهم. وكود حين يحين التسليم.",
    p1: "أنا عتيق سيد. درست علوم الحاسوب في جامعة SRM، ثم عملت سنة كمحلل تقني في Fiserv — غالباً في التطوير مع عمل حقيقي في تحليل الأعمال.",
    p2: "ثم التحقت بماجستير الإدارة لمدة سنتين في ESSEC. السنة الأولى في سنغافورة: تطوير أعمال ومنتج مع فريق تأسيسي. السنة الثانية في فرنسا: استراتيجية ومحفظة الذكاء الاصطناعي في سانوفي — تحليل سوق ولوحات ولوحات إثبات مفهوم GenAI.",
    p3: "أنا AI vibe coder: مرتاح لبناء عروض استراتيجية للقيادة وتسليم إثباتات مفهوم متكاملة بأدوات مثل Cursor. منتجاتي الشخصية تشمل NidahAI وMeet Your Plate. أبحث عن أدوار مبتدئة في استراتيجية الذكاء الاصطناعي وإدارة المنتجات وتحليل الأعمال.",
  },
  work: {
    label: "أعمال مختارة",
    title: "حيث تتحول الاستراتيجية إلى ما يمكن للفرق اعتماده.",
    items: [
      {
        name: "سانوفي — نموذج GenAI ومحفظة الذكاء الاصطناعي",
        tag: "استراتيجية · محفظة · إثبات مفهوم",
        summary:
          "بناء إثبات مفهوم مدعوم بـ GenAI لسير العمل الداخلي — تستخدمه أكثر من 100 فريق. ولوحة Power BI لفريق الاتصالات تعرض الوصول إلى أكثر من 80,000 عميل في أكثر من 50 دولة.",
        points: [
          "تحليل السوق والقدرات عبر محفظة واسعة من منتجات الذكاء الاصطناعي",
          "إطار استراتيجي للقيادة ثم إثبات مفهوم GenAI متكامل (Cursor + Snowflake Cortex)",
          "مقاييس تبنٍ واتصالات موجّهة للقيادة",
        ],
      },
    ],
  },
  projects: {
    label: "مشاريع شخصية",
    title: "AI vibe coder — منتجات بنيتها بنفسي.",
    intro:
      "لا أتوقف عند العرض التقديمي. أصمّم القصة ثم أبني منتجات حية — من الوكلاء الصوتيين إلى تجارب الواقع المعزز.",
    visit: "زيارة الموقع",
    items: [
      {
        name: "NidahAI",
        tag: "صوت ذكي · رعاية صحية",
        href: "https://nidahai.com/",
        summary:
          "وكيل صوتي بالذكاء الاصطناعي لعمليات الرعاية الصحية — حجز المواعيد وإعادة جدولتها وإلغاؤها، وتقديم المعلومات، وإرسال تأكيد عبر واتساب.",
        points: [
          "تدفقات محادثة صوتية لعمليات العيادة",
          "دورة الموعد: حجز، إعادة جدولة، إلغاء",
          "رسائل تأكيد عبر واتساب",
        ],
      },
      {
        name: "Meet Your Plate",
        tag: "منتج · تجربة واقع معزز",
        href: "https://www.meetyourplate.com/",
        summary:
          "منصة يبني فيها أصحاب المطاعم قوائمهم ويستضيفون نماذج واقع معزز لتجربة أغنى قبل الطلب.",
        points: [
          "منشئ قوائم للمطاعم",
          "استضافة نماذج AR للأطباق",
          "تجربة اكتشاف أغنى للطعام",
        ],
      },
    ],
  },
  experience: {
    label: "الخبرة",
    title: "مسار عبر الهندسة والمنتج واستراتيجية الذكاء الاصطناعي.",
    roles: [
      {
        company: "Sanofi",
        title: "متدرب استراتيجية ومحفظة الذكاء الاصطناعي",
        period: "سبتمبر 2025 – الآن",
        location: "باريس، فرنسا",
        bullets: [
          "تحليل سوق ونموذج GenAI لسير العمل الداخلي — أكثر من 100 فريق",
          "لوحات Power BI لوصول الاتصالات: 80,000+ عميل في 50+ دولة",
          "شراكة مع فرق متعددة لتقييم حالات استخدام الذكاء الاصطناعي",
        ],
      },
      {
        company: "KidsPass.Asia",
        title: "متدرب محلل منتجات (فريق تأسيسي)",
        period: "نوفمبر 2024 – يناير 2025",
        location: "سنغافورة",
        bullets: [
          "اكتشاف عملاء مع أكثر من 50 عميلاً؛ مساهمة في ~50% من تسجيل الشركاء",
          "بحث سوقي ورسم خريطة المنافسين وحلقات تغذية راجعة للمنتج",
        ],
      },
      {
        company: "Fiserv",
        title: "محلل تقني",
        period: "يونيو 2022 – يونيو 2023",
        location: "تشيناي، الهند",
        bullets: [
          "نظام مصادقة اعتمده أكثر من 1,000 عضو في دعم العمليات",
          "تحويل احتياجات أصحاب المصلحة إلى خرائط طريق؛ تقليل وقت النطاق ~40%",
        ],
      },
    ],
  },
  education: {
    label: "التعليم والشهادات",
    title: "صرامة مدرسة أعمال. أساس هندسي.",
    schools: [
      {
        school: "ESSEC Business School",
        degree: "ماجستير الإدارة، Grande École",
        period: "سبتمبر 2024 – الآن",
        detail: "حرم سنغافورة ثم باريس",
      },
      {
        school: "SRM University AP",
        degree: "بكالوريوس هندسة علوم الحاسوب",
        period: "يونيو 2018 – يونيو 2022",
        detail: "الهند",
      },
    ],
    certsLabel: "الشهادات",
    certs: [
      "Microsoft AI Product Manager Professional Certificate — Coursera",
      "Six Sigma: White Belt — LinkedIn Learning",
      "Introduction to Business Analysis — LinkedIn Learning (IIBA®)",
    ],
  },
  contact: {
    label: "تواصل",
    title: "لنتحدث عن استراتيجية الذكاء الاصطناعي أو المنتج.",
    sub: "مفتوح لأدوار مبتدئة في استراتيجية الذكاء الاصطناعي وإدارة المنتجات وتحليل الأعمال.",
    email: "البريد",
    linkedin: "لينكدإن",
    resume: "السيرة",
  },
  footer: {
    rights: "صُمم بعناية في باريس.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr, ar };

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const EMAIL = "atheeqsyed9968@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/atheeq-syed-54876218b/";
export const RESUME_HREF = "/resume/Atheeq_Syed_Resume.pdf";
