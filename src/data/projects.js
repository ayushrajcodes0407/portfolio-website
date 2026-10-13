export const categories = [
  "All",
  "AI / Intelligent Systems",
  "Machine Learning",
  "Computer Vision",
  "Recommendation Systems",
  "Full-Stack Systems",
];

export const currentlyBuilding = [
  {
    id: "hra-mental-roberta-lab",
    title: "HRA Mental-RoBERTa: Risk-Aware Clinical NLP",
    status: "Research Prototype",
    category: "AI / Intelligent Systems",
    description:
      "Hierarchical risk-aware transformer architecture decoupling binary triage from multi-class severity screening and suicidal ideation detection with rule-based safety thresholds.",
    techStack: ["PyTorch", "RoBERTa", "Hugging Face", "Clinical NLP", "Scikit-learn"],
    github: "https://github.com/ayushrajcodes0407/HRA-Mental-Roberta-2026",
    metrics: "Two-stage hierarchical screening with bootstrap validation",
  },
  {
    id: "artificial-wisdom-engine",
    title: "Artificial Wisdom: Context-Aware Reasoning Core",
    status: "Research & Prototype",
    category: "AI / Intelligent Systems",
    description:
      "Dual-engine decision framework integrating dense vector retrieval (FAISS), tabular gradient-boosted trees (XGBoost/LightGBM), and SHAP explainability matrices for high-stakes decision contexts.",
    techStack: ["Python", "XGBoost", "LightGBM", "FAISS", "Sentence-Transformers", "SHAP"],
    github: "",
    metrics: "Hybrid semantic-tabular fusion architecture",
  },
  {
    id: "data-sarthi-platform",
    title: "Data Sarthi: Automated EDA & ML Benchmarking",
    status: "Deployed & Maintained",
    category: "Machine Learning",
    description:
      "Interactive data analysis workbench providing automated exploratory profiling, statistical summaries, quality diagnostics, visual distribution charts, and ML baseline benchmarks.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Matplotlib"],
    github: "https://github.com/ayushrajcodes0407/data_sarthi",
    demo: "https://data-sarthi.vercel.app/",
    metrics: "Automated end-to-end data exploration & baseline benchmarking",
  },
  {
    id: "be11-tournament-engine",
    title: "BE11: Match & Tournament Engine",
    status: "In Progress",
    category: "Full-Stack Systems",
    description:
      "Architecting automated tournament brackets, real-time match scheduling algorithms, and high-concurrency slot booking pipelines for the BE11 sports platform.",
    techStack: ["TypeScript", "React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    github: "",
    metrics: "Sub-50ms slot allocation & atomic transaction locks",
  },
];

export const featuredProjects = [
  {
    id: "hra-mental-roberta",
    number: "01",
    title: "HRA Mental-RoBERTa",
    subtitle: "Hierarchical Risk-Aware Mental-Health Screening Framework",
    category: "Machine Learning",
    shortDescription:
      "A hierarchical transformer-based clinical screening architecture decoupling binary triage from multi-class severity classification and suicidal ideation detection.",
    overview:
      "A research-grade NLP framework designed for early, risk-sensitive screening of psychological conditions from unstructured social-media text. Developed as part of international research with NTNU (Dr. Alok Mishra) and BIT Mesra (Dr. Kamta Nath Mishra). Features a two-stage hierarchical pipeline with a rule-based safety decision layer and rigorous statistical validation.",
    techStack: [
      "RoBERTa",
      "PyTorch",
      "Hugging Face",
      "Clinical NLP",
      "Statistical Validation",
      "Scikit-learn",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407/HRA-Mental-Roberta-2026",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Architecture", value: "Two-Stage NLP" },
      { label: "Backbone", value: "Mental-RoBERTa" },
      { label: "Screening Accuracy", value: ">90% System-Level" },
    ],
    caseStudy: {
      problem:
        "Standard flat multi-class classifiers suffer from severe class imbalance and unacceptable false-negative rates on acute psychological distress and suicidal ideation signals.",
      solution:
        "Engineered a two-stage hierarchical transformer architecture that separates broad triage (Normal vs. At-Risk) from granular multi-class severity classification, fortified with deterministic safety thresholds.",
      architecture: [
        "Stage 1 Binary Triage: High-sensitivity filter isolating potential psychological distress indicators from benign content.",
        "Stage 2 Multi-Class Classifier: Fine-tuned RoBERTa allocating specific condition tags and suicidal ideation markers.",
        "Safety Decision Layer: Rule-based thresholding prioritizing recall on acute risk signals to prevent false negatives.",
        "Empirical Validation: Rigorous bootstrap confidence intervals, confusion matrix error decomposition, and TP/FP/FN analysis.",
      ],
      highlights: [
        "Decoupled triage pipeline minimizing critical false-negative diagnostic errors.",
        "Class-weighted cross-entropy loss addressing extreme clinical dataset imbalances.",
        "Evaluated with bootstrap confidence intervals and confusion matrix error decomposition.",
        "Research prototype submitted for review; not a clinically validated diagnostic system.",
      ],
      results: "Developed an empirical NLP framework achieving >90% system-level screening accuracy under clinically aligned metrics.",
    },
  },
  {
    id: "artificial-wisdom",
    number: "02",
    title: "Artificial Wisdom",
    subtitle: "Context-Aware Decision Intelligence & Hybrid Reasoning Framework",
    category: "AI / Intelligent Systems",
    shortDescription:
      "A research-driven decision framework combining tabular machine learning, dense vector retrieval (FAISS), and SHAP explainability for high-reliability decision making.",
    overview:
      "Artificial Wisdom bridges the gap between statistical tabular models and dynamic unstructured semantic retrieval. It enables automated systems to ground numerical gradient-boosted predictions with rich contextual knowledge while preserving mathematical explainability.",
    techStack: [
      "Python",
      "XGBoost",
      "LightGBM",
      "FAISS",
      "RAG",
      "Sentence Transformers",
      "SHAP",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Fusion", value: "Tabular + RAG" },
      { label: "Explainability", value: "SHAP Values" },
      { label: "Retrieval", value: "FAISS Dense" },
    ],
    caseStudy: {
      problem:
        "Standard machine learning models fail when critical decision contexts reside in unstructured text or dynamic external signals. Conversely, purely generative models hallucinate and lack deterministic numerical guarantees.",
      solution:
        "Architected a hybrid reasoning framework that pairs high-accuracy tabular gradient-boosted trees (XGBoost/LightGBM) with dense vector retrieval (FAISS) and a SHAP explainability layer.",
      architecture: [
        "Context Ingestion: Vectorizes domain documents and dynamic signals using Sentence Transformers into a FAISS index.",
        "Predictive Modeling: Structured tabular features processed via XGBoost and LightGBM for deterministic probability estimation.",
        "Semantic Fusion: Merges statistical signals with retrieved contextual embeddings for comprehensive decision synthesis.",
        "Explainability Layer: Computes Shapley additive explanations (SHAP) to attribute individual feature contributions.",
      ],
      highlights: [
        "Unified tabular machine learning with dense semantic retrieval.",
        "Eliminated black-box opacity through granular SHAP feature-importance attribution.",
        "Designed for high-reliability decision making in enterprise and research environments.",
      ],
      results: "Constructed an explainable hybrid architecture combining statistical machine learning with contextual semantic grounding.",
    },
  },
  {
    id: "bccl-ppe-compliance",
    number: "03",
    title: "BCCL Vision PPE Compliance System",
    subtitle: "Real-Time Industrial Safety & Protective Gear Detection",
    category: "Computer Vision",
    shortDescription:
      "A real-time computer-vision safety system developed during my BCCL internship for automated PPE compliance (helmets, vests, safety gear) in industrial coal mining environments.",
    overview:
      "Developed at Bharat Coking Coal Limited (BCCL) to address workplace safety standards in harsh industrial terrains. The model automates continuous surveillance for protective gear compliance without requiring manual monitoring.",
    techStack: [
      "YOLOv8",
      "Python",
      "Computer Vision",
      "OpenCV",
      "Flask",
      "Streamlit",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Annotated Frames", value: "5,000+" },
      { label: "Safety Detection", value: "~77% mAP" },
      { label: "Edge Latency", value: "<1s Latency" },
    ],
    caseStudy: {
      problem:
        "In industrial mining operations, manual safety compliance monitoring is hazardous, labor-intensive, and cannot provide continuous 24/7 coverage across distributed hazardous work zones.",
      solution:
        "Built a specialized deep-learning object detection pipeline using custom-trained YOLOv8 architectures capable of identifying hard hats, reflective vests, and safety gear in low-light and dusty environments.",
      architecture: [
        "Data Engineering: Assembled, cleaned, and annotated 5,000+ domain-specific industrial images under severe lighting variations.",
        "Model Training: Fine-tuned YOLOv8 object detection networks with specialized bounding-box regression loss.",
        "Inference & API: Flask-based inference engine delivering sub-second frame processing and automated breach logging.",
        "Interface: Streamlit operations dashboard displaying real-time video stream annotations and compliance logs.",
      ],
      highlights: [
        "Curated and labeled a 5,000+ image dataset under real-world mining and coal field conditions.",
        "Achieved approximately 77% mean Average Precision (mAP) on critical safety gear classes.",
        "Enabled sub-second inference latency for immediate non-compliance alerts.",
      ],
      results: "Delivered a verified ~77% mAP detection pipeline with sub-second latency across 5,000+ annotated industrial images.",
    },
  },
  {
    id: "bccl-predictive-analytics",
    number: "04",
    title: "BCCL Predictive Analytics Platform",
    subtitle: "Coal Production Forecasting & Operational Dispatch Planning",
    category: "Machine Learning",
    shortDescription:
      "Predictive modeling and operational analytics framework developed during BCCL internship for industrial telemetry, coal-production forecasting, and dispatch planning.",
    overview:
      "Applied statistical machine learning and exploratory time-series modeling to historical operational data from mining operations across 7 locations in Dhanbad to forecast production bottlenecks, dispatch schedules, and reserves.",
    techStack: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "FastAPI",
      "Streamlit",
      "OpenAI API",
      "Pandas",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Historical Data", value: "3 Years Mining" },
      { label: "Predictive Power", value: "R²: 0.85–0.92" },
      { label: "Interface", value: "FastAPI + LLM" },
    ],
    caseStudy: {
      problem:
        "Industrial coal mining operations generate vast quantities of operational and machinery data, but raw logs remain siloed, preventing proactive maintenance and operational optimization.",
      solution:
        "Developed a multi-output predictive analytics pipeline using Random Forest regression and preprocessing transformers to model coal production, dispatch volumes, and reserve depletion.",
      architecture: [
        "Data Engineering: Aggregated and preprocessed 3 years of mining logs across 7 Dhanbad operational locations.",
        "Feature Engineering: Created rolling temporal aggregates, lagged production metrics, cost factors, and ColumnTransformer pipelines.",
        "Predictive Modeling: Multi-output Random Forest regression modeling achieving R² of 0.85 to 0.92.",
        "Interactive Dashboards: Built FastAPI + Streamlit interface with an integrated conversational LLM interface for natural-language queries.",
      ],
      highlights: [
        "Extracted actionable operational signals from complex industrial mining logs.",
        "Engineered temporal features capturing shift-based and machinery-utilization trends.",
        "Integrated conversational OpenAI querying for immediate stakeholder decision support.",
      ],
      results: "Achieved R² of 0.85–0.92 on coal production and dispatch forecasting across 7 operational mining locations.",
    },
  },
  {
    id: "data-sarthi",
    number: "05",
    title: "Data Sarthi",
    subtitle: "Automated Exploratory Data Analysis & Machine Learning Platform",
    category: "Machine Learning",
    shortDescription:
      "An automated data intelligence platform that streamlines exploratory data analysis, automated feature preprocessing, statistical diagnostics, and ML model benchmarking.",
    overview:
      "Data Sarthi accelerates the data science workflow by providing instant exploratory analytics, automated missing-value handling, outlier detection, correlation matrices, and automated baseline model comparisons through an intuitive interactive interface.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407/data_sarthi",
      demo: "https://data-sarthi.vercel.app/",
    },
    featured: true,
    metrics: [
      { label: "Workflow", value: "Automated" },
      { label: "Analytics", value: "Real-Time" },
      { label: "Benchmarking", value: "Multi-Model ML" },
    ],
    caseStudy: {
      problem:
        "Data scientists and analysts spend disproportionate time writing repetitive code for initial data profiling, cleaning, feature distributions, and baseline model evaluations.",
      solution:
        "Developed Data Sarthi as a unified interactive dashboard that ingests tabular datasets and generates comprehensive statistical profiling, visual distribution plots, and automated benchmark models.",
      architecture: [
        "Data Ingestion & Profiling: Automated type inference, missing value detection, skewness measurement, and summary statistics.",
        "Visual Diagnostics: Dynamic generation of correlation heatmaps, pairplots, boxplots, and feature histograms.",
        "Preprocessing Engine: Standard scaling, one-hot encoding, and automated train-test splitting.",
        "Model Benchmarking: Rapid evaluation of multiple classification and regression algorithms with standard performance metrics.",
      ],
      highlights: [
        "Instant dataset diagnostics reducing exploratory analysis turnaround time.",
        "Modular pipeline adaptable to diverse tabular data schemas.",
        "Clear comparative evaluation tables across standard ML metrics (Accuracy, F1, RMSE, R²).",
      ],
      results: "Created an end-to-end automated data exploration and baseline modeling workbench with live deployment.",
    },
  },
  {
    id: "loan-approval-prediction",
    number: "06",
    title: "Loan Approval Prediction",
    subtitle: "ML Baselines & LLM-Assisted Financial Risk Decision Support",
    category: "Machine Learning",
    shortDescription:
      "An experimental financial decision-support prototype comparing baseline machine learning models with contextual LLM reasoning for credit risk assessment.",
    overview:
      "Built a predictive risk-evaluation system comparing traditional machine learning classifiers (Random Forest, Logistic Regression) with an LLM-assisted decision engine for credit assessment in the Indian financial context. Integrates applicant profile data with explainable AI reasoning.",
    techStack: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Logistic Regression",
      "OpenAI API",
      "Flask",
      "Pandas",
      "XAI",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Dataset Scale", value: "10K+ Records" },
      { label: "Baseline Accuracy", value: "~89% Accuracy" },
      { label: "Decision Lift", value: "~12% Quality Lift" },
    ],
    caseStudy: {
      problem:
        "Conventional credit scoring models evaluate static numerical features but miss nuanced contextual risk factors. Unchecked rule engines lack flexibility, while pure black-box models lack interpretability for applicant disclosures.",
      solution:
        "Built an experimental decision-support pipeline evaluating 10,000+ credit records, comparing standard Scikit-learn tabular baselines with an LLM-assisted contextual risk assessment engine deployed in Flask.",
      architecture: [
        "Data Preprocessing: Automated cleaning, missing-value imputation, and feature encoding across 10K+ applicant profiles on the Credit Risk Dataset.",
        "Baseline ML Models: Evaluated Random Forest and Logistic Regression classifiers, establishing an ~89% predictive accuracy baseline.",
        "LLM Contextual Reasoning: Integrated OpenAI API for qualitative applicant factor analysis (employment stability, regional context, CIBIL depth).",
        "Comparative Dashboard: Flask web interface displaying side-by-side model predictions and decision explanations.",
      ],
      highlights: [
        "Demonstrated ~89% baseline classification accuracy on Credit Risk dataset.",
        "Achieved ~12% qualitative decision improvement using LLM-assisted context assessment.",
        "Provided clear explainability layer for risk attribution.",
        "Experimental prototype; not a validated commercial lending system.",
      ],
      results: "Built and evaluated a prototype financial risk analysis system combining statistical machine learning with contextual LLM decision support.",
    },
  },
  {
    id: "twitter-sentiment-analysis",
    number: "07",
    title: "Twitter/X Sentiment Analysis",
    subtitle: "NLP Sentiment Classification & Real-Time Social Polarity Dashboard",
    category: "Machine Learning",
    shortDescription:
      "A production-grade NLP application for real-time Twitter/X sentiment classification and polarity scoring using VADER lexicon heuristics and TF-IDF machine learning pipelines.",
    overview:
      "An intelligent natural language processing and machine learning analytics platform designed to evaluate, classify, and visualize emotional polarity across social media text in real time. Features single tweet classification, compound polarity scoring (-1.0 to +1.0), and batch CSV processing.",
    techStack: [
      "Python",
      "NLP",
      "VADER",
      "Scikit-learn",
      "TF-IDF",
      "Streamlit",
      "Pandas",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407/twitter-sentiment-analysis",
      demo: "https://twitter-sentiment-analysis-qsbvpku4tmcngnasys43qf.streamlit.app/",
    },
    featured: true,
    metrics: [
      { label: "Lexicon", value: "VADER NLP" },
      { label: "Dataset", value: "1.6M Tweets" },
      { label: "Inference", value: "Sub-Second" },
    ],
    caseStudy: {
      problem:
        "Analyzing unstructured microblogging social text in real time is hindered by informal slang, abbreviations, emojis, and nuanced sentiment negations.",
      solution:
        "Engineered a dual-engine architecture combining VADER social-media lexicon heuristics with an offline supervised TF-IDF + Logistic Regression pipeline trained on 1.6 million Sentiment140 tweets.",
      architecture: [
        "Text Preprocessing: Regex sanitization, URL/handle stripping, stopword filtering, and Porter stemming.",
        "Lexicon Valence Engine: Calibrates compound polarity (-1.0 to +1.0) with granular valence distribution percentages.",
        "Supervised Model: Benchmarking TF-IDF vector representations with Logistic Regression classification.",
        "Interactive Dashboard: Streamlit application with polarity distribution charts and batch CSV data export.",
      ],
      highlights: [
        "Integrated VADER lexicon heuristics optimized specifically for social media microtext.",
        "Sub-second real-time sentiment scoring across positive, negative, and neutral classes.",
        "Batch analysis pipeline with downloadable annotated CSV reports.",
      ],
      results: "Built and deployed an end-to-end NLP sentiment intelligence system with sub-second latency.",
    },
  },
  {
    id: "spotify-recommender",
    number: "08",
    title: "Spotify Recommendation System",
    subtitle: "Acoustic Feature Similarity & Music Recommendation Engine",
    category: "Recommendation Systems",
    shortDescription:
      "A machine-learning recommendation engine that analyzes acoustic audio features and listening preferences to generate personalized track recommendations using vector similarity.",
    overview:
      "This system utilizes multi-dimensional audio feature representations (danceability, energy, acousticness, valence, tempo) and user preference signals to deliver content-based track recommendations with high acoustic coherence.",
    techStack: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Cosine Similarity",
      "Streamlit",
      "Pandas",
      "Vector Embeddings",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407/Spotify-Content-Based-Recommendation-System",
      demo: "https://ayushrajcodes0407-spotify-content-based-recommendation-lab.streamlit.app/",
    },
    featured: true,
    metrics: [
      { label: "Similarity", value: "Cosine / Vector" },
      { label: "Features", value: "Multi-Acoustic" },
      { label: "Filtering", value: "Content-Based" },
    ],
    caseStudy: {
      problem:
        "Music streaming catalogs contain millions of tracks, making discovery difficult without understanding the intricate acoustic relationships and multi-feature characteristics of songs.",
      solution:
        "Engineered a content-based recommendation engine that normalizes track acoustic metadata into high-dimensional vector spaces and computes nearest-neighbor cosine similarity for track recommendations.",
      architecture: [
        "Feature Normalization: Preprocesses and normalizes diverse acoustic attributes into standardized continuous feature vectors.",
        "Similarity Engine: Implements optimized cosine similarity and nearest-neighbor lookups across the audio feature matrix.",
        "Personalization Layer: Aggregates user listening histories to construct composite user preference profiles.",
        "Recommendation Delivery: Ranks and serves top-K candidate songs matching the user's acoustic profile via an interactive Streamlit UI.",
      ],
      highlights: [
        "Vectorized acoustic feature matching across multi-attribute audio dimensions.",
        "Efficient similarity computation enabling real-time playlist generation.",
        "Mitigates cold-start issues for newly released tracks with complete audio profiles.",
      ],
      results: "Developed a responsive audio recommendation pipeline providing personalized track discovery based on acoustic similarity.",
    },
  },
  {
    id: "jarvis-ai-agent",
    number: "09",
    title: "JARVIS: Voice Assistant & AI Agent",
    subtitle: "Speech Recognition, Wake-Word Detection & System Automation",
    category: "AI / Intelligent Systems",
    shortDescription:
      "A Python-based intelligent voice assistant engineered for real-time speech recognition, wake-word detection, conversational command execution, and automated workflow control.",
    overview:
      "JARVIS is a modular voice assistant and system automation agent. It integrates continuous acoustic listening, speech-to-text processing, text-to-speech synthesis, intent parsing, and programmatic system action execution in Python.",
    techStack: [
      "Python",
      "Speech Recognition",
      "Pyttsx3",
      "NLP",
      "Wake-Word Detection",
      "Automation Engine",
      "AsyncIO",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Interaction", value: "Voice / Audio" },
      { label: "Listening", value: "Continuous" },
      { label: "Execution", value: "System Tools" },
    ],
    caseStudy: {
      problem:
        "Standard conversational interfaces require manual text input, restricting hands-free operational control and direct hardware system automation.",
      solution:
        "Engineered a Python-based voice interface featuring microphone audio stream capture, wake-word activation, offline/online speech recognition, and modular command routing.",
      architecture: [
        "Audio Capture & Wake Word: Continuous background audio stream monitoring for target trigger phrase detection.",
        "Speech Recognition: Transcribes user voice commands into structured text with noise-filtering thresholds.",
        "Intent Parsing: Maps natural language queries to local system operations, web navigation, and automation scripts.",
        "Voice Synthesis: Audio feedback generation using speech synthesis engines.",
      ],
      highlights: [
        "Continuous hands-free wake-word detection and prompt processing.",
        "Extensible plugin architecture for custom automation routines.",
        "Robust error recovery handling ambiguous or inaudible audio signals.",
      ],
      results: "Built a functional Python voice assistant framework with continuous listening and system automation capabilities.",
    },
  },
  {
    id: "be11-sports-platform",
    number: "10",
    title: "BE11",
    subtitle: "High-Concurrency Sports Venue Booking & Match Platform",
    category: "Full-Stack Systems",
    shortDescription:
      "A high-performance sports venue booking platform designed for cricket and football, featuring venue discovery, seamless booking flows, secure payments, vendor management, and admin controls.",
    overview:
      "BE11 is an end-to-end sports tech platform built to streamline sports venue bookings for athletes and facility owners. It solves the friction of scheduling, vendor payouts, slot collision, and player matching through an intuitive user interface and a resilient backend architecture.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Transactions", value: "ACID Atomic" },
      { label: "Allocation", value: "<50ms Latency" },
      { label: "Security", value: "Role-Based RBAC" },
    ],
    caseStudy: {
      problem:
        "Sports facilities and tournament organizers frequently suffer from manual slot booking errors, double-booked grounds, delayed vendor settlements, and fragmented player communication.",
      solution:
        "Engineered an all-in-one sports platform with atomic booking transactions, interactive slot selection, vendor management portals, secure payment integration, and administrative controls for match oversight.",
      architecture: [
        "Frontend: Modular React + TypeScript application with fast client-side state management and responsive booking calendars.",
        "Backend: RESTful Express micro-services providing JWT authentication, vendor management endpoints, and payment verification.",
        "Database: PostgreSQL managed through Prisma ORM with strict ACID guarantees preventing double bookings.",
        "Deployment: Vercel edge deployment for web clients and cloud-hosted containerized APIs.",
      ],
      highlights: [
        "Real-time venue discovery with sport-specific filters (Cricket pitches, Football turfs, Indoor arenas).",
        "Role-based access control for Venue Owners, Match Admins, and Athletes.",
        "Automated booking confirmation and transparent invoice generation.",
      ],
      results: "Engineered scalable architecture supporting high-volume weekend booking surges with zero concurrency race conditions.",
    },
  },
  {
    id: "vacation-mantra-crm",
    number: "11",
    title: "Vacation Mantra CRM & Safvora",
    subtitle: "Enterprise Operations CRM & Luxury Bespoke Gifting Storefront",
    category: "Full-Stack Systems",
    shortDescription:
      "Enterprise customer relationship management platform with automated lead distribution funnels alongside Safvora.gifting, a luxury bespoke e-commerce storefront.",
    overview:
      "A dual showcase of production web engineering: a high-throughput enterprise CRM platform designed for lead management, customer booking workflows, and employee hierarchy at Vacation Mantra Technologies, alongside Safvora.gifting, a motion-driven luxury storefront.",
    techStack: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: {
      github: "",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Architecture", value: "Enterprise REST" },
      { label: "Animation", value: "60 FPS Fluid" },
      { label: "Database", value: "Relational Prisma" },
    ],
    caseStudy: {
      problem:
        "Enterprises require robust internal tooling to orchestrate complex multi-step sales funnels, while consumer brands require bespoke interactive visualizers with high-performance animations.",
      solution:
        "Engineered full-stack solutions: a structured enterprise CRM with role-based routing and automated lead scoring, coupled with a fluid, motion-driven luxury e-commerce experience.",
      architecture: [
        "Enterprise CRM: Express backend with Prisma ORM modeling customer lifecycles, agent territories, and real-time conversion metrics.",
        "Consumer Storefront: React and Framer Motion frontend providing bespoke product customizers and dynamic pricing calculators.",
        "Design System: Modern luxury design tokens with dark glass aesthetic and responsive viewport adaptation.",
      ],
      highlights: [
        "Automated lead assignment algorithms based on sales agent capacity and territory.",
        "Bespoke interactive gift visualizer with real-time dynamic pricing computation.",
        "Resilient, modular architecture separating administrative dashboards from consumer storefronts.",
      ],
      results: "Shipped reliable enterprise tooling and a polished consumer storefront with seamless user experience.",
    },
  },
];

export const allProjects = featuredProjects;
