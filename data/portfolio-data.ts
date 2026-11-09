import { PersonalInfo, Project, TechCategory } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Aditya Sharma",
  roleTitle: "Software Engineer | AI & Full-Stack Developer",
  headline: "Building intelligent software. Solving real-world problems.",
  description:
    "I'm a software developer interested in AI, machine learning, and full-stack engineering. I enjoy turning complex problems into practical technology solutions.",
  email: "aditya.sharma.dev@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "/resume.pdf",
};

export const projects: Project[] = [
  {
    id: "bhumilekh",
    title: "BHUMILEKH",
    subtitle: "AI-Powered Intelligent Land Record Digitization and Validation System",
    tagline:
      "Enterprise document intelligence pipeline transforming unstructured land registries into geospatially validated digital cadastral records.",
    coverImage: "/projects/bhumilekh.webp",
    tags: [
      "Next.js",
      "React",
      "FastAPI",
      "PostgreSQL",
      "PostGIS",
      "PaddleOCR",
      "TrOCR",
      "LayoutLMv3",
      "Celery",
      "Redis",
      "MinIO",
    ],
    problemStatement:
      "Legacy land records and cadastral deeds suffer from degraded paper quality, varied vernacular scripts, non-standard tabular structures, and manual verification bottlenecks, resulting in title disputes and extensive administrative backlog.",
    solution:
      "Architected an end-to-end multi-modal digitization and geospatial validation engine. Combines structural layout parsing, hybrid printed/handwritten OCR extraction, automated geospatial boundary consistency checks, and an interactive human-in-the-loop review interface.",
    systemArchitecture: {
      summary:
        "Asynchronous event-driven document processing workflow decoupling ingestion, neural inference, geospatial boundary verification, and human audit validation.",
      nodes: [
        {
          step: 1,
          title: "Document Ingestion & Storage",
          description:
            "High-resolution scan ingestion via Next.js client to MinIO object storage with pre-signed upload URLs and SHA-256 integrity validation.",
          technologies: ["Next.js", "MinIO", "FastAPI"],
        },
        {
          step: 2,
          title: "Structural Layout Parsing",
          description:
            "LayoutLMv3 analyzes spatial token hierarchies, segmenting tables, seal stamps, ownership tables, and plot coordinate grids.",
          technologies: ["LayoutLMv3", "PyTorch"],
        },
        {
          step: 3,
          title: "Hybrid OCR Pipeline",
          description:
            "Dual-pass text extraction routing printed records through PaddleOCR and cursive/handwritten survey entries through fine-tuned TrOCR models.",
          technologies: ["PaddleOCR", "TrOCR"],
        },
        {
          step: 4,
          title: "Geospatial Boundary Verification",
          description:
            "Extracted survey coordinates are parsed into GeoJSON polygons and cross-referenced against historical cadastre layers using PostGIS spatial predicates (ST_Contains, ST_Overlaps).",
          technologies: ["PostgreSQL", "PostGIS"],
        },
        {
          step: 5,
          title: "Asynchronous Queue & Distributed Tasks",
          description:
            "Celery task workers mediated by Redis handle compute-intensive neural network inference and database synchronization without blocking user operations.",
          technologies: ["Celery", "Redis"],
        },
        {
          step: 6,
          title: "Human-in-the-Loop Validation UI",
          description:
            "Next.js web portal displaying interactive side-by-side bounding box annotations, confidence scoring, and administrative audit approvals.",
          technologies: ["Next.js", "React", "Tailwind CSS"],
        },
      ],
    },
    implementationDetails: [
      "Engineered an asynchronous processing pipeline utilizing Celery and Redis to isolate GPU-bound neural inference from synchronous REST endpoints.",
      "Implemented confidence-threshold routing between PaddleOCR for high-throughput typed text and TrOCR for irregular handwritten annotations.",
      "Configured PostGIS spatial indexes (GIST) to execute sub-second polygon intersection and land boundary overlap validations.",
      "Constructed a high-throughput MinIO object storage tier with automated chunked streaming and content hashing.",
      "Built a custom canvas-based annotation interface in React allowing human operators to inspect low-confidence OCR predictions and adjust polygon boundaries.",
    ],
    keyFeatures: [
      "Multimodal document layout analysis using LayoutLMv3 for tabular and unstructured field recognition.",
      "Hybrid OCR engine dynamically switching between PaddleOCR and fine-tuned TrOCR based on font characteristics.",
      "Automated cadastral boundary validation using PostGIS spatial topological operators.",
      "Fault-tolerant asynchronous distributed processing architecture with automatic retries and dead-letter queues.",
      "Interactive human-in-the-loop audit workspace featuring side-by-side split view and confidence heatmaps.",
    ],
    technicalChallenges: [
      "Mitigating severe OCR degradation caused by ink bleed, aged parchment discoloration, and vernacular character overlaps.",
      "Preventing GPU memory exhaustion during batched transformer inference across multi-page archival PDF dossiers.",
      "Handling topological anomalies and self-intersecting survey polygons when converting legacy surveyor coordinates into valid GIS entities.",
    ],
    personalContribution:
      "Designed and implemented the core backend services in FastAPI, integrated the LayoutLMv3 and hybrid OCR inference pipelines, modeled the PostGIS spatial database schema, and built the administrative verification interface in Next.js.",
    metricsOrResults: [
      "Sub-second geospatial overlap detection queries across cadastral plot databases via PostGIS GIST indexing.",
      "Significant reduction in manual transcription duration through automated field-level confidence scoring.",
      "Zero-downtime asynchronous pipeline processing thousands of multi-page land records concurrently.",
    ],
    githubUrl: "https://github.com/example/bhumilekh",
    liveUrl: "https://bhumilekh.example.com",
  },
  {
    id: "google-drive-face-clustering",
    title: "GOOGLE DRIVE FACE CLUSTERING",
    subtitle: "AI-Powered Face-Based Image Clustering System",
    tagline:
      "Autonomous facial recognition and clustering engine organizing cloud image repositories without manual metadata labeling.",
    coverImage: "/projects/drive-face-clustering.webp",
    tags: [
      "Python",
      "RetinaFace",
      "ArcFace",
      "Computer Vision",
      "Face Embeddings",
      "Clustering Algorithms",
      "Google Drive API",
    ],
    problemStatement:
      "Large-scale personal and organizational photo repositories stored on cloud drives lack semantic facial metadata, forcing users to rely on manual organization or unindexed directory browsing across thousands of unlabeled files.",
    solution:
      "Engineered an automated face detection, embedding extraction, and unsupervised clustering pipeline that connects directly to Google Drive, detects all faces across synced photo libraries, and clusters images by individual identities.",
    systemArchitecture: {
      summary:
        "Multi-stage computer vision workflow integrating cloud ingestion, high-precision detection, metric deep feature representation, and density-based clustering.",
      nodes: [
        {
          step: 1,
          title: "Drive API Image Ingestion Pipeline",
          description:
            "Batched, rate-limit-aware synchronization pulling high-resolution image assets via Google Drive REST API with incremental cursor checkpoints.",
          technologies: ["Google Drive API", "Python"],
        },
        {
          step: 2,
          title: "RetinaFace Detection & 5-Point Landmark Alignment",
          description:
            "Robust multi-stage face detection identifying facial boundaries and 5-point facial landmarks under severe poses, occlusions, and variable lighting.",
          technologies: ["RetinaFace", "OpenCV"],
        },
        {
          step: 3,
          title: "ArcFace 512-d Feature Vector Extraction",
          description:
            "Deep metric representation using an Additive Angular Margin loss (ArcFace) backbone to generate normalized 512-dimensional identity vectors.",
          technologies: ["ArcFace", "PyTorch"],
        },
        {
          step: 4,
          title: "DBSCAN / Agglomerative Clustering",
          description:
            "Unsupervised clustering combining cosine distance metrics with density-based (DBSCAN) and hierarchical agglomerative clustering to discover unique identity groups.",
          technologies: ["Scikit-Learn", "NumPy"],
        },
        {
          step: 5,
          title: "Multi-Person Assignment & Cloud Organization",
          description:
            "Graph-based image multi-assignment associating group photos with multiple discovered identities and updating Drive metadata tags.",
          technologies: ["Python", "Google Drive API"],
        },
      ],
    },
    implementationDetails: [
      "Implemented a token-bucket rate limiter and exponential backoff strategy to handle Google Drive API quota constraints during batch image ingestion.",
      "Employed affine transformation matrices based on 5-point facial landmarks to normalize facial alignment prior to feature representation.",
      "Extracted discriminative 512-dimensional facial embeddings using a pre-trained ResNet-based ArcFace model.",
      "Optimized distance matrix computations using vectorized cosine similarity routines to support clustering across tens of thousands of faces.",
      "Devised a multi-label assignment protocol enabling group photographs containing multiple subjects to be correctly indexed under all matching identity clusters.",
    ],
    keyFeatures: [
      "Zero-setup cloud sync directly interfacing with Google Drive image collections.",
      "High-recall face localization across extreme lighting, motion blur, and arbitrary orientation angles via RetinaFace.",
      "Discriminative identity separation powered by 512-dimensional ArcFace metric embeddings.",
      "Adaptive unsupervised clustering that automatically determines the number of distinct persons without prior supervision.",
      "Multi-subject association allowing group photographs to populate multiple person collections simultaneously.",
    ],
    technicalChallenges: [
      "Preventing cluster contamination from noisy background detections or false positive non-face textures.",
      "Tuning distance cutoffs in cosine metric space to avoid over-clustering identical subjects across significant age or haircut shifts.",
      "Managing strict Google Drive API per-user queries-per-second quotas during initial bulk ingestion passes.",
    ],
    personalContribution:
      "Formulated and implemented the entire computer vision architecture, from OAuth2-authenticated Google Drive streaming to the dual-stage face detection and embedding pipeline, followed by custom distance-metric clustering evaluation.",
    metricsOrResults: [
      "High facial recognition discrimination across varied angles and lighting using 512-dimensional ArcFace feature vectors.",
      "Effective noise rejection using DBSCAN outlier filtering to isolate blurry or partially occluded candidate faces.",
    ],
    githubUrl: "https://github.com/example/drive-face-clustering",
  },
  {
    id: "amazon-ml-challenge",
    title: "AMAZON ML CHALLENGE",
    subtitle: "Machine Learning Competition Project",
    tagline:
      "Competitive machine learning pipeline leveraging multimodal feature engineering, gradient boosting, and neural architectures optimized for F0.5 evaluation.",
    coverImage: "/projects/amazon-ml.webp",
    tags: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "PyTorch",
      "Feature Engineering",
      "F0.5 Score",
    ],
    problemStatement:
      "Predicting structured product dimensions and categorical entity attributes from heterogeneous, noisy catalog text and product metadata, where precision is weighted more heavily than recall under competition evaluation constraints.",
    solution:
      "Built an iterative machine learning pipeline featuring domain-specific regex and text token extraction, robust imputation strategies, cross-validated gradient-boosted decision trees, and PyTorch deep neural ensembles optimized for the competition's F0.5 score.",
    systemArchitecture: {
      summary:
        "Iterative tabular and text feature processing pipeline terminating in a stratified cross-validated ensemble tuned for precision-weighted classification.",
      nodes: [
        {
          step: 1,
          title: "Exploratory Data Analysis & Entity Profiling",
          description:
            "Systematic audit of missing values, inconsistent measurement units, long-tail class distributions, and label inconsistencies across training partitions.",
          technologies: ["Pandas", "NumPy"],
        },
        {
          step: 2,
          title: "Preprocessing & Normalization Pipeline",
          description:
            "Automated unit parsing (metric/imperial conversion), text sanitization, outlier clipping, and scikit-learn ColumnTransformer integrations.",
          technologies: ["Scikit-Learn", "Regex"],
        },
        {
          step: 3,
          title: "Feature Engineering & Extraction",
          description:
            "Extraction of TF-IDF n-grams, dimensional ratio indicators, word-level embeddings, and target-encoded categorical features.",
          technologies: ["Scikit-Learn", "PyTorch"],
        },
        {
          step: 4,
          title: "Model Selection & Hyperparameter Optimization",
          description:
            "Systematic benchmarking across LightGBM, CatBoost, XGBoost, and PyTorch multi-layer perceptrons using Bayesian optimization.",
          technologies: ["XGBoost", "PyTorch", "Optuna"],
        },
        {
          step: 5,
          title: "Threshold Tuning for F0.5 Score",
          description:
            "Post-processing decision probability calibration specifically shifting decision thresholds to maximize the competition metric (F0.5), placing double weight on precision.",
          technologies: ["Scikit-Learn", "NumPy"],
        },
      ],
    },
    implementationDetails: [
      "Constructed a modular feature engineering module parsing numerical measurements and standardizing disparate physical units across product text fields.",
      "Designed a strict 5-fold stratified cross-validation strategy with out-of-fold predictions to prevent target leakage during feature generation.",
      "Tuned tree-based gradient boosting models (XGBoost) using Optuna Bayesian search over depth, learning rate, subsampling, and regularization penalties.",
      "Engineered an out-of-fold probability calibration step to systematically optimize binary and multi-class cutoff thresholds for the asymmetric F0.5 objective function.",
      "Built reproducible execution scripts with fixed random seeds, automated metric tracking, and standardized artifact serialization.",
    ],
    keyFeatures: [
      "Domain-specific regex token extraction parsing noisy alphanumeric product catalog entries.",
      "Standardized multi-unit normalization module aligning fractional and decimal metric and imperial measurements.",
      "Stratified cross-validation framework guaranteeing validation stability without data leakage.",
      "Gradient boosting ensemble leveraging XGBoost with hyperparameter sweeps optimized for tabular structures.",
      "Custom probability threshold calibration explicitly fine-tuned for precision-weighted F0.5 optimization.",
    ],
    technicalChallenges: [
      "Managing severe class imbalance across sparse and long-tail product categories.",
      "Disentangling ambiguous unit abbreviations and typographical errors in user-generated catalog descriptions.",
      "Optimizing decision boundary cutoffs to favor high precision without sacrificing representative recall on validation folds.",
    ],
    personalContribution:
      "Formulated the end-to-end data preprocessing scripts, built the unit normalization regex pipelines, trained and tuned the XGBoost models, and implemented the threshold calibration algorithm to optimize the competition F0.5 metric.",
    metricsOrResults: [
      "Strict 5-fold cross-validation scheme verified with zero data leakage across feature transformations.",
      "Measurable performance gains achieved via custom probability threshold calibration targeted at the F0.5 precision-weighted objective.",
    ],
    githubUrl: "https://github.com/example/amazon-ml-challenge",
  },
];

export const skillCategories: TechCategory[] = [
  {
    categoryName: "Programming",
    skills: [
      { name: "Java", description: "Object-oriented modeling, multithreading, enterprise backend services" },
      { name: "Python", description: "AsyncIO, PyTorch neural inference, computer vision, data pipelines" },
      { name: "JavaScript", description: "Modern ESNext runtimes, event loop handling, asynchronous patterns" },
      { name: "TypeScript", description: "Strict static typing, complex generic interfaces, AST contracts" },
    ],
  },
  {
    categoryName: "Frontend",
    skills: [
      { name: "React", description: "Concurrent mode, functional hooks, custom headless component architecture" },
      { name: "Next.js", description: "App Router, streaming SSR, server components, edge optimization" },
      { name: "HTML5", description: "Semantic document hierarchy, web accessibility (a11y), standard DOM APIs" },
      { name: "CSS3", description: "CSS grid, flexbox layouts, animations, container queries, modern variables" },
      { name: "Tailwind CSS", description: "Utility-first design tokens, high-contrast themes, responsive constraints" },
    ],
  },
  {
    categoryName: "Backend",
    skills: [
      { name: "FastAPI", description: "High-throughput asynchronous REST services, Pydantic type validation" },
      { name: "RESTful API Design", description: "Idempotent endpoints, HTTP semantics, rate limiting, OpenAPI specifications" },
    ],
  },
  {
    categoryName: "Database",
    skills: [
      { name: "PostgreSQL", description: "ACID transactions, relational schemas, query planning, indexing strategies" },
      { name: "Redis", description: "In-memory caching, message broker, distributed lock management" },
      { name: "PostGIS", description: "Spatial database engine, polygon intersection predicates, GIST indexing" },
      { name: "MinIO", description: "S3-compatible distributed object storage, pre-signed upload URLs" },
    ],
  },
  {
    categoryName: "AI/ML",
    skills: [
      { name: "OCR", description: "PaddleOCR text localization & TrOCR sequence-to-sequence handwritten models" },
      { name: "NLP", description: "Token classification, LayoutLMv3 multimodal document layout analysis" },
      { name: "Computer Vision", description: "RetinaFace landmark localization, ArcFace 512-d metric embeddings" },
      { name: "Machine Learning Pipelines", description: "Stratified cross-validation, feature normalization, F0.5 score calibration" },
    ],
  },
  {
    categoryName: "Infrastructure",
    skills: [
      { name: "Docker", description: "Multi-stage container builds, reproducible environments, service isolation" },
      { name: "Git", description: "Trunk-based development, atomic commits, interactive rebase workflows" },
      { name: "GitHub", description: "CI/CD automated testing workflows, code review pipelines, releases" },
      { name: "Cloud Deployment", description: "Linux VPS environments, reverse proxy configs, environment management" },
    ],
  },
];
