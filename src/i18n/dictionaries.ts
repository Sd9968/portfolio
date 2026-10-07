import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  "en": {
    "meta": {
      "title": "Atheeq Syed — Product & AI Deployment Strategy",
      "description": "I understand user workflows, shape product priorities, and coordinate with engineering teams to deploy useful solutions. When it helps move an idea forward, I prototype and code with tools like Cursor."
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
      "role": "Product · AI Deployment Strategy · Enterprise Workflows",
      "headline": "I turn ambiguous operational problems into products people can use.",
      "sub": "I combine customer discovery, analytics and technical fluency to define products, build with engineering, launch workflows and measure adoption. I also build AI and SaaS products independently.",
      "email": "Let’s talk",
      "resume": "Download resume",
      "basedIn": "Paris, France",
      "selectedWork": "Explore my work"
    },
    "about": {
      "label": "About",
      "title": "Understanding the workflow is where the product starts.",
      "p1": "My path connects computer science at SRM University AP, payments technology at Fiserv, and a Master in Management at ESSEC across Singapore and Paris. I enjoy the point where a business problem becomes something concrete enough to build.",
      "p2": "At Sanofi, I completed an AI Strategy & Portfolio internship spanning AI enablement and adoption analytics across a global pharmaceutical organization. At KidsPass.Asia, I combined partner conversations, competitor research and KPI analysis to improve onboarding with the founding team.",
      "p3": "I have taken products from discovery through launch and commercialisation. Meet Your Plate was built, launched and sold; Termnex is a terminal operating system I am developing to connect gate, yard, equipment and inventory workflows."
    },
    "work": {
      "label": "Selected work",
      "title": "Understanding the workflow is where the product starts.",
      "items": [
        {
          "name": "Sanofi — internal AI product",
          "tag": "Discovery → Integration → Deployment",
          "summary": "Teams were rebuilding components that already existed. I built an AI product proof of concept across GitHub codebases and Snowflake datasets so 200+ teams could discover and reuse existing work.",
          "points": [],
          "status": "Deployed internally",
          "stack": [
            "GitHub APIs",
            "Snowflake Cortex",
            "Internal datasets"
          ],
          "detailLabel": "Read the product case study",
          "caseStudy": {
            "sections": [
              {
                "title": "Product rationale",
                "body": "Repeated development was a workflow problem: teams needed to discover reusable work before committing time and budget to rebuilding. Discovery across 20+ teams informed the internal product."
              },
              {
                "title": "Users & jobs to be done",
                "body": "Internal product, engineering, and business teams evaluating AI initiatives. Their job: find relevant components, assess reuse, and move from an idea to a scoped solution."
              },
              {
                "title": "Product & deployment decisions",
                "body": "Brought GitHub APIs, internal commercial datasets, and Snowflake Cortex into the workflow. Worked with stakeholders to translate needs into capabilities, validate outputs, iterate on gaps, and support adoption."
              },
              {
                "title": "Workflow",
                "body": "New initiative → find existing components → assess fit with stakeholders → reuse where appropriate → validate and adopt."
              },
              {
                "title": "My contribution",
                "body": "Structured the ambiguous reuse problem into a product workflow, built the proof of concept with AI tooling, and validated records with product and engineering owners before release."
              },
              {
                "title": "Evidence & next measurement",
                "body": "The proof of concept covered GitHub and Snowflake records used by 200+ teams. Each record was reviewed with product and engineering owners; no time or investment savings are claimed."
              }
            ],
            "metrics": [
              {
                "name": "Successful reuse rate",
                "definition": "Initiatives that reuse a suitable existing component ÷ initiatives assessed."
              },
              {
                "name": "Time to identify a usable component",
                "definition": "Median time from a reuse request to a stakeholder-validated match."
              },
              {
                "name": "Adoption & relevance",
                "definition": "Repeat use by target teams; proportion of suggested components judged relevant."
              }
            ]
          }
        }
      ]
    },
    "projects": {
      "label": "Product case studies",
      "title": "The user, the problem, and the product decisions.",
      "intro": "A closer look at who each product serves, the workflow it changes, my contribution, and how I would evaluate success.",
      "visit": "Visit site",
      "items": [
        {
          "name": "NidahAI",
          "tag": "Service access · Voice AI",
          "status": "Production voice agent",
          "summary": "An inbound voice AI agent that identifies intent, handles multi-step conversations, and triggers actions through APIs and webhooks.",
          "points": [],
          "href": "https://nidahai.com/",
          "linkLabel": "Explore NidahAI",
          "stack": [
            "Voice AI",
            "Telephony",
            "APIs",
            "Webhooks"
          ],
          "detailLabel": "Read the product case study",
          "caseStudy": {
            "sections": [
              {
                "title": "Product rationale",
                "body": "A voice conversation should help someone reach a service and complete a task. NidahAI explores how to turn that interaction into an operational workflow with a route to human help."
              },
              {
                "title": "Users & jobs to be done",
                "body": "Designed for callers seeking clinic information or appointment support, and operations teams handling those requests. The caller’s job: reach the right service and resolve the request without repeated explanations."
              },
              {
                "title": "Product & deployment decisions",
                "body": "Connected conversation logic to telephony, scheduling, APIs, and webhooks. Included human handoff for requests requiring staff involvement. The product should be assessed on task accuracy and service access."
              },
              {
                "title": "Workflow",
                "body": "Inbound call → identify intent → answer or manage appointment → confirm the action → hand off when needed."
              },
              {
                "title": "My contribution",
                "body": "Independently designed, built, and launched the voice agent, including prompting, conversation logic, integrations, scheduling workflows, and human handoff."
              },
              {
                "title": "Evidence & next measurement",
                "body": "Production voice agent according to the resume. The KPIs below are proposed measures; no call volumes, accuracy rates, or time savings are reported."
              }
            ],
            "metrics": [
              {
                "name": "Request error rate",
                "definition": "Incorrect or incomplete appointment/service actions ÷ attempted actions; separate intent errors from action errors."
              },
              {
                "name": "Time to reach the service",
                "definition": "Median and 90th-percentile time from call start to a useful response or connection to the appropriate human."
              },
              {
                "name": "Resolution & handoff quality",
                "definition": "Requests completed correctly without repeat contact; successful human connections ÷ handoff attempts."
              }
            ]
          }
        },
        {
          "name": "Business Explainer",
          "tag": "Content operations · Human approval",
          "status": "In development",
          "summary": "An AI content workflow that selects educational business topics, generates Instagram content and assets, and sends previews to WhatsApp for human approval.",
          "points": [],
          "stack": [
            "n8n",
            "AWS AI",
            "Meta APIs",
            "WhatsApp",
            "Webhooks"
          ],
          "detailLabel": "Read the product case study",
          "caseStudy": {
            "sections": [
              {
                "title": "Product rationale",
                "body": "Content production involves several decisions beyond generating text: choosing a topic, checking quality, reviewing assets, and approving publication. The product connects these steps while retaining human editorial control."
              },
              {
                "title": "Users & jobs to be done",
                "body": "Designed for the creator or operator managing business education content, with learners as the intended audience. The operator’s job: review and publish useful content without moving manually between disconnected tools."
              },
              {
                "title": "Product & deployment decisions",
                "body": "Used WhatsApp as the review surface and a human approval gate before publishing. Designed explicit approval, rejection, regeneration, and expiry paths so review decisions can drive the next workflow step."
              },
              {
                "title": "Workflow",
                "body": "Select topic → generate content and assets → send WhatsApp preview → approve, reject, or regenerate → publish approved content; expire stale requests."
              },
              {
                "title": "My contribution",
                "body": "Designed and am building the end-to-end workflow using n8n, AWS AI services, APIs, webhooks, and Meta WhatsApp/Instagram integrations."
              },
              {
                "title": "Evidence & next measurement",
                "body": "In development. These are proposed evaluation metrics, not achieved results or claims about an existing audience."
              }
            ],
            "metrics": [
              {
                "name": "Approval-to-publication time",
                "definition": "Median elapsed time between human approval and successful publication; track generation-to-review separately."
              },
              {
                "name": "Publishing reliability",
                "definition": "Approved posts published correctly ÷ approved posts; count duplicates and failed publishes separately."
              },
              {
                "name": "Review effort & content quality",
                "definition": "Manual minutes per approved post, first-pass approval rate, and corrections needed for factual errors."
              }
            ]
          }
        },
        {
          "name": "Termnex",
          "tag": "Terminal operations · B2B SaaS",
          "status": "In development · Preparing for commercialisation",
          "summary": "A Terminal Operating System connecting gates, yards, equipment operators, container inventory and terminal management in one traceable workflow.",
          "points": [],
          "stack": ["React", "FastAPI", "PostgreSQL", "QR workflows", "Role-based access"],
          "detailLabel": "Read the product case study",
          "caseStudy": {
            "sections": [
              {"title": "Product rationale", "body": "Container yards often coordinate truck arrivals, gate passes, container movements, equipment tasks and charges through paperwork, spreadsheets and disconnected messages. Termnex creates one operational record."},
              {"title": "Users & jobs to be done", "body": "Managers, gate operators, watchmen, field supervisors and crane operators need role-specific views to admit trucks, verify passes, place or collect containers, assign equipment work and monitor the yard."},
              {"title": "Product & deployment decisions", "body": "Designed role-based access, QR gate verification, arrival and exit timestamps, container placement and pickup jobs, crane queues, live yard inventory, a visual floor plan, tariffs, document expiry alerts and activity logs."},
              {"title": "Workflow", "body": "Register customer and driver → issue Gate In or Gate Out pass → verify QR → record arrival → assign yard or crane task → update container location → record exit, charges and activity."},
              {"title": "My contribution", "body": "Own problem discovery, product definition, workflow design, full-stack build, testing and launch preparation, with the goal of commercialising the product for container terminals."},
              {"title": "Evidence & next measurement", "body": "Working product in development. Commercial adoption and operational improvements are not yet claimed."}
            ],
            "metrics": [
              {"name": "Truck turnaround time", "definition": "Median and 90th-percentile time from gate arrival to recorded exit, segmented by movement type."},
              {"name": "Movement traceability", "definition": "Container movements with complete timestamps, assigned operator and confirmed yard location ÷ total movements."},
              {"name": "Yard accuracy & task completion", "definition": "Inventory records matching verified locations; jobs completed within the expected operating window."}
            ]
          }
        },
        {
          "name": "Meet Your Plate",
          "tag": "Dining decisions · AR menus",
          "href": "https://www.meetyourplate.com/",
          "summary": "A platform where restaurant owners build their menus and host AR models — giving diners a richer, more immersive way to experience dishes before they order.",
          "points": [],
          "status": "Built, launched and sold",
          "detailLabel": "Read the product case study",
          "stack": [
            "AR",
            "Menu experience"
          ],
          "caseStudy": {
            "sections": [
              {
                "title": "Product rationale",
                "body": "Menu descriptions can leave diners uncertain about what a dish will look like. Meet Your Plate explores whether a visual preview can support a more confident choice before ordering."
              },
              {
                "title": "Users & jobs to be done",
                "body": "Designed for diners comparing dishes and restaurant owners maintaining their menus. Diners want to understand a dish; owners need to present and update menu information."
              },
              {
                "title": "Product & deployment decisions",
                "body": "Combined a restaurant menu builder with hosted AR dish models. The product question: does the preview reduce uncertainty enough to justify the extra step for diners and content upkeep for owners?"
              },
              {
                "title": "Workflow",
                "body": "Owner builds a menu and adds models → diner browses dishes → opens an AR preview → decides what to order."
              },
              {
                "title": "My contribution",
                "body": "Independently owned customer discovery, product definition, development, launch, onboarding and the end-to-end sale of the product."
              },
              {
                "title": "Evidence & next measurement",
                "body": "Meet Your Plate was built, launched and sold. The transaction value and restaurant adoption figures are not disclosed; the metrics below show how I would evaluate continued product use."
              }
            ],
            "metrics": [
              {
                "name": "Order misunderstanding rate",
                "definition": "Orders corrected because the expected dish differed from the selected dish ÷ orders in a pilot; compare with a baseline."
              },
              {
                "name": "Time to choose a dish",
                "definition": "Median time from menu open to dish selection, measured alongside satisfaction so faster selection is not assumed to be better."
              },
              {
                "name": "Preview usefulness & owner effort",
                "definition": "Preview completion rate, diner confidence feedback, and time for owners to create or update a menu item."
              }
            ]
          }
        }
      ]
    },
    "experience": {
      "label": "Experience",
      "title": "Product thinking. Technical fluency.",
      "roles": [
        {
          "company": "Sanofi",
          "title": "AI Strategy & Portfolio Intern",
          "period": "Sep 2025 – Sep 2026",
          "location": "Paris, France",
          "bullets": [
            "Built an AI product proof of concept across GitHub codebases and Snowflake datasets used by 200+ teams.",
            "Built a daily-refreshed Power BI adoption dashboard covering 45,000+ employees across 45+ countries.",
            "Used Cursor, GPT and Claude to structure an ambiguous reuse problem, then validated outputs with product and engineering owners."
          ]
        },
        {
          "company": "KidsPass.Asia",
          "title": "Business Development Intern",
          "period": "Nov 2024 – Jan 2025",
          "location": "Singapore",
          "bullets": [
            "Reviewed onboarding across 50+ partners and customers, redesigned the flow with the founding team, and helped onboarding reach 42%.",
            "Tracked KPIs in Excel and Power BI and shared partner trends and competitor insights with founders.",
            "Turned feedback and onboarding findings into product priorities."
          ]
        },
        {
          "company": "Meet Your Plate & Termnex",
          "title": "Founder & Product Lead",
          "period": "Independent ventures",
          "location": "Product development & commercialisation",
          "bullets": [
            "Built, launched and sold Meet Your Plate, owning discovery, development, onboarding and the end-to-end sale.",
            "Building Termnex, a Terminal Operating System connecting gates, yards, operators and container inventory.",
            "Defined role-based workflows, QR verification, live yard locations, equipment assignments, tariffs, alerts and reporting."
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
      "sub": "Open to product, AI deployment strategy, and enterprise solution roles focused on user workflows, engineering collaboration, and adoption.",
      "email": "Email",
      "linkedin": "LinkedIn",
      "resume": "Resume"
    },
    "footer": {
      "rights": "Built with intention in Paris."
    },
    "capabilities": {
      "label": "How I work",
      "title": "From user needs to everyday adoption.",
      "steps": [
        {
          "title": "01 / Understand",
          "body": "Talk to users and map the task, friction, and constraints before choosing a solution."
        },
        {
          "title": "02 / Prioritize",
          "body": "Define the problem, scope the product, and agree on success measures."
        },
        {
          "title": "03 / Coordinate",
          "body": "Work with engineering on requirements and integrations; prototype with Cursor when useful."
        },
        {
          "title": "04 / Embed",
          "body": "Validate with users, deploy into the workflow, and evaluate adoption and outcomes."
        }
      ],
      "skillsLabel": "Tools for analysis, prototyping & deployment",
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
    },
    "caseStudy": {
      "metricsLabel": "Proposed success metrics",
      "metricsNote": "Evaluation framework; these metrics are not reported results."
    }
  },
  "fr": {
    "meta": {
      "title": "Atheeq Syed — Produit & stratégie de déploiement IA",
      "description": "Je comprends les processus utilisateurs, définis les priorités produit et coordonne le déploiement avec les équipes d’ingénierie. Je prototype et code avec des outils comme Cursor lorsque cela fait avancer une idée."
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
      "role": "Produit · Déploiement IA · Processus en entreprise",
      "headline": "J’aide les équipes à transformer les besoins utilisateurs en solutions adaptées à leurs processus.",
      "sub": "Je comprends les processus utilisateurs, définis les priorités produit et coordonne le déploiement avec les équipes d’ingénierie. Je prototype et code avec des outils comme Cursor lorsque cela fait avancer une idée.",
      "email": "Échangeons",
      "resume": "Télécharger le CV",
      "basedIn": "Paris, France",
      "selectedWork": "Découvrir mon travail"
    },
    "about": {
      "label": "À propos",
      "title": "Comprendre le processus est le point de départ du produit.",
      "p1": "Mon parcours relie l’informatique à SRM University AP, les paiements chez Fiserv et un Master in Management à l’ESSEC, entre Singapour et Paris. J’aime transformer un problème métier en solution concrète.",
      "p2": "Chez Sanofi, j’ai travaillé avec les équipes produit, ingénierie et métier pour transformer des difficultés récurrentes de développement en produit IA interne. Chez KidSpass.Asia, les échanges avec les partenaires et clients ont guidé la refonte de l’onboarding avec les fondateurs.",
      "p3": "Je m’intéresse au produit et à la stratégie de déploiement : comprendre le travail des utilisateurs, définir la solution et accompagner son adoption. Je peux prototyper et coder avec Cursor, tout en coordonnant avec l’ingénierie. Mes projets explorent l’accès vocal aux services, les opérations de contenu et l’aide visuelle à la décision."
    },
    "work": {
      "label": "Travail sélectionné",
      "title": "Comprendre le processus est le point de départ du produit.",
      "items": [
        {
          "name": "Sanofi — produit IA interne",
          "tag": "Découverte → Intégration → Déploiement",
          "status": "Déployé en interne",
          "summary": "Les équipes reconstruisaient des composants déjà existants. J’ai mené un produit IA interne de la découverte au déploiement pour faciliter la recherche et la réutilisation du travail existant.",
          "points": [],
          "stack": [
            "GitHub APIs",
            "Snowflake Cortex",
            "Internal datasets"
          ],
          "detailLabel": "Lire l’étude de cas produit",
          "caseStudy": {
            "sections": [
              {
                "title": "Logique produit",
                "body": "Les développements répétés révélaient un problème de processus : découvrir les composants réutilisables avant de mobiliser du temps et du budget. Les échanges avec plus de 20 équipes ont guidé le produit interne."
              },
              {
                "title": "Utilisateurs & besoins",
                "body": "Équipes internes produit, ingénierie et métier évaluant des initiatives IA : trouver des composants pertinents, évaluer leur réutilisation et cadrer une solution."
              },
              {
                "title": "Décisions produit & déploiement",
                "body": "Intégration des APIs GitHub, de données commerciales internes et de Snowflake Cortex. Traduction des besoins en fonctionnalités, validation avec les équipes, itérations et accompagnement de l’adoption."
              },
              {
                "title": "Parcours",
                "body": "Initiative → recherche de composants → évaluation avec les équipes → réutilisation → validation et adoption."
              },
              {
                "title": "Ma contribution",
                "body": "Pilotage de la découverte et du déploiement complet, coordination des équipes produit, ingénierie et métier, et construction de la solution."
              },
              {
                "title": "Éléments établis & mesure à venir",
                "body": "Déployé en interne ; découverte auprès de plus de 20 équipes. Aucun gain chiffré en temps ou en investissement n’est revendiqué."
              }
            ],
            "metrics": [
              {
                "name": "Taux de réutilisation réussie",
                "definition": "Initiatives réutilisant un composant adapté ÷ initiatives évaluées."
              },
              {
                "name": "Temps pour trouver un composant utile",
                "definition": "Temps médian entre une demande et une correspondance validée par les équipes."
              },
              {
                "name": "Adoption & pertinence",
                "definition": "Usage répété par les équipes cibles et proportion de recommandations jugées pertinentes."
              }
            ]
          }
        }
      ]
    },
    "projects": {
      "label": "Études de cas produit",
      "title": "Les utilisateurs, le problème et les décisions produit.",
      "intro": "À qui s’adresse chaque produit, quel processus change, ma contribution et comment évaluer son succès.",
      "visit": "Voir le site",
      "items": [
        {
          "name": "NidahAI",
          "tag": "Accès au service · IA vocale",
          "status": "Agent vocal en production",
          "summary": "Un agent vocal IA pour les appels entrants, capable de comprendre l’intention, gérer des conversations en plusieurs étapes et déclencher des actions via APIs et webhooks.",
          "points": [],
          "href": "https://nidahai.com/",
          "linkLabel": "Découvrir NidahAI",
          "stack": [
            "Voice AI",
            "Telephony",
            "APIs",
            "Webhooks"
          ],
          "detailLabel": "Lire l’étude de cas produit",
          "caseStudy": {
            "sections": [
              {
                "title": "Logique produit",
                "body": "Une conversation vocale doit permettre d’accéder à un service et d’accomplir une tâche. NidahAI relie l’échange à un processus opérationnel avec un accès à une aide humaine."
              },
              {
                "title": "Utilisateurs & besoins",
                "body": "Conçu pour les appelants recherchant des informations ou une aide pour leurs rendez-vous, et les équipes opérationnelles des cliniques. Résoudre la demande sans répéter les informations."
              },
              {
                "title": "Décisions produit & déploiement",
                "body": "Logique conversationnelle reliée à la téléphonie, à la planification, aux APIs et aux webhooks, avec transfert humain. Évaluer la précision des actions et l’accès au service."
              },
              {
                "title": "Parcours",
                "body": "Appel → intention → information ou rendez-vous → confirmation → transfert humain si nécessaire."
              },
              {
                "title": "Ma contribution",
                "body": "Conception, construction et lancement indépendants : prompting, logique conversationnelle, intégrations, planification et transfert humain."
              },
              {
                "title": "Éléments établis & mesure à venir",
                "body": "Agent vocal en production selon le CV. Les KPIs sont proposés ; aucun volume, taux de précision ou gain de temps n’est annoncé."
              }
            ],
            "metrics": [
              {
                "name": "Taux d’erreur des demandes",
                "definition": "Actions incorrectes ou incomplètes ÷ actions tentées ; distinguer les erreurs d’intention et d’exécution."
              },
              {
                "name": "Temps d’accès au service",
                "definition": "Médiane et 90e percentile du temps entre le début de l’appel et une réponse utile ou le contact avec la bonne personne."
              },
              {
                "name": "Résolution & qualité du transfert",
                "definition": "Demandes correctement résolues sans nouveau contact ; connexions humaines réussies ÷ transferts tentés."
              }
            ]
          }
        },
        {
          "name": "Business Explainer",
          "tag": "Opérations de contenu · Validation humaine",
          "status": "En développement",
          "summary": "Un processus IA qui sélectionne des sujets pédagogiques sur le business, génère du contenu Instagram et ses visuels, puis envoie un aperçu sur WhatsApp pour validation humaine.",
          "points": [],
          "stack": [
            "n8n",
            "AWS AI",
            "Meta APIs",
            "WhatsApp",
            "Webhooks"
          ],
          "detailLabel": "Lire l’étude de cas produit",
          "caseStudy": {
            "sections": [
              {
                "title": "Logique produit",
                "body": "La production de contenu inclut le choix du sujet, la vérification, les visuels et l’approbation. Le produit relie ces étapes en conservant un contrôle éditorial humain."
              },
              {
                "title": "Utilisateurs & besoins",
                "body": "Conçu pour le créateur ou opérateur de contenus pédagogiques business, destinés aux apprenants. Réviser et publier sans déplacer manuellement les éléments entre outils."
              },
              {
                "title": "Décisions produit & déploiement",
                "body": "WhatsApp comme interface de revue et approbation humaine avant publication. Parcours explicites pour approbation, rejet, régénération et expiration."
              },
              {
                "title": "Parcours",
                "body": "Sujet → contenu et visuels → aperçu WhatsApp → approbation, rejet ou régénération → publication ; expiration des demandes anciennes."
              },
              {
                "title": "Ma contribution",
                "body": "Conception et construction en cours avec n8n, AWS AI, APIs, webhooks et intégrations Meta WhatsApp/Instagram."
              },
              {
                "title": "Éléments établis & mesure à venir",
                "body": "En développement. Mesures proposées, sans résultat atteint ni audience revendiquée."
              }
            ],
            "metrics": [
              {
                "name": "Délai approbation-publication",
                "definition": "Temps médian entre l’approbation humaine et la publication réussie ; mesurer séparément la préparation de l’aperçu."
              },
              {
                "name": "Fiabilité de publication",
                "definition": "Publications approuvées et correctement publiées ÷ publications approuvées ; suivre les doublons et les échecs."
              },
              {
                "name": "Effort de revue & qualité",
                "definition": "Minutes manuelles par publication approuvée, taux d’approbation initiale et corrections factuelles nécessaires."
              }
            ]
          }
        },
        {
          "name": "Termnex",
          "tag": "Opérations de terminal · SaaS B2B",
          "status": "En développement · Préparation commerciale",
          "summary": "Un Terminal Operating System qui relie les portes, le parc, les opérateurs, le stock de conteneurs et la direction dans un processus traçable.",
          "points": [],
          "stack": ["React", "FastAPI", "PostgreSQL", "QR", "Gestion des rôles"],
          "detailLabel": "Lire l’étude de cas produit",
          "caseStudy": {
            "sections": [
              {"title": "Logique produit", "body": "Les terminaux coordonnent souvent les camions, conteneurs, équipements et frais via papier, tableurs et messages dispersés. Termnex crée un dossier opérationnel unique."},
              {"title": "Utilisateurs & besoins", "body": "Managers, agents de porte, gardiens, superviseurs terrain et grutiers disposent de vues adaptées pour gérer les mouvements et le parc."},
              {"title": "Décisions produit & déploiement", "body": "Rôles, vérification QR, horodatages, tâches de placement et retrait, files de grues, inventaire en direct, plan visuel, tarifs, alertes documentaires et journaux d’activité."},
              {"title": "Parcours", "body": "Client et chauffeur → Gate In/Out → QR → arrivée → tâche parc ou grue → emplacement → sortie, frais et journal."},
              {"title": "Ma contribution", "body": "Découverte, définition produit, conception des processus, développement full-stack, tests et préparation du lancement commercial."},
              {"title": "Éléments établis & mesure à venir", "body": "Produit fonctionnel en développement. Aucune adoption commerciale ni amélioration opérationnelle n’est encore revendiquée."}
            ],
            "metrics": [
              {"name": "Temps de rotation camion", "definition": "Temps médian et 90e percentile entre l’arrivée et la sortie."},
              {"name": "Traçabilité des mouvements", "definition": "Mouvements avec horodatages, opérateur et emplacement complets ÷ total."},
              {"name": "Précision du parc", "definition": "Concordance entre inventaire et emplacements vérifiés, avec respect des délais des tâches."}
            ]
          }
        },
        {
          "name": "Meet Your Plate",
          "tag": "Choix des plats · Menus AR",
          "href": "https://www.meetyourplate.com/",
          "summary": "Une plateforme où les restaurateurs construisent leur menu et hébergent des modèles AR — pour une découverte des plats plus riche avant la commande.",
          "points": [],
          "status": "Exploration produit complémentaire",
          "stack": [
            "AR",
            "Menus"
          ],
          "detailLabel": "Lire l’étude de cas produit",
          "caseStudy": {
            "sections": [
              {
                "title": "Logique produit",
                "body": "Une description de menu peut laisser planer un doute sur l’apparence d’un plat. Meet Your Plate explore l’utilité d’un aperçu visuel avant de commander."
              },
              {
                "title": "Utilisateurs & besoins",
                "body": "Conçu pour les clients comparant les plats et les restaurateurs mettant à jour leurs menus : comprendre un plat et présenter des informations à jour."
              },
              {
                "title": "Décisions produit & déploiement",
                "body": "Éditeur de menus avec hébergement de modèles AR. Question produit : l’aperçu réduit-il assez l’incertitude pour justifier l’étape supplémentaire et l’entretien du contenu ?"
              },
              {
                "title": "Parcours",
                "body": "Menu et modèles ajoutés par le restaurateur → consultation → aperçu AR → choix du plat."
              },
              {
                "title": "Ma contribution",
                "body": "Création du produit menu et AR présenté dans le portfolio existant. Entretiens clients, adoption et impact commercial non documentés ici."
              },
              {
                "title": "Éléments établis & mesure à venir",
                "body": "Exploration produit. KPIs à évaluer en pilote ; aucune baisse d’erreurs de commande n’est revendiquée."
              }
            ],
            "metrics": [
              {
                "name": "Taux de malentendu sur la commande",
                "definition": "Commandes corrigées pour écart entre attente et plat sélectionné ÷ commandes du pilote, avec une référence initiale."
              },
              {
                "name": "Temps de choix d’un plat",
                "definition": "Temps médian de l’ouverture du menu au choix, avec la satisfaction pour éviter d’assimiler rapidité et qualité."
              },
              {
                "name": "Utilité de l’aperçu & effort restaurateur",
                "definition": "Taux de consultation complète, confiance déclarée des clients et temps de création ou modification d’un plat."
              }
            ]
          }
        }
      ]
    },
    "experience": {
      "label": "Parcours",
      "title": "Approche produit. Aisance technique.",
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
          "title": "Stagiaire Business Development",
          "period": "Nov 2024 – Jan 2025",
          "location": "Singapour",
          "bullets": [
            "Analyse de l’onboarding de plus de 50 partenaires et clients ; refonte avec les fondateurs, atteignant 42 % d’onboarding.",
            "Suivi des KPIs dans Excel et Power BI, partage des tendances partenaires et de la veille concurrentielle.",
            "Transformation des retours clients en priorités produit."
          ]
        },
        {
          "company": "Meet Your Plate & Termnex",
          "title": "Fondateur & Product Lead",
          "period": "Projets indépendants",
          "location": "Produit & commercialisation",
          "bullets": [
            "Construction, lancement et vente de Meet Your Plate, de la découverte client à la transaction.",
            "Construction de Termnex, un Terminal Operating System reliant portes, parc, opérateurs et stock de conteneurs.",
            "Définition des rôles, QR, mouvements, emplacements, tâches grues, tarifs, alertes et reporting."
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
      "sub": "Ouvert aux rôles produit, stratégie de déploiement IA et solutions en entreprise : besoins utilisateurs, collaboration avec l’ingénierie et adoption.",
      "email": "Email",
      "linkedin": "LinkedIn",
      "resume": "CV"
    },
    "footer": {
      "rights": "Conçu avec intention à Paris."
    },
    "capabilities": {
      "label": "Ma méthode",
      "title": "Des besoins utilisateurs à l’adoption quotidienne.",
      "steps": [
        {
          "title": "01 / Comprendre",
          "body": "Échanger avec les utilisateurs et comprendre la tâche, les difficultés et les contraintes."
        },
        {
          "title": "02 / Prioriser",
          "body": "Définir le problème, cadrer le produit et convenir des mesures de succès."
        },
        {
          "title": "03 / Coordonner",
          "body": "Travailler avec l’ingénierie sur les besoins et intégrations ; prototyper avec Cursor si utile."
        },
        {
          "title": "04 / Intégrer",
          "body": "Valider avec les utilisateurs, déployer dans leur processus et évaluer adoption et résultats."
        }
      ],
      "skillsLabel": "Outils d’analyse, de prototypage et de déploiement",
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
    },
    "caseStudy": {
      "metricsLabel": "Indicateurs de succès proposés",
      "metricsNote": "Cadre d’évaluation ; ces indicateurs ne sont pas des résultats mesurés."
    }
  },
  "ar": {
    "meta": {
      "title": "عتيق سيد — المنتج واستراتيجية نشر الذكاء الاصطناعي",
      "description": "أفهم سير عمل المستخدم وأحدد أولويات المنتج وأنسق مع فرق الهندسة لنشر حلول مفيدة. أبني النماذج وأكتب الكود بأدوات مثل Cursor عندما يساعد ذلك على تطوير الفكرة."
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
      "role": "منتج · استراتيجية نشر الذكاء الاصطناعي · سير عمل المؤسسات",
      "headline": "أساعد الفرق على تحويل احتياجات المستخدمين إلى حلول تناسب سير عملهم.",
      "sub": "أفهم سير عمل المستخدم وأحدد أولويات المنتج وأنسق مع فرق الهندسة لنشر حلول مفيدة. أبني النماذج وأكتب الكود بأدوات مثل Cursor عندما يساعد ذلك على تطوير الفكرة.",
      "email": "راسلني",
      "resume": "تحميل السيرة",
      "basedIn": "باريس، فرنسا",
      "selectedWork": "استكشف أعمالي"
    },
    "about": {
      "label": "نبذة",
      "title": "فهم سير العمل هو بداية المنتج.",
      "p1": "يجمع مساري بين علوم الحاسوب في SRM University AP وتقنيات الدفع في Fiserv وماجستير الإدارة في ESSEC بين سنغافورة وباريس. أستمتع بتحويل مشكلات الأعمال إلى حلول قابلة للبناء.",
      "p2": "في سانوفي، عملت مع فرق المنتج والهندسة والأعمال لتحويل عقبات التطوير المتكررة إلى منتج ذكاء اصطناعي داخلي. وفي KidSpass.Asia، ساهمت محادثات الشركاء والعملاء في إعادة تصميم تجربة الانضمام مع الفريق المؤسس.",
      "p3": "اهتماماتي هي المنتج واستراتيجية النشر: فهم عمل الناس وتحديد احتياجات الحل ودعم تبنيه. أستطيع بناء نماذج وكتابة الكود باستخدام Cursor مع التنسيق مع فرق الهندسة. تستكشف مشاريعي الوصول الصوتي للخدمات وعمليات المحتوى ودعم القرار بصرياً."
    },
    "work": {
      "label": "أعمال مختارة",
      "title": "فهم سير العمل هو بداية المنتج.",
      "items": [
        {
          "name": "سانوفي — منتج ذكاء اصطناعي داخلي",
          "tag": "اكتشاف ← تكامل ← نشر",
          "status": "منشور داخلياً",
          "summary": "كانت الفرق تعيد بناء مكونات موجودة. قدت منتجاً داخلياً من الاكتشاف إلى النشر لمساعدة الفرق على العثور على العمل القائم وإعادة استخدامه.",
          "points": [],
          "stack": [
            "GitHub APIs",
            "Snowflake Cortex",
            "Internal datasets"
          ],
          "detailLabel": "اقرأ دراسة حالة المنتج",
          "caseStudy": {
            "sections": [
              {
                "title": "منطق المنتج",
                "body": "تكرار التطوير كان مشكلة في سير العمل: العثور على المكونات القابلة لإعادة الاستخدام قبل تخصيص الوقت والميزانية. وجّهت جلسات مع أكثر من 20 فريقاً المنتج الداخلي."
              },
              {
                "title": "المستخدمون واحتياجاتهم",
                "body": "فرق المنتج والهندسة والأعمال الداخلية التي تقيّم مبادرات الذكاء الاصطناعي: العثور على مكونات مناسبة وتقييم إعادة استخدامها وتحديد نطاق الحل."
              },
              {
                "title": "قرارات المنتج والنشر",
                "body": "ربط GitHub APIs والبيانات التجارية الداخلية وSnowflake Cortex. تحويل الاحتياجات إلى قدرات والتحقق من النتائج مع الفرق وتحسينها ودعم الاستخدام."
              },
              {
                "title": "سير العمل",
                "body": "مبادرة ← البحث عن مكونات ← تقييم الملاءمة ← إعادة الاستخدام ← التحقق والتبني."
              },
              {
                "title": "مساهمتي",
                "body": "قيادة الاكتشاف والنشر الكامل والتنسيق مع فرق المنتج والهندسة والأعمال وبناء الحل."
              },
              {
                "title": "ما ثبت وما يحتاج القياس",
                "body": "منشور داخلياً؛ شمل الاكتشاف أكثر من 20 فريقاً. لا أدّعي وفورات رقمية في الوقت أو الاستثمار."
              }
            ],
            "metrics": [
              {
                "name": "معدل إعادة الاستخدام الناجح",
                "definition": "مبادرات أعادت استخدام مكون مناسب ÷ المبادرات المقيمة."
              },
              {
                "name": "وقت العثور على مكون مفيد",
                "definition": "الوقت الوسيط من طلب البحث إلى تطابق توافق عليه الفرق."
              },
              {
                "name": "التبني والملاءمة",
                "definition": "الاستخدام المتكرر من الفرق المستهدفة ونسبة التوصيات التي تُعد مناسبة."
              }
            ]
          }
        }
      ]
    },
    "projects": {
      "label": "دراسات حالة للمنتجات",
      "title": "المستخدم والمشكلة وقرارات المنتج.",
      "intro": "لمن صُمم كل منتج وما الذي يغيره ودوري وكيف أقيم نجاحه.",
      "visit": "زيارة الموقع",
      "items": [
        {
          "name": "NidahAI",
          "tag": "الوصول للخدمة · ذكاء صوتي",
          "status": "وكيل صوتي في الإنتاج",
          "summary": "وكيل صوتي للمحادثات الواردة يفهم نية المستخدم ويدير خطوات متعددة وينفذ إجراءات عبر APIs وwebhooks.",
          "points": [],
          "href": "https://nidahai.com/",
          "linkLabel": "استكشف NidahAI",
          "stack": [
            "Voice AI",
            "Telephony",
            "APIs",
            "Webhooks"
          ],
          "detailLabel": "اقرأ دراسة حالة المنتج",
          "caseStudy": {
            "sections": [
              {
                "title": "منطق المنتج",
                "body": "ينبغي أن تساعد المحادثة الصوتية الشخص في الوصول إلى الخدمة وإنجاز المهمة. يربط NidahAI التفاعل بسير عمل تشغيلي مع إمكانية طلب مساعدة بشرية."
              },
              {
                "title": "المستخدمون واحتياجاتهم",
                "body": "مصمم للمتصلين الذين يحتاجون معلومات أو مساعدة في المواعيد ولفرق تشغيل العيادات. حل الطلب دون تكرار شرح المعلومات."
              },
              {
                "title": "قرارات المنتج والنشر",
                "body": "ربط منطق المحادثة بالهاتف والجدولة وAPIs وwebhooks مع التحويل إلى موظف. تقييم دقة الإجراءات وسرعة الوصول إلى الخدمة."
              },
              {
                "title": "سير العمل",
                "body": "مكالمة ← فهم النية ← معلومات أو موعد ← تأكيد ← تحويل بشري عند الحاجة."
              },
              {
                "title": "مساهمتي",
                "body": "تصميم وبناء وإطلاق مستقل يشمل التوجيه ومنطق المحادثة والتكاملات والجدولة والتحويل البشري."
              },
              {
                "title": "ما ثبت وما يحتاج القياس",
                "body": "وكيل صوتي في الإنتاج وفق السيرة. المؤشرات مقترحة؛ لا توجد أرقام لحجم المكالمات أو الدقة أو توفير الوقت."
              }
            ],
            "metrics": [
              {
                "name": "معدل أخطاء الطلبات",
                "definition": "إجراءات خاطئة أو غير مكتملة ÷ الإجراءات المجربة، مع فصل أخطاء فهم النية عن التنفيذ."
              },
              {
                "name": "وقت الوصول إلى الخدمة",
                "definition": "الوسيط والمئين التسعون من بداية المكالمة إلى استجابة مفيدة أو اتصال بالموظف المناسب."
              },
              {
                "name": "الحل وجودة التحويل",
                "definition": "طلبات حُلّت بصورة صحيحة دون اتصال متكرر؛ اتصالات بشرية ناجحة ÷ محاولات التحويل."
              }
            ]
          }
        },
        {
          "name": "Business Explainer",
          "tag": "عمليات المحتوى · موافقة بشرية",
          "status": "قيد التطوير",
          "summary": "نظام يختار موضوعات تعليمية عن الأعمال ويولد محتوى Instagram وتصاميم المنشورات ويرسل معاينات إلى WhatsApp للموافقة البشرية.",
          "points": [],
          "stack": [
            "n8n",
            "AWS AI",
            "Meta APIs",
            "WhatsApp",
            "Webhooks"
          ],
          "detailLabel": "اقرأ دراسة حالة المنتج",
          "caseStudy": {
            "sections": [
              {
                "title": "منطق المنتج",
                "body": "إنتاج المحتوى يشمل اختيار الموضوع والتحقق والمراجعة والموافقة. يربط المنتج هذه الخطوات مع إبقاء القرار التحريري بيد الإنسان."
              },
              {
                "title": "المستخدمون واحتياجاتهم",
                "body": "مصمم لصانع أو مشغل المحتوى التعليمي عن الأعمال، والمتعلمون هم الجمهور المقصود. مراجعة المحتوى ونشره دون نقل يدوي بين أدوات منفصلة."
              },
              {
                "title": "قرارات المنتج والنشر",
                "body": "WhatsApp واجهة للمراجعة مع موافقة بشرية قبل النشر ومسارات واضحة للموافقة والرفض وإعادة التوليد وانتهاء الصلاحية."
              },
              {
                "title": "سير العمل",
                "body": "موضوع ← محتوى وتصاميم ← معاينة WhatsApp ← موافقة أو رفض أو إعادة توليد ← نشر؛ انتهاء صلاحية الطلبات القديمة."
              },
              {
                "title": "مساهمتي",
                "body": "تصميم وبناء جارٍ باستخدام n8n وAWS AI وAPIs وwebhooks وتكاملات Meta WhatsApp/Instagram."
              },
              {
                "title": "ما ثبت وما يحتاج القياس",
                "body": "قيد التطوير. المؤشرات مقترحة وليست نتائج محققة أو ادعاءً بوجود جمهور."
              }
            ],
            "metrics": [
              {
                "name": "زمن الموافقة إلى النشر",
                "definition": "الوقت الوسيط من الموافقة البشرية إلى النشر الناجح، مع قياس وقت إعداد المعاينة منفصلاً."
              },
              {
                "name": "موثوقية النشر",
                "definition": "منشورات معتمدة نُشرت بصورة صحيحة ÷ المنشورات المعتمدة، مع متابعة التكرار والفشل."
              },
              {
                "name": "جهد المراجعة وجودة المحتوى",
                "definition": "الدقائق اليدوية لكل منشور معتمد ونسبة الموافقة من المرة الأولى والتصحيحات الواقعية اللازمة."
              }
            ]
          }
        },
        {
          "name": "Termnex",
          "tag": "تشغيل محطات الحاويات · SaaS B2B",
          "status": "قيد التطوير · التحضير للتسويق",
          "summary": "نظام تشغيل يربط بوابات المحطة والساحة ومشغلي المعدات ومخزون الحاويات والإدارة في سير عمل واحد قابل للتتبع.",
          "points": [],
          "stack": ["React", "FastAPI", "PostgreSQL", "QR", "Role-based access"],
          "detailLabel": "اقرأ دراسة حالة المنتج",
          "caseStudy": {
            "sections": [
              {"title": "منطق المنتج", "body": "تدير ساحات الحاويات الشاحنات والحاويات والمعدات والرسوم عبر الورق والجداول والرسائل المتفرقة. ينشئ Termnex سجلاً تشغيلياً موحداً."},
              {"title": "المستخدمون واحتياجاتهم", "body": "يستخدمه المديرون وموظفو البوابة والحراس ومشرفو الساحة ومشغلو الرافعات لإدارة الحركات والمهام والمخزون."},
              {"title": "قرارات المنتج والنشر", "body": "صلاحيات حسب الدور، تحقق QR، أوقات الوصول والخروج، مهام الوضع والاستلام، طوابير الرافعات، المخزون المباشر، مخطط الساحة، التعرفة، تنبيهات المستندات وسجل النشاط."},
              {"title": "سير العمل", "body": "تسجيل العميل والسائق ← Gate In/Out ← تحقق QR ← وصول ← مهمة ساحة أو رافعة ← تحديث الموقع ← خروج ورسوم وسجل."},
              {"title": "مساهمتي", "body": "أملك اكتشاف المشكلة وتعريف المنتج وتصميم سير العمل والبناء الكامل والاختبار والتحضير للإطلاق التجاري."},
              {"title": "ما ثبت وما يحتاج القياس", "body": "منتج عامل قيد التطوير. لا أدعي بعد تبنياً تجارياً أو تحسناً تشغيلياً."}
            ],
            "metrics": [
              {"name": "زمن دوران الشاحنة", "definition": "الوسيط والمئين التسعون من الوصول إلى الخروج."},
              {"name": "تتبع الحركة", "definition": "الحركات المكتملة بالتوقيت والمشغل والموقع ÷ إجمالي الحركات."},
              {"name": "دقة الساحة", "definition": "مطابقة المخزون للمواقع المؤكدة وإنجاز المهام ضمن الوقت المتوقع."}
            ]
          }
        },
        {
          "name": "Meet Your Plate",
          "tag": "اختيار الأطباق · قوائم AR",
          "href": "https://www.meetyourplate.com/",
          "summary": "منصة يبني فيها أصحاب المطاعم قوائمهم ويستضيفون نماذج واقع معزز لتجربة أغنى قبل الطلب.",
          "points": [],
          "status": "استكشاف إضافي للمنتجات",
          "stack": [
            "AR",
            "Menus"
          ],
          "detailLabel": "اقرأ دراسة حالة المنتج",
          "caseStudy": {
            "sections": [
              {
                "title": "منطق المنتج",
                "body": "قد تترك أوصاف القائمة شكاً حول شكل الطبق. يستكشف Meet Your Plate كيف تساعد المعاينة البصرية على اختيار أكثر ثقة قبل الطلب."
              },
              {
                "title": "المستخدمون واحتياجاتهم",
                "body": "مصمم للزبائن الذين يقارنون الأطباق وأصحاب المطاعم الذين يحدثون قوائمهم: فهم الطبق وعرض معلومات حديثة."
              },
              {
                "title": "قرارات المنتج والنشر",
                "body": "محرر قوائم مع نماذج AR مستضافة. هل تقلل المعاينة الغموض بما يكفي لتبرير الخطوة الإضافية للزبون وجهد تحديث المحتوى للمطعم؟"
              },
              {
                "title": "سير العمل",
                "body": "إضافة القائمة والنماذج ← تصفح الأطباق ← معاينة AR ← اختيار الطلب."
              },
              {
                "title": "مساهمتي",
                "body": "إنشاء منتج القوائم وAR المعروض في المحفظة القائمة. لا تتوفر هنا بيانات مقابلات العملاء أو التبني أو الأثر التجاري."
              },
              {
                "title": "ما ثبت وما يحتاج القياس",
                "body": "استكشاف منتج. تحتاج المؤشرات تجربة في مطاعم؛ لا تدّعي المحفظة انخفاض أخطاء الطلبات."
              }
            ],
            "metrics": [
              {
                "name": "معدل سوء فهم الطلب",
                "definition": "طلبات صُححت بسبب اختلاف التوقع عن الطبق المختار ÷ طلبات التجربة، بالمقارنة مع خط أساس."
              },
              {
                "name": "وقت اختيار الطبق",
                "definition": "الوقت الوسيط من فتح القائمة إلى الاختيار، مع قياس الرضا وعدم افتراض أن الأسرع أفضل."
              },
              {
                "name": "فائدة المعاينة وجهد المطعم",
                "definition": "نسبة إكمال المعاينة وثقة الزبون ووقت إنشاء أو تحديث عنصر القائمة."
              }
            ]
          }
        }
      ]
    },
    "experience": {
      "label": "الخبرة",
      "title": "تفكير المنتج. إلمام تقني.",
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
          "title": "متدرب تطوير الأعمال",
          "period": "نوفمبر 2024 – يناير 2025",
          "location": "سنغافورة",
          "bullets": [
            "حللت انضمام أكثر من 50 شريكاً وعميلاً وأعدت تصميم المسار مع المؤسسين، ليصل إلى 42%.",
            "تابعت مؤشرات المنتج في Excel وPower BI وشاركت اتجاهات الشركاء وتحليلات المنافسين.",
            "حوّلت الملاحظات إلى أولويات للمنتج."
          ]
        },
        {
          "company": "Meet Your Plate & Termnex",
          "title": "المؤسس وقائد المنتج",
          "period": "مشاريع مستقلة",
          "location": "تطوير المنتج وتسويقه",
          "bullets": [
            "بنيت وأطلقت وبعت Meet Your Plate من اكتشاف العميل إلى البيع.",
            "أبني Termnex، نظام تشغيل لساحات الحاويات يربط البوابة والساحة والمشغلين والمخزون.",
            "صممت الصلاحيات والتحقق عبر QR وحركات الحاويات ومهام الرافعات والتعرفة والتنبيهات والتقارير."
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
      "sub": "مهتم بأدوار المنتج واستراتيجية نشر الذكاء الاصطناعي وحلول المؤسسات التي تجمع فهم المستخدم والتعاون مع الهندسة والتبني.",
      "email": "البريد",
      "linkedin": "لينكدإن",
      "resume": "السيرة"
    },
    "footer": {
      "rights": "صُمم بعناية في باريس."
    },
    "capabilities": {
      "label": "طريقة عملي",
      "title": "من احتياجات المستخدم إلى الاستخدام اليومي.",
      "steps": [
        {
          "title": "01 / فهم",
          "body": "التحدث مع المستخدم وفهم المهمة والعقبات والقيود قبل اختيار الحل."
        },
        {
          "title": "02 / أولويات",
          "body": "تحديد المشكلة ونطاق المنتج ومقاييس النجاح."
        },
        {
          "title": "03 / تنسيق",
          "body": "التعاون مع الهندسة على المتطلبات والتكاملات وبناء نماذج بـ Cursor عند الحاجة."
        },
        {
          "title": "04 / تبني",
          "body": "التحقق مع المستخدم والنشر في سير العمل وتقييم الاستخدام والنتائج."
        }
      ],
      "skillsLabel": "أدوات التحليل والنماذج والنشر",
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
    },
    "caseStudy": {
      "metricsLabel": "مؤشرات نجاح مقترحة",
      "metricsNote": "إطار تقييم؛ هذه المؤشرات ليست نتائج مقاسة."
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
