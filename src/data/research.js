export const researchData = {
  ongoingJournal: {
    id: "hra-mental-roberta",
    title:
      "Hierarchical Risk-Aware Mental-RoBERTa Framework for Early Multi-Class Screening of Mental-Health Conditions and Suicidal Ideation",
    status: "Ongoing Journal Research",
    statusBadge: "Under Journal Consideration",
    authors: [
      "Ayush Raj",
      "Abhinav Srivastava",
      "Dr. Kamnta Nath Mishra",
      "Dr. Alok Mishra",
    ],
    repository:
      "https://github.com/ayushrajcodes0407/HRA-Mental-Roberta-2026",
    abstract:
      "A hierarchical transformer-based framework designed for early, risk-sensitive screening of psychological conditions from unstructured social-media text. The architecture decouples screening into a two-stage pipeline: Stage-1 performs robust binary triage (Normal vs. At-Risk), while Stage-2 executes granular multi-class severity categorization and suicidal ideation detection. Augmented with a rule-based safety decision layer, class-weighted cross-entropy loss, and rigorous bootstrap confidence interval estimation to minimize critical false-negative rates in clinical decision support.",
    highlights: [
      {
        title: "Two-Stage Hierarchical Screening",
        desc: "Decouples broad triage (Normal vs At-Risk) from granular multi-class severity screening, preventing low-confidence misclassifications.",
      },
      {
        title: "RoBERTa Deep Text Representation",
        desc: "Domain-adapted transformer encoders fine-tuned with weighted loss functions to tackle high class imbalance in clinical text data.",
      },
      {
        title: "Rule-Based Decision Layer",
        desc: "Deterministic safety thresholds prioritizing high sensitivity for critical suicidal ideation and acute distress signals.",
      },
      {
        title: "Empirical Statistical Validation",
        desc: "Evaluated using bootstrap confidence intervals, confusion matrix error decomposition, and cross-dataset generalization gap analysis.",
      },
    ],
    techStack: [
      "RoBERTa",
      "PyTorch",
      "Hugging Face",
      "NLP",
      "Risk-Aware ML",
      "Statistical Validation",
      "Scikit-learn",
    ],
  },

  forthcomingConference: {
    id: "mental-health-conference-paper",
    title:
      "A Two-Stage, Risk-Aware Transformer Framework for Early Screening of Mental-Health Conditions and Suicidal Ideation in Social-Media Text",
    conference: "3rd International Conference on Intelligent Systems & Security (2027)",
    status: "Submitted for Review",
    statusBadge: "Conference Paper · Submitted for Review (2027)",
    authors: [
      "Ayush Raj",
      "Abhinav Srivastava",
      "Dr. Kamnta Nath Mishra",
      "Dr. Alok Mishra",
    ],
    abstract:
      "Presents a hierarchical risk-mitigation transformer pipeline evaluating social media linguistic patterns. Demonstrates how two-stage triage coupled with class-weighted loss and threshold adjustments provides superior recall on acute psychological distress and suicidal ideation indicators compared to standard flat multi-class classifiers.",
    highlights: [
      {
        title: "Hierarchical Architecture Design",
        desc: "Separates binary normal/at-risk separation from specific psychiatric disorder classification to optimize clinical triage sensitivity.",
      },
      {
        title: "Social-Media Text Modeling",
        desc: "Captures contextual nuance, informal expressions, and implicit distress signals in open social-media linguistic distributions.",
      },
      {
        title: "Generalization Gap Evaluation",
        desc: "Empirically assesses out-of-distribution transferability and cross-corpus robustness for real-world automated screening.",
      },
    ],
    techStack: [
      "PyTorch",
      "Transformers",
      "RoBERTa",
      "Clinical NLP",
      "Evaluation Metrics",
    ],
  },

  timeline: [
    {
      year: "2026",
      badge: "RESEARCH INTERNSHIP (MAY–JUL 2026)",
      title: "Norwegian University of Science and Technology (NTNU)",
      subtitle: "International AI/ML Research Internship under Dr. Alok Mishra",
      category: "Research Credential",
      details:
        "Engaged in advanced computational workflows, machine learning experimentation, and transformer NLP research under Dr. Alok Mishra.",
    },
    {
      year: "2026",
      badge: "ONGOING JOURNAL RESEARCH",
      title: "HRA Mental-RoBERTa Framework",
      subtitle: "Hierarchical Risk-Aware Multi-Class Screening Architecture",
      category: "Journal Paper",
      details:
        "Hierarchical transformer framework combining two-stage classification with rule-based safety decision layers for clinical mental health screening.",
    },
    {
      year: "2027",
      badge: "SUBMITTED FOR REVIEW (ICISS 2027)",
      title: "3rd International Conference on Intelligent Systems & Security",
      subtitle: "Two-Stage Risk-Aware Screening in Social-Media Text",
      category: "Conference Paper",
      details:
        "Research paper submitted for review presenting hierarchical transformer architectures for high-sensitivity mental health screening.",
    },
  ],
};
