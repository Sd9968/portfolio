import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  "en": {
    "meta": {
      "title": "Atheeq Syed — Applied AI & Product Engineering",
      "description": "From user discovery to deployed AI products. Explore Atheeq Syed’s work at Sanofi, NidahAI voice agents, and automation built with APIs, Snowflake and n8n. Paris, France."
    },
    "nav": {
      "work": "Work",
      "projects": "Projects",
      "about": "About",
      "experience": "Experience",
      "contact": "Contact",
      "language": "Language"
    },
    "hero": {
      "role": "Applied AI · Product Engineering · User Discovery",
      "headline": "I turn real workflow problems into working AI products.",
      "sub": "Computer science meets product thinking. I work with users to understand the problem, build the integrations, and carry the solution through deployment and adoption.",
      "email": "Let’s talk",
      "resume": "Download resume",
      "basedIn": "Paris, France",
      "selectedWork": "Explore my work"
    },
    "about": {
      "label": "About",
      "title": "Close to the user. Hands on with the build.",
      "p1": "My path connects computer science at SRM University AP, payments technology at Fiserv, and a Master in Management at ESSEC across Singapore and Paris. I enjoy the point where a business problem becomes something concrete enough to build.",
      "p2": "At Sanofi, I worked with product, engineering, and business teams to turn recurring development bottlenecks into an internal AI product. At KidSpass.Asia, conversations with partners and customers helped reshape onboarding with the founding team.",
      "p3": "The projects I choose reflect what interests me: voice interfaces, useful AI agents, and automation that can act through real systems. I’m drawn to work that combines customer discovery, technical implementation, and iteration after launch."
    },
    "work": {
      "label": "Selected work",
      "title": "Understand the workflow. Build the solution.",
      "items": [
        {
          "name": "Sanofi — internal AI product",
          "tag": "Discovery → Integration → Deployment",
          "summary": "Teams were rebuilding components that already existed. I led an internal AI product from discovery through deployment to help teams find and reuse existing work.",
          "points": [
            "Discovery: sessions across 20+ teams to understand workflows, bottlenecks, and reuse opportunities.",
            "Build: connected GitHub APIs, internal commercial datasets, and Snowflake Cortex into the solution.",
            "Delivery: validated outputs with product, engineering, and business stakeholders, iterated on gaps, and supported adoption.",
            "Outcome: enabled component reuse to reduce repeat development and investment effort."
          ],
          "status": "Deployed internally",
          "stack": [
            "GitHub APIs",
            "Snowflake Cortex",
            "Internal datasets"
          ],
          "detailLabel": "Inside the work"
        }
      ]
    },
    "projects": {
      "label": "Personal projects",
      "title": "Systems I build beyond the day job.",
      "intro": "Independent projects in voice AI and automation. Each starts with a workflow and connects the AI to actions, integrations, and human decisions.",
      "visit": "Visit site",
      "items": [
        {
          "name": "NidahAI",
          "tag": "Voice AI · Independent build",
          "status": "Production voice agent",
          "summary": "An inbound voice AI agent that identifies intent, handles multi-step conversations, and triggers actions through APIs and webhooks.",
          "points": [
            "Problem: turn an inbound conversation into a completed task, rather than just a generated answer.",
            "My build: conversation logic, prompting, telephony integrations, scheduling workflows, and human handoff.",
            "How it works: inbound call → intent → workflow → API action or human handoff."
          ],
          "href": "https://nidahai.com/",
          "linkLabel": "Explore NidahAI",
          "stack": [
            "Voice AI",
            "Telephony",
            "APIs",
            "Webhooks"
          ],
          "detailLabel": "Explore the build"
        },
        {
          "name": "Business Explainer",
          "tag": "AI automation · Independent build",
          "status": "In development",
          "summary": "An AI content workflow that selects educational business topics, generates Instagram content and assets, and sends previews to WhatsApp for human approval.",
          "points": [
            "Problem: connect content generation, review, and publishing in one controlled workflow.",
            "My build: approval, rejection, regeneration, expiry, and publishing paths using n8n, AWS AI services, and Meta integrations.",
            "How it works: topic → content + assets → WhatsApp preview → approval → publishing.",
            "Design choice: a human approval gate before publishing."
          ],
          "stack": [
            "n8n",
            "AWS AI",
            "Meta APIs",
            "WhatsApp",
            "Webhooks"
          ],
          "detailLabel": "Explore the build"
        },
        {
          "name": "Meet Your Plate",
          "tag": "Product · AR Experience",
          "href": "https://www.meetyourplate.com/",
          "summary": "A platform where restaurant owners build their menus and host AR models — giving diners a richer, more immersive way to experience dishes before they order.",
          "points": [
            "Menu builder for restaurant owners",
            "AR model hosting for dish previews",
            "Enriched dining discovery experience"
          ],
          "status": "Additional product exploration",
          "detailLabel": "Explore the build",
          "stack": [
            "AR",
            "Menu experience"
          ]
        }
      ]
    },
    "experience": {
      "label": "Experience",
      "title": "Engineering grounding. Product perspective.",
      "roles": [
        {
          "company": "Sanofi",
          "title": "AI Strategy & Portfolio Intern",
          "period": "Sep 2025 – Sep 2026",
          "location": "Paris, France",
          "bullets": [
            "Led discovery across 20+ teams and end-to-end deployment of an internal AI product.",
            "Built with GitHub APIs, internal commercial datasets, and Snowflake Cortex to support component reuse.",
            "Translated stakeholder workflows into capabilities, validated outputs, and supported adoption."
          ]
        },
        {
          "company": "KidsPass.Asia",
          "title": "Product Analyst Intern",
          "period": "Nov 2024 – Jan 2025",
          "location": "Singapore",
          "bullets": [
            "Spoke with 50+ partners and customers; redesigned onboarding with the founding team, achieving around 40% onboarding conversion.",
            "Tracked KPIs in Excel and Power BI and shared partner trends and competitor insights with founders.",
            "Turned feedback and onboarding findings into product priorities."
          ]
        },
        {
          "company": "Fiserv",
          "title": "Technology Analyst",
          "period": "Jun 2022 – Jun 2023",
          "location": "Chennai, India",
          "bullets": [
            "Analyzed authorizations, declines, and settlement status in SQL for service reviews on a Fortune 500 payments platform.",
            "Investigated recurring failures, tested fixes through UAT and A/B-style comparisons, and supported go-live; reduced issue-resolution time by 80% for a 1,000+ person organization.",
            "Captured requirements in BRDs, FRDs, and acceptance criteria, reducing scoping time by 40%."
          ]
        }
      ]
    },
    "education": {
      "label": "Education & credentials",
      "title": "Business school rigor. Engineering grounding.",
      "schools": [
        {
          "school": "ESSEC Business School",
          "degree": "Master in Management, Grande École",
          "period": "Sep 2024 – Sep 2026",
          "detail": "Paris & Singapore · Strategy and Data Analytics · GPA 15.5/20"
        },
        {
          "school": "SRM University AP",
          "degree": "B.Tech in Computer Science and Engineering",
          "period": "Jun 2018 – Jun 2022",
          "detail": "AI & Machine Learning · First Class with Distinction"
        }
      ],
      "certsLabel": "Certifications",
      "certs": [
        "Microsoft AI Product Manager Professional Certificate — Coursera",
        "Six Sigma: White Belt — LinkedIn Learning",
        "Introduction to Business Analysis — LinkedIn Learning (IIBA®-endorsed)"
      ]
    },
    "contact": {
      "label": "Contact",
      "title": "Let’s build something useful.",
      "sub": "Interested in applied AI, forward-deployed engineering, and product roles where I can work with users and own the implementation.",
      "email": "Email",
      "linkedin": "LinkedIn",
      "resume": "Resume"
    },
    "footer": {
      "rights": "Built with intention in Paris."
    },
    "capabilities": {
      "label": "How I work",
      "title": "From a conversation to a deployed workflow.",
      "steps": [
        {
          "title": "01 / Discover",
          "body": "Talk to users, map the workflow, and identify the bottleneck worth solving."
        },
        {
          "title": "02 / Build",
          "body": "Connect data, models, APIs, and business logic into a working product."
        },
        {
          "title": "03 / Validate",
          "body": "Test outputs with stakeholders, handle handoffs, and iterate on gaps."
        },
        {
          "title": "04 / Deliver",
          "body": "Deploy the solution and support the people who will use it."
        }
      ],
      "skillsLabel": "Tools I work with",
      "skills": [
        "Python",
        "SQL",
        "APIs & webhooks",
        "n8n",
        "AWS",
        "Snowflake",
        "GitHub",
        "Power BI",
        "Excel",
        "Google Analytics",
        "Jira"
      ]
    }
  },
  "fr": {
    "meta": {
      "title": "Atheeq Syed — IA appliquée & ingénierie produit",
      "description": "De la découverte utilisateur aux produits IA déployés : Sanofi, agents vocaux NidahAI et automatisation avec APIs, Snowflake et n8n. Paris."
    },
    "nav": {
      "work": "Travail",
      "projects": "Projets",
      "about": "À propos",
      "experience": "Parcours",
      "contact": "Contact",
      "language": "Langue"
    },
    "hero": {
      "role": "IA appliquée · Ingénierie produit · Découverte utilisateur",
      "headline": "Je transforme les problèmes métier en produits IA opérationnels.",
      "sub": "Un socle informatique et une approche produit. Je travaille avec les utilisateurs pour comprendre le problème, construire les intégrations et accompagner le déploiement et l’adoption.",
      "email": "Échangeons",
      "resume": "Télécharger le CV",
      "basedIn": "Paris, France",
      "selectedWork": "Découvrir mon travail"
    },
    "about": {
      "label": "À propos",
      "title": "Au contact des utilisateurs. Impliqué dans la réalisation.",
      "p1": "Mon parcours relie l’informatique à SRM University AP, les paiements chez Fiserv et un Master in Management à l’ESSEC, entre Singapour et Paris. J’aime transformer un problème métier en solution concrète.",
      "p2": "Chez Sanofi, j’ai travaillé avec les équipes produit, ingénierie et métier pour transformer des difficultés récurrentes de développement en produit IA interne. Chez KidSpass.Asia, les échanges avec les partenaires et clients ont guidé la refonte de l’onboarding avec les fondateurs.",
      "p3": "Mes projets reflètent mes centres d’intérêt : interfaces vocales, agents IA utiles et automatisations connectées à des systèmes réels. Je recherche un travail qui combine découverte client, réalisation technique et amélioration après le lancement."
    },
    "work": {
      "label": "Travail sélectionné",
      "title": "Comprendre le processus. Construire la solution.",
      "items": [
        {
          "name": "Sanofi — produit IA interne",
          "tag": "Découverte → Intégration → Déploiement",
          "status": "Déployé en interne",
          "summary": "Les équipes reconstruisaient des composants déjà existants. J’ai mené un produit IA interne de la découverte au déploiement pour faciliter la recherche et la réutilisation du travail existant.",
          "points": [
            "Découverte : échanges avec plus de 20 équipes sur leurs processus, difficultés et possibilités de réutilisation.",
            "Réalisation : intégration des APIs GitHub, de données commerciales internes et de Snowflake Cortex.",
            "Livraison : validation des résultats avec les équipes produit, ingénierie et métier, itérations et accompagnement de l’adoption.",
            "Résultat : réutilisation de composants pour réduire les développements répétitifs et les efforts d’investissement."
          ],
          "stack": [
            "GitHub APIs",
            "Snowflake Cortex",
            "Internal datasets"
          ],
          "detailLabel": "Dans les coulisses"
        }
      ]
    },
    "projects": {
      "label": "Projets personnels",
      "title": "Les systèmes que je construis en parallèle.",
      "intro": "Des projets indépendants en IA vocale et automatisation, reliant chaque processus aux actions, intégrations et décisions humaines.",
      "visit": "Voir le site",
      "items": [
        {
          "name": "NidahAI",
          "tag": "IA vocale · Projet indépendant",
          "status": "Agent vocal en production",
          "summary": "Un agent vocal IA pour les appels entrants, capable de comprendre l’intention, gérer des conversations en plusieurs étapes et déclencher des actions via APIs et webhooks.",
          "points": [
            "Problème : transformer une conversation entrante en tâche accomplie.",
            "Ma contribution : logique conversationnelle, prompting, téléphonie, planification et transfert à un humain.",
            "Parcours : appel → intention → processus → action API ou transfert humain."
          ],
          "href": "https://nidahai.com/",
          "linkLabel": "Découvrir NidahAI",
          "stack": [
            "Voice AI",
            "Telephony",
            "APIs",
            "Webhooks"
          ],
          "detailLabel": "Découvrir la réalisation"
        },
        {
          "name": "Business Explainer",
          "tag": "Automatisation IA · Projet indépendant",
          "status": "En développement",
          "summary": "Un processus IA qui sélectionne des sujets pédagogiques sur le business, génère du contenu Instagram et ses visuels, puis envoie un aperçu sur WhatsApp pour validation humaine.",
          "points": [
            "Problème : relier génération, validation et publication dans un processus contrôlé.",
            "Ma contribution : approbation, rejet, régénération, expiration et publication avec n8n, AWS et les intégrations Meta.",
            "Parcours : sujet → contenu et visuels → aperçu WhatsApp → approbation → publication.",
            "Choix de conception : une validation humaine avant publication."
          ],
          "stack": [
            "n8n",
            "AWS AI",
            "Meta APIs",
            "WhatsApp",
            "Webhooks"
          ],
          "detailLabel": "Découvrir la réalisation"
        },
        {
          "name": "Meet Your Plate",
          "tag": "Produit · Expérience AR",
          "href": "https://www.meetyourplate.com/",
          "summary": "Une plateforme où les restaurateurs construisent leur menu et hébergent des modèles AR — pour une découverte des plats plus riche avant la commande.",
          "points": [
            "Éditeur de menu pour restaurateurs",
            "Hébergement de modèles AR pour les plats",
            "Expérience de découverte enrichie"
          ],
          "status": "Exploration produit complémentaire",
          "stack": [
            "AR",
            "Menus"
          ],
          "detailLabel": "Découvrir la réalisation"
        }
      ]
    },
    "experience": {
      "label": "Parcours",
      "title": "Un chemin entre ingénierie, produit et stratégie IA.",
      "roles": [
        {
          "company": "Sanofi",
          "title": "Stagiaire Stratégie IA & Portefeuille",
          "period": "Sep 2025 – Sep 2026",
          "location": "Paris, France",
          "bullets": [
            "Découverte auprès de plus de 20 équipes et déploiement complet d’un produit IA interne.",
            "Intégration des APIs GitHub, de données commerciales internes et de Snowflake Cortex pour favoriser la réutilisation.",
            "Traduction des besoins métier en fonctionnalités, validation et accompagnement de l’adoption."
          ]
        },
        {
          "company": "KidsPass.Asia",
          "title": "Stagiaire Product Analyst",
          "period": "Nov 2024 – Jan 2025",
          "location": "Singapour",
          "bullets": [
            "Échanges avec plus de 50 partenaires et clients ; refonte de l’onboarding avec les fondateurs, atteignant environ 40 % de conversion.",
            "Suivi des KPIs dans Excel et Power BI, partage des tendances partenaires et de la veille concurrentielle.",
            "Transformation des retours clients en priorités produit."
          ]
        },
        {
          "company": "Fiserv",
          "title": "Technology Analyst",
          "period": "Jun 2022 – Jun 2023",
          "location": "Chennai, Inde",
          "bullets": [
            "Analyse SQL des autorisations, refus et règlements pour une plateforme de paiements Fortune 500.",
            "Investigation des incidents, tests UAT et comparaisons de type A/B, puis accompagnement de la mise en production : réduction de 80 % du temps de résolution pour une organisation de plus de 1 000 personnes.",
            "Formalisation des besoins en BRDs, FRDs et critères d’acceptation : réduction de 40 % du temps de cadrage."
          ]
        }
      ]
    },
    "education": {
      "label": "Formation & certifications",
      "title": "Rigueur business school. Socle ingénieur.",
      "schools": [
        {
          "school": "ESSEC Business School",
          "degree": "Master in Management, Grande École",
          "period": "Sep 2024 – Sep 2026",
          "detail": "Paris et Singapour · Stratégie et Data Analytics · Moyenne 15,5/20"
        },
        {
          "school": "SRM University AP",
          "degree": "B.Tech en Computer Science and Engineering",
          "period": "Jun 2018 – Jun 2022",
          "detail": "IA et Machine Learning · First Class with Distinction"
        }
      ],
      "certsLabel": "Certifications",
      "certs": [
        "Microsoft AI Product Manager Professional Certificate — Coursera",
        "Six Sigma: White Belt — LinkedIn Learning",
        "Introduction to Business Analysis — LinkedIn Learning (IIBA®)"
      ]
    },
    "contact": {
      "label": "Contact",
      "title": "Construisons quelque chose d’utile.",
      "sub": "Intéressé par l’IA appliquée, le forward-deployed engineering et les rôles produit proches des utilisateurs et de la réalisation.",
      "email": "Email",
      "linkedin": "LinkedIn",
      "resume": "CV"
    },
    "footer": {
      "rights": "Conçu avec intention à Paris."
    },
    "capabilities": {
      "label": "Ma méthode",
      "title": "De la conversation au processus déployé.",
      "steps": [
        {
          "title": "01 / Comprendre",
          "body": "Échanger avec les utilisateurs, cartographier le processus et identifier le problème à résoudre."
        },
        {
          "title": "02 / Construire",
          "body": "Relier données, modèles, APIs et logique métier dans un produit opérationnel."
        },
        {
          "title": "03 / Valider",
          "body": "Tester les résultats avec les équipes, prévoir les transferts et corriger les écarts."
        },
        {
          "title": "04 / Livrer",
          "body": "Déployer la solution et accompagner les personnes qui l’utilisent."
        }
      ],
      "skillsLabel": "Mes outils",
      "skills": [
        "Python",
        "SQL",
        "APIs & webhooks",
        "n8n",
        "AWS",
        "Snowflake",
        "GitHub",
        "Power BI",
        "Excel",
        "Google Analytics",
        "Jira"
      ]
    }
  },
  "ar": {
    "meta": {
      "title": "عتيق سيد — الذكاء الاصطناعي التطبيقي وهندسة المنتجات",
      "description": "من فهم المستخدم إلى نشر منتجات الذكاء الاصطناعي: سانوفي وNidahAI والأتمتة باستخدام APIs وSnowflake وn8n. باريس."
    },
    "nav": {
      "work": "العمل",
      "projects": "المشاريع",
      "about": "نبذة",
      "experience": "الخبرة",
      "contact": "تواصل",
      "language": "اللغة"
    },
    "hero": {
      "role": "ذكاء اصطناعي تطبيقي · هندسة المنتجات · فهم المستخدم",
      "headline": "أحوّل مشكلات سير العمل إلى منتجات ذكاء اصطناعي عملية.",
      "sub": "أجمع بين علوم الحاسوب والتفكير المنتج. أعمل مع المستخدمين لفهم المشكلة وبناء التكاملات ومتابعة الحل حتى النشر والاستخدام.",
      "email": "راسلني",
      "resume": "تحميل السيرة",
      "basedIn": "باريس، فرنسا",
      "selectedWork": "استكشف أعمالي"
    },
    "about": {
      "label": "نبذة",
      "title": "قريب من المستخدم. مشارك في البناء.",
      "p1": "يجمع مساري بين علوم الحاسوب في SRM University AP وتقنيات الدفع في Fiserv وماجستير الإدارة في ESSEC بين سنغافورة وباريس. أستمتع بتحويل مشكلات الأعمال إلى حلول قابلة للبناء.",
      "p2": "في سانوفي، عملت مع فرق المنتج والهندسة والأعمال لتحويل عقبات التطوير المتكررة إلى منتج ذكاء اصطناعي داخلي. وفي KidSpass.Asia، ساهمت محادثات الشركاء والعملاء في إعادة تصميم تجربة الانضمام مع الفريق المؤسس.",
      "p3": "تعكس مشاريعي اهتماماتي: الواجهات الصوتية ووكلاء الذكاء الاصطناعي والأتمتة المتصلة بأنظمة فعلية. أبحث عن عمل يجمع فهم العملاء والتنفيذ التقني والتحسين بعد الإطلاق."
    },
    "work": {
      "label": "أعمال مختارة",
      "title": "فهم سير العمل. بناء الحل.",
      "items": [
        {
          "name": "سانوفي — منتج ذكاء اصطناعي داخلي",
          "tag": "اكتشاف ← تكامل ← نشر",
          "status": "منشور داخلياً",
          "summary": "كانت الفرق تعيد بناء مكونات موجودة. قدت منتجاً داخلياً من الاكتشاف إلى النشر لمساعدة الفرق على العثور على العمل القائم وإعادة استخدامه.",
          "points": [
            "الاكتشاف: جلسات مع أكثر من 20 فريقاً لفهم سير العمل والعقبات وفرص إعادة الاستخدام.",
            "البناء: ربط APIs من GitHub والبيانات التجارية الداخلية وSnowflake Cortex.",
            "التسليم: التحقق من النتائج مع فرق المنتج والهندسة والأعمال وتحسين الحل ودعم استخدامه.",
            "النتيجة: تمكين إعادة استخدام المكونات لتقليل تكرار التطوير وجهد الاستثمار."
          ],
          "stack": [
            "GitHub APIs",
            "Snowflake Cortex",
            "Internal datasets"
          ],
          "detailLabel": "تفاصيل العمل"
        }
      ]
    },
    "projects": {
      "label": "مشاريع شخصية",
      "title": "أنظمة أبنيها خارج عملي اليومي.",
      "intro": "مشاريع مستقلة في الذكاء الاصطناعي الصوتي والأتمتة تربط سير العمل بالإجراءات والتكاملات والقرارات البشرية.",
      "visit": "زيارة الموقع",
      "items": [
        {
          "name": "NidahAI",
          "tag": "ذكاء اصطناعي صوتي · مشروع مستقل",
          "status": "وكيل صوتي في الإنتاج",
          "summary": "وكيل صوتي للمحادثات الواردة يفهم نية المستخدم ويدير خطوات متعددة وينفذ إجراءات عبر APIs وwebhooks.",
          "points": [
            "المشكلة: تحويل المحادثة الواردة إلى مهمة مكتملة.",
            "ما بنيته: منطق المحادثة والتوجيه والتكامل الهاتفي والجدولة والتحويل إلى موظف.",
            "المسار: مكالمة ← نية ← سير عمل ← إجراء API أو تحويل بشري."
          ],
          "href": "https://nidahai.com/",
          "linkLabel": "استكشف NidahAI",
          "stack": [
            "Voice AI",
            "Telephony",
            "APIs",
            "Webhooks"
          ],
          "detailLabel": "استكشف البناء"
        },
        {
          "name": "Business Explainer",
          "tag": "أتمتة بالذكاء الاصطناعي · مشروع مستقل",
          "status": "قيد التطوير",
          "summary": "نظام يختار موضوعات تعليمية عن الأعمال ويولد محتوى Instagram وتصاميم المنشورات ويرسل معاينات إلى WhatsApp للموافقة البشرية.",
          "points": [
            "المشكلة: ربط إنشاء المحتوى والمراجعة والنشر في سير عمل مضبوط.",
            "ما بنيته: مسارات الموافقة والرفض وإعادة التوليد وانتهاء الصلاحية والنشر باستخدام n8n وAWS وتكاملات Meta.",
            "المسار: موضوع ← محتوى وتصاميم ← معاينة WhatsApp ← موافقة ← نشر.",
            "قرار التصميم: موافقة بشرية قبل النشر."
          ],
          "stack": [
            "n8n",
            "AWS AI",
            "Meta APIs",
            "WhatsApp",
            "Webhooks"
          ],
          "detailLabel": "استكشف البناء"
        },
        {
          "name": "Meet Your Plate",
          "tag": "منتج · تجربة واقع معزز",
          "href": "https://www.meetyourplate.com/",
          "summary": "منصة يبني فيها أصحاب المطاعم قوائمهم ويستضيفون نماذج واقع معزز لتجربة أغنى قبل الطلب.",
          "points": [
            "منشئ قوائم للمطاعم",
            "استضافة نماذج AR للأطباق",
            "تجربة اكتشاف أغنى للطعام"
          ],
          "status": "استكشاف إضافي للمنتجات",
          "stack": [
            "AR",
            "Menus"
          ],
          "detailLabel": "استكشف البناء"
        }
      ]
    },
    "experience": {
      "label": "الخبرة",
      "title": "مسار عبر الهندسة والمنتج واستراتيجية الذكاء الاصطناعي.",
      "roles": [
        {
          "company": "Sanofi",
          "title": "متدرب استراتيجية ومحفظة الذكاء الاصطناعي",
          "period": "Sep 2025 – Sep 2026",
          "location": "باريس، فرنسا",
          "bullets": [
            "قدت الاكتشاف مع أكثر من 20 فريقاً ونشر منتج ذكاء اصطناعي داخلي من البداية إلى النهاية.",
            "بنيت الحل باستخدام GitHub APIs والبيانات التجارية الداخلية وSnowflake Cortex لدعم إعادة الاستخدام.",
            "حوّلت متطلبات الفرق إلى قدرات منتج وتحققت من النتائج ودعمت الاستخدام."
          ]
        },
        {
          "company": "KidsPass.Asia",
          "title": "متدرب تحليل المنتجات",
          "period": "نوفمبر 2024 – يناير 2025",
          "location": "سنغافورة",
          "bullets": [
            "تحدثت مع أكثر من 50 شريكاً وعميلاً وأعدت تصميم الانضمام مع المؤسسين، محققاً نحو 40% تحويل.",
            "تابعت مؤشرات المنتج في Excel وPower BI وشاركت اتجاهات الشركاء وتحليلات المنافسين.",
            "حوّلت الملاحظات إلى أولويات للمنتج."
          ]
        },
        {
          "company": "Fiserv",
          "title": "محلل تقني",
          "period": "يونيو 2022 – يونيو 2023",
          "location": "تشيناي، الهند",
          "bullets": [
            "حللت عمليات التفويض والرفض والتسوية باستخدام SQL لمنصة مدفوعات Fortune 500.",
            "حققت في الأعطال واختبرت الإصلاحات عبر UAT ومقارنات شبيهة بـ A/B ودعمت الإطلاق؛ خفضت وقت حل المشكلات بنسبة 80% لمنظمة تضم أكثر من 1,000 شخص.",
            "وثقت المتطلبات ومعايير القبول في BRDs وFRDs، وخفضت وقت تحديد النطاق بنسبة 40%."
          ]
        }
      ]
    },
    "education": {
      "label": "التعليم والشهادات",
      "title": "صرامة مدرسة أعمال. أساس هندسي.",
      "schools": [
        {
          "school": "ESSEC Business School",
          "degree": "ماجستير الإدارة، Grande École",
          "period": "Sep 2024 – Sep 2026",
          "detail": "باريس وسنغافورة · استراتيجية وتحليل بيانات · معدل 15.5/20"
        },
        {
          "school": "SRM University AP",
          "degree": "بكالوريوس هندسة علوم الحاسوب",
          "period": "يونيو 2018 – يونيو 2022",
          "detail": "ذكاء اصطناعي وتعلم آلي · First Class with Distinction"
        }
      ],
      "certsLabel": "الشهادات",
      "certs": [
        "Microsoft AI Product Manager Professional Certificate — Coursera",
        "Six Sigma: White Belt — LinkedIn Learning",
        "Introduction to Business Analysis — LinkedIn Learning (IIBA®)"
      ]
    },
    "contact": {
      "label": "تواصل",
      "title": "لنبنِ شيئاً مفيداً.",
      "sub": "مهتم بالذكاء الاصطناعي التطبيقي والهندسة القريبة من العملاء وأدوار المنتج التي تجمع التواصل مع المستخدم والتنفيذ.",
      "email": "البريد",
      "linkedin": "لينكدإن",
      "resume": "السيرة"
    },
    "footer": {
      "rights": "صُمم بعناية في باريس."
    },
    "capabilities": {
      "label": "طريقة عملي",
      "title": "من المحادثة إلى سير عمل منشور.",
      "steps": [
        {
          "title": "01 / اكتشاف",
          "body": "التحدث مع المستخدمين وفهم سير العمل وتحديد المشكلة التي تستحق الحل."
        },
        {
          "title": "02 / بناء",
          "body": "ربط البيانات والنماذج وAPIs ومنطق الأعمال في منتج عملي."
        },
        {
          "title": "03 / تحقق",
          "body": "اختبار النتائج مع الفرق وإدارة التحويل البشري وتحسين الثغرات."
        },
        {
          "title": "04 / تسليم",
          "body": "نشر الحل ودعم الأشخاص الذين يستخدمونه."
        }
      ],
      "skillsLabel": "أدوات أستخدمها",
      "skills": [
        "Python",
        "SQL",
        "APIs & webhooks",
        "n8n",
        "AWS",
        "Snowflake",
        "GitHub",
        "Power BI",
        "Excel",
        "Google Analytics",
        "Jira"
      ]
    }
  }
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const EMAIL = "atheeqsyed9968@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/atheeq-syed-54876218b/";
export const RESUME_HREF = "/resume/Atheeq_Syed_Resume.pdf";
