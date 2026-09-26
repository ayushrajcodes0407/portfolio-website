export const credentialCategories = [
  "All",
  "Research Fellowships",
  "Industrial Certifications",
  "Technical Specializations",
  "Academic Coursework",
];

export const certifications = [
  {
    id: "bccl-internship-cert",
    title: "Industrial ML & Computer Vision Certification",
    issuer: "Bharat Coking Coal Limited (BCCL)",
    role: "Machine Learning & Computer Vision Intern",
    period: "Dec 2025 — Jan 2026",
    category: "Industrial Certifications",
    type: "Internship & Project Credential",
    description:
      "Official certificate of completion and project appraisal for developing a deep-learning YOLO computer-vision PPE compliance detection system across industrial coal field operations.",
    images: [
      "/images/BCCL_Internship_Certificate/Bharat Coking Coal Limited (BCCL) _ Internship & Project Certification.jpeg",
      "/images/BCCL_Internship_Certificate/Bharat Coking Coal Limited (BCCL) _ Internship & Project Certification (1).jpeg",
    ],
    skills: ["YOLO", "Computer Vision", "Python", "Industrial Safety AI"],
    featured: true,
  },
  {
    id: "ntnu-research-cert",
    title: "NTNU International Research Internship",
    issuer: "Norwegian University of Science and Technology (NTNU)",
    role: "International Research Intern",
    period: "2025",
    category: "Research Fellowships",
    type: "Academic Research Credential",
    description:
      "International research fellowship covering advanced computational workflows, machine learning experimentation, and scientific methodology.",
    fileUrl: "/Ayush Raj NTNU Reserach Internship Certificate.pdf",
    skills: ["Academic Research", "Machine Learning", "Scientific Computing"],
    featured: true,
  },
  {
    id: "udemy-opencv",
    title: "Mastering OpenCV: A Practical Guide to Computer Vision",
    issuer: "Udemy",
    category: "Technical Specializations",
    certificateId: "UC-cc656ed8-eb8d-42c1-aa63-c3bcc43d4627",
    url: "https://www.udemy.com/certificate/UC-cc656ed8-eb8d-42c1-aa63-c3bcc43d4627/",
    description:
      "Comprehensive mastery of classical computer vision algorithms, image feature detection, object tracking, and deep learning vision pipelines.",
    skills: ["OpenCV", "Computer Vision", "Python", "Image Processing"],
    featured: true,
  },
  {
    id: "udemy-python-ml",
    title: "Hands-On Python Machine Learning with Real World Projects",
    issuer: "Udemy",
    category: "Technical Specializations",
    certificateId: "UC-55963806-4de7-426a-849f-ffcfc808ccbb",
    url: "https://www.udemy.com/certificate/UC-55963806-4de7-426a-849f-ffcfc808ccbb/",
    description:
      "End-to-end predictive modeling, supervised and unsupervised learning algorithms, feature engineering, and model evaluation metrics for industry datasets.",
    skills: ["Machine Learning", "Python", "Scikit-learn", "Data Pipelines"],
    featured: true,
  },
];

export const academicCourses = [
  {
    institution: "Stanford OpenCourseWare",
    courseId: "CS221",
    title: "Artificial Intelligence: Principles and Techniques",
    focus: "Search algorithms, MDPs, game playing, factor graphs, and probabilistic inference.",
  },
  {
    institution: "Stanford OpenCourseWare",
    courseId: "CS229",
    title: "Machine Learning",
    focus: "Supervised learning, generative learning, SVMs, kernel methods, deep learning theory, and reinforcement learning.",
  },
  {
    institution: "Stanford OpenCourseWare",
    courseId: "CS230",
    title: "Deep Learning",
    focus: "CNNs, RNNs, attention mechanisms, hyperparameter tuning, and neural network optimization.",
  },
  {
    institution: "Stanford OpenCourseWare",
    courseId: "CS224N",
    title: "Natural Language Processing with Deep Learning",
    focus: "Word2Vec, transformers, self-attention, language models, question answering, and contextual representations.",
  },
  {
    institution: "Udemy / Krish Naik",
    courseId: "Bootcamp",
    title: "Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp",
    focus: "Comprehensive industry data science pipelines, statistical testing, MLOps basics, and NLP applications.",
  },
];
