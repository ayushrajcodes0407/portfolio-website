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
    id: "be11-tournament-engine",
    title: "BE11 — Match & Tournament Engine",
    status: "Active Engineering",
    category: "Full-Stack Systems",
    description:
      "Architecting automated tournament brackets, real-time match scheduling algorithms, and high-concurrency slot booking pipelines for the BE11 sports platform.",
    techStack: ["TypeScript", "React", "Node.js", "Express", "Prisma", "PostgreSQL", "Socket.io"],
    github: "https://github.com/ayushrajcodes0407",
    metrics: "Sub-50ms slot allocation & atomic transaction locks",
  },
  {
    id: "edge-vision-ppe",
    title: "Edge Vision Multi-Class Industrial PPE Streamer",
    status: "Lab Experiment",
    category: "Computer Vision",
    description:
      "Optimizing YOLO inference pipelines on edge hardware for multi-camera video feeds, real-time bounding box tracking, and automated safety breach alerting.",
    techStack: ["Python", "YOLO", "OpenCV", "CUDA", "Flask", "Streamlit"],
    github: "https://github.com/ayushrajcodes0407",
    metrics: "Sub-second inference across live multi-stream feeds",
  },
  {
    id: "artificial-wisdom-engine",
    title: "Artificial Wisdom: Context-Aware Reasoning Core",
    status: "Research & Prototype",
    category: "AI / Intelligent Systems",
    description:
      "Building a dual-engine decision framework integrating dense vector retrieval (FAISS), tabular gradient-boosted models, and SHAP explainability matrices for high-stakes decision contexts.",
    techStack: ["Python", "XGBoost", "LightGBM", "FAISS", "Sentence-Transformers", "SHAP"],
    github: "https://github.com/ayushrajcodes0407",
    metrics: "Hybrid semantic-tabular fusion architecture",
  },
];

export const featuredProjects = [
  {
    id: "jarvis-ai-agent",
    number: "01",
    title: "JARVIS — AI AGENT",
    subtitle: "Autonomous Task Execution & Intelligent Conversational Assistant",
    category: "AI / Intelligent Systems",
    shortDescription:
      "An intelligent AI agent architecture designed for natural language interaction, automated tool execution, contextual reasoning, and multi-step task execution.",
    overview:
      "JARVIS is an autonomous AI agent engineered to bridge conversational natural language understanding with direct computational actions. It parses user intent, dynamically determines tool calling sequences, executes programmatic tasks, and returns structured synthesis in real-time.",
    techStack: [
      "Python",
      "LLM APIs",
      "Prompt Engineering",
      "Tool Calling",
      "AsyncIO",
      "Automation Engine",
      "NLP",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Execution", value: "Multi-Tool" },
      { label: "Interaction", value: "Conversational" },
      { label: "Reasoning", value: "Contextual" },
    ],
    caseStudy: {
      problem:
        "Standard conversational AI chatbots provide static text outputs but lack the capability to orchestrate real-time system tasks, interact with programmatic toolchains, or maintain task-oriented state across multi-step objectives.",
      solution:
        "Engineered an agentic interaction framework featuring intent classification, modular tool-calling executors, error recovery loops, and conversational memory pipelines.",
      architecture: [
        "Intent Parsing: Evaluates user prompts to determine if direct generation, factual retrieval, or multi-step tool execution is required.",
        "Tool Execution Engine: Pluggable execution registry allowing the agent to execute system scripts, query databases, and automate workflows safely.",
        "Context Management: Retains conversational state and intermediate execution logs for multi-turn iterative problem solving.",
        "Response Synthesis: Delivers refined, natural language explanations alongside structured execution outputs.",
      ],
      highlights: [
        "Modular architecture allowing flexible tool integration and automated execution.",
        "Conversational memory maintaining coherence over multi-turn interactions.",
        "Robust error-handling and retry logic for tool calling failures.",
      ],
      results: "Built a functional AI agent pipeline capable of natural language task reasoning and automated workflow execution.",
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
      github: "https://github.com/ayushrajcodes0407",
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
    id: "hra-mental-roberta",
    number: "03",
    title: "HRA Mental-RoBERTa",
    subtitle: "Hierarchical Risk-Aware Mental-Health Screening Framework",
    category: "Machine Learning",
    shortDescription:
      "A hierarchical transformer-based clinical screening architecture decoupling binary triage from multi-class severity classification and suicidal ideation detection.",
    overview:
      "A research-grade NLP framework designed for early, risk-sensitive screening of psychological conditions from unstructured social-media text. Features a two-stage hierarchical pipeline with a rule-based safety decision layer and rigorous statistical validation.",
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
      { label: "Pipeline", value: "Two-Stage" },
      { label: "Backbone", value: "RoBERTa" },
      { label: "Validation", value: "Bootstrap CI" },
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
        "Empirical Validation: Rigorous bootstrap confidence intervals and confusion matrix error decomposition.",
      ],
      highlights: [
        "Decoupled triage pipeline minimizing critical false-negative diagnostic errors.",
        "Class-weighted cross-entropy loss addressing extreme clinical dataset imbalances.",
        "Comprehensive cross-corpus generalization and statistical significance testing.",
      ],
      results: "Developed an empirical NLP framework optimized for high-sensitivity screening and clinical decision support.",
    },
  },
  {
    id: "data-sarthi",
    number: "04",
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
      github: "https://github.com/ayushrajcodes0407",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Workflow", value: "Automated" },
      { label: "Analytics", value: "Real-Time" },
      { label: "Interface", value: "Interactive" },
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
      results: "Created an end-to-end automated data exploration and baseline modeling workbench.",
    },
  },
  {
    id: "spotify-recommender",
    number: "05",
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
      "Pandas",
      "Vector Embeddings",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407",
      demo: "",
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
        "Recommendation Delivery: Ranks and serves top-K candidate songs matching the user's acoustic profile.",
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
    id: "netflix-recommender",
    number: "06",
    title: "Netflix Context-Based Recommendation System",
    subtitle: "Context-Aware Content Recommendation & Metadata Similarity Engine",
    category: "Recommendation Systems",
    shortDescription:
      "A context-aware recommendation system designed to recommend Netflix-style media content based on contextual preference signals, genre clustering, and content similarity.",
    overview:
      "The system combines natural language processing of plot descriptions with structured metadata (cast, director, genre, maturity rating) to compute content similarity vectors and deliver contextually relevant media recommendations.",
    techStack: [
      "Python",
      "NLP",
      "TF-IDF",
      "Cosine Similarity",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "NLP Engine", value: "TF-IDF / Text" },
      { label: "Ranking", value: "Context-Aware" },
      { label: "Interface", value: "Interactive" },
    ],
    caseStudy: {
      problem:
        "Recommending relevant video content based solely on collaborative ratings frequently fails when user interaction data is sparse or when contextual nuance in plot narratives is ignored.",
      solution:
        "Architected a context-aware content recommendation system integrating TF-IDF narrative vectorization with multi-attribute categorical metadata similarity.",
      architecture: [
        "Text Vectorization: Processes plot summaries and synopses into TF-IDF vector embeddings with n-gram extraction.",
        "Metadata Fusion: Combines narrative text embeddings with weighted categorical features (directors, cast, genre tags).",
        "Similarity Computation: Evaluates pairwise cosine similarity matrices to identify semantic content clusters.",
        "Interactive UI: Streamlit application allowing users to search titles, adjust contextual weights, and receive instant recommendations.",
      ],
      highlights: [
        "Combined unstructured plot narratives with structured categorical metadata.",
        "Adjustable contextual weighting based on user preference priorities.",
        "Clean interactive preview interface for exploring related content clusters.",
      ],
      results: "Engineered a context-aware media recommendation engine capable of semantic plot matching and multi-attribute candidate retrieval.",
    },
  },
  {
    id: "bccl-ppe-compliance",
    number: "07",
    title: "BCCL Vision PPE Compliance System",
    subtitle: "Real-Time Industrial Safety & Protective Gear Detection",
    category: "Computer Vision",
    shortDescription:
      "A real-time computer-vision safety system developed during my BCCL internship for automated PPE compliance (helmets, vests, safety gear) in industrial coal mining environments.",
    overview:
      "Developed at Bharat Coking Coal Limited (BCCL) to address workplace safety standards in harsh industrial terrains. The model automates continuous surveillance for protective gear compliance without requiring manual monitoring.",
    techStack: [
      "YOLO",
      "Python",
      "Computer Vision",
      "OpenCV",
      "Flask",
      "Streamlit",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Annotated Frames", value: "5,000+" },
      { label: "Detection Accuracy", value: "~77% mAP" },
      { label: "Edge Latency", value: "Sub-Second" },
    ],
    caseStudy: {
      problem:
        "In industrial mining operations, manual safety compliance monitoring is hazardous, labor-intensive, and cannot provide continuous 24/7 coverage across distributed hazardous work zones.",
      solution:
        "Built a specialized deep-learning object detection pipeline using custom-trained YOLO architectures capable of identifying hard hats, reflective vests, and safety harnesses in low-light and dusty environments.",
      architecture: [
        "Data Engineering: Assembled, cleaned, and annotated 5,000+ domain-specific industrial images with extreme lighting variations.",
        "Model Training: Fine-tuned YOLO object detection networks with specialized bounding-box regression loss.",
        "Inference & API: Flask-based inference engine delivering sub-second frame processing and automated breach logging.",
        "Interface: Streamlit operations dashboard displaying real-time video stream annotations and compliance logs.",
      ],
      highlights: [
        "Curated and labeled a 5,000+ image dataset under real-world mining and coal field conditions.",
        "Achieved approximately 77% mean Average Precision (mAP) on critical safety gear classes.",
        "Enabled sub-second inference for immediate non-compliance alerts.",
      ],
      results: "Delivered a verified 77% mAP detection pipeline with sub-second latency across 5,000+ annotated industrial images.",
    },
  },
  {
    id: "bccl-predictive-analytics",
    number: "08",
    title: "BCCL Predictive Analytics Platform",
    subtitle: "Industrial Operational Modeling & Predictive Intelligence",
    category: "Machine Learning",
    shortDescription:
      "Predictive modeling and operational analytics framework developed during BCCL internship for industrial equipment telemetry, maintenance forecasting, and operational efficiency analysis.",
    overview:
      "Applied statistical machine learning and exploratory time-series modeling to historical operational data from mining operations to forecast operational bottlenecks and identify predictive maintenance patterns.",
    techStack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Plotly",
    ],
    links: {
      github: "https://github.com/ayushrajcodes0407",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Domain", value: "Industrial Mining" },
      { label: "Modeling", value: "Time-Series / ML" },
      { label: "Analytics", value: "Operational" },
    ],
    caseStudy: {
      problem:
        "Industrial coal mining operations generate vast quantities of operational and machinery data, but raw logs remain siloed, preventing proactive maintenance and operational optimization.",
      solution:
        "Developed a predictive analytics pipeline using gradient-boosted trees and statistical diagnostics to identify operational variance and model equipment performance trends.",
      architecture: [
        "Data Cleaning: Aggregated and processed disparate industrial telemetry and production logs.",
        "Feature Engineering: Created rolling temporal aggregates, lag features, and anomaly flags.",
        "Predictive Modeling: Trained regression and classification models to forecast operational efficiency indicators.",
        "Interactive Dashboards: Built visual diagnostic charts using Plotly for engineering supervisors.",
      ],
      highlights: [
        "Extracted actionable operational signals from complex industrial machinery logs.",
        "Engineered temporal features capturing shift-based and machinery-utilization trends.",
        "Delivered intuitive analytics dashboards for operational decision makers.",
      ],
      results: "Created a predictive modeling framework that translated raw mining operational data into structured predictive intelligence.",
    },
  },
  {
    id: "be11-sports-platform",
    number: "09",
    title: "BE11",
    subtitle: "High-Concurrency Sports Venue Booking & Match Experience Platform",
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
      github: "https://github.com/ayushrajcodes0407",
      demo: "",
    },
    featured: true,
    metrics: [
      { label: "Transactions", value: "ACID Atomic" },
      { label: "Performance", value: "<50ms Latency" },
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
    number: "10",
    title: "Vacation Mantra CRM & Safvora",
    subtitle: "Enterprise Operations CRM & Luxury Bespoke Gifting Storefront",
    category: "Full-Stack Systems",
    shortDescription:
      "Enterprise customer relationship management platform with automated lead distribution funnels alongside Safvora.gifting—a luxury bespoke e-commerce storefront.",
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
      github: "https://github.com/ayushrajcodes0407",
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
