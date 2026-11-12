import {
  PersonalInfo,
  Project,
  TechCategory,
  Achievement,
  LeadershipRole,
  EducationItem,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Ritesh Yadav",
  roleTitle: "Full Stack Developer | Computer Science Undergraduate",
  headline: "Building digital experiences. Engineering meaningful solutions.",
  description:
    "I'm Ritesh Yadav, a Computer Science undergraduate and Full Stack Developer interested in building practical web applications, exploring technology, and solving real-world problems through engineering.",
  email: "riteshyvns2005@gmail.com",
  phone: "+91-81153-03806",
  github: "https://github.com/riteshydv05",
  githubUsername: "riteshydv05",
  linkedin: "https://linkedin.com/in/riteshydv05",
  linkedinUsername: "riteshydv05",
  university: "Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur",
  degree: "B.Tech in Computer Science and Engineering",
  duration: "2024–2028",
  cgpa: "8.14/10",
};

export const aboutNarrative = {
  paragraph1:
    "I'm a Computer Science and Engineering undergraduate at Madan Mohan Malaviya University of Technology, with a strong interest in full-stack development and software engineering.",
  paragraph2:
    "I enjoy building web applications, working with modern technologies, and translating ideas into practical digital solutions.",
  paragraph3:
    "My technical journey includes developing full-stack applications, participating in competitive technology events, and building community-focused digital portals.",
  paragraph4:
    "I believe in continuous learning, building meaningful projects, and improving my engineering skills through practical experience.",
};

export const projects: Project[] = [
  {
    id: "cognito-learning-hub",
    title: "COGNITO LEARNING HUB",
    subtitle: "Full-Stack MERN-Based Real-Time Quiz Platform",
    tagline:
      "A full-stack MERN-based quiz platform featuring user authentication, real-time quiz flow, and result tracking.",
    achievementBadge: "Winner — IIT Bombay Techfest 2025",
    coverImage: "/projects/cognito.webp",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://www.cognito-learning-hub.live/",
    problemStatement:
      "Traditional online quiz and learning evaluation interfaces often lack smooth real-time question flows, secure session persistence, and instant performance feedback across diverse learner groups.",
    solution:
      "Engineered an interactive, responsive MERN-stack evaluation portal featuring robust user authentication, dynamic quiz state management, real-time timer handling, and automated scoring breakdown.",
    systemArchitecture: {
      summary:
        "Modular MERN architecture separating client-side stateful quiz components from RESTful API routes, JWT authentication middleware, and persistent MongoDB schema collections.",
      nodes: [
        {
          step: 1,
          title: "User Authentication & Authorization",
          description:
            "Secure session access and user profile identification using token-based authentication.",
          technologies: ["Node.js", "Express.js"],
        },
        {
          step: 2,
          title: "Quiz Flow & Question Engine",
          description:
            "Dynamic question delivery, stateful response tracking, and timed assessment state.",
          technologies: ["React", "Express.js"],
        },
        {
          step: 3,
          title: "Evaluation & Scoring Service",
          description:
            "Automated answer verification, grade aggregation, and result summary calculations.",
          technologies: ["Node.js", "MongoDB"],
        },
        {
          step: 4,
          title: "Result Analytics & Student Dashboard",
          description:
            "Responsive interface for reviewing score histories, completion times, and answer keys.",
          technologies: ["React", "Tailwind CSS"],
        },
      ],
    },
    implementationDetails: [
      "Built responsive client interface with React managing active quiz state and question navigation.",
      "Implemented Express.js RESTful API endpoints for user authentication, quiz creation, and submission handling.",
      "Structured MongoDB collections to index quizzes, user progress, and historical performance metrics.",
      "Ensured seamless real-time timer transitions and automated submission upon time expiry.",
      "Deployed and verified live in production at cognito-learning-hub.live.",
    ],
    keyFeatures: [
      "Secure user authentication and profile management.",
      "Real-time interactive quiz flow with timed evaluations.",
      "Automated scoring and comprehensive performance feedback.",
      "Responsive design optimized across mobile and desktop devices.",
      "Live production deployment with fast global response times.",
    ],
    technicalChallenges: [
      "Maintaining state consistency during timed quiz transitions across client and server.",
      "Structuring modular database schemas for flexible question types and user evaluation histories.",
    ],
    personalContribution:
      "Led the full-stack architecture and implementation of Cognito Learning Hub using the MERN stack, resulting in the winning project recognition at IIT Bombay Techfest 2025.",
    metricsOrResults: [
      "Recognized as Winner at IIT Bombay Techfest 2025.",
      "Live deployment serving interactive assessments reliably in production.",
    ],
    githubUrl: "https://github.com/riteshydv05",
  },
  {
    id: "haazir-attendance",
    title: "HAAZIR — SMART ATTENDANCE SYSTEM",
    subtitle: "Web-Based Academic Attendance Management System",
    tagline:
      "A web-based attendance management system featuring a responsive interface designed for academic use cases.",
    coverImage: "/projects/haazir.webp",
    tags: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://www.haazir.me/",
    problemStatement:
      "Manual and paper-based attendance workflows in academic institutions are time-consuming, prone to record inaccuracies, and lack central visibility for faculty and administrative oversight.",
    solution:
      "Designed a responsive, intuitive web application tailored for educational environments, allowing educators to streamline student attendance logging, track aggregate attendance percentages, and generate clean record summaries.",
    systemArchitecture: {
      summary:
        "Client-server web portal with role-based attendance workflows, responsive student grid rosters, and structured attendance record logging.",
      nodes: [
        {
          step: 1,
          title: "Faculty & Course Management",
          description:
            "Faculty dashboard for defining courses, academic terms, and student rosters.",
          technologies: ["React", "Node.js"],
        },
        {
          step: 2,
          title: "Attendance Logging Interface",
          description:
            "Fast, accessible student checklist allowing quick multi-student status updates.",
          technologies: ["React", "Tailwind CSS"],
        },
        {
          step: 3,
          title: "Data Persistence & Session Records",
          description:
            "Timestamped attendance transactions recorded per lecture and student ID.",
          technologies: ["Express.js", "MongoDB"],
        },
        {
          step: 4,
          title: "Attendance Reports & Summaries",
          description:
            "Automated summary calculations highlighting aggregate attendance percentages and trends.",
          technologies: ["Node.js", "React"],
        },
      ],
    },
    implementationDetails: [
      "Constructed clean responsive layouts using React and Tailwind CSS for mobile and desktop classroom use.",
      "Designed structured database records to log attendance dates, student identifiers, and status flags.",
      "Built summary statistics routines calculating cumulative attendance percentages per student and subject.",
      "Ensured lightweight bundle footprint and swift user input response during in-class attendance marking.",
      "Deployed and verified live in production at haazir.me.",
    ],
    keyFeatures: [
      "Fast, intuitive one-click attendance marking interface for educators.",
      "Comprehensive roster and course tracking views.",
      "Automated calculation of student attendance percentages and thresholds.",
      "Responsive layout designed specifically for tablet and mobile browser access in classrooms.",
      "Live deployment accessible on custom domain.",
    ],
    technicalChallenges: [
      "Optimizing touch interactions and grid views for quick classroom logging on mobile devices.",
      "Structuring queries to efficiently aggregate attendance histories across academic terms.",
    ],
    personalContribution:
      "Designed and developed the full web application, crafting the responsive UI and backend attendance logging logic for academic institutions.",
    githubUrl: "https://github.com/riteshydv05",
  },
  {
    id: "the-editorial-board",
    title: "THE EDITORIAL BOARD WEBSITE",
    subtitle: "Official University Editorial Board Digital Publication Platform",
    tagline:
      "Official website and digital publishing portal for The Editorial Board, MMMUT, showcasing university newsletters, campus media, and creative literary publications.",
    coverImage: "/projects/editorial.webp",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Web Design"],
    liveUrl: "https://www.theeditorialboard.in/",
    problemStatement:
      "A premier university media organization required a modern, centralized digital publication presence to showcase annual magazines, campus newsletters, literary archives, and event coverage to thousands of students and alumni.",
    solution:
      "Designed, developed, and maintain the official web portal of The Editorial Board, MMMUT. Features an editorial layout, digital newsletter archive, committee rosters, and dynamic article highlights optimized across mobile and desktop screens.",
    systemArchitecture: {
      summary:
        "Modern responsive content architecture delivering structured campus media, digital publications, archival reading sections, and event galleries.",
      nodes: [
        {
          step: 1,
          title: "Editorial Design System",
          description:
            "High-contrast editorial typography, mobile-responsive grid, and accessible component hierarchy.",
          technologies: ["React", "Tailwind CSS"],
        },
        {
          step: 2,
          title: "Publication & Newsletter Archive",
          description:
            "Digital cataloging of campus editions, newsletters, literary magazines, and event coverage.",
          technologies: ["Next.js", "JavaScript"],
        },
        {
          step: 3,
          title: "Editorial Team & Board Roster",
          description:
            "Dedicated profiles and committee showcases for university board leadership and student contributors.",
          technologies: ["React"],
        },
        {
          step: 4,
          title: "Production Deployment & CDN Delivery",
          description:
            "Optimized global asset delivery on custom domain with high performance scores across device formats.",
          technologies: ["Vercel", "DNS / Cloud"],
        },
      ],
    },
    implementationDetails: [
      "Designed the complete visual identity and responsive web architecture for the official board portal.",
      "Engineered digital publication archives allowing students and alumni to access historical editions.",
      "Continuously maintain and update site content, editorial announcements, and recruitment portals.",
      "Maintained 100% uptime and sub-second load times on the official university domain theeditorialboard.in.",
    ],
    keyFeatures: [
      "Official digital publication presence for The Editorial Board, MMMUT.",
      "Online reading archive for student magazines and campus newsletters.",
      "Responsive editorial layout with fluid reading typography.",
      "Live in active production at theeditorialboard.in.",
    ],
    technicalChallenges: [
      "Balancing high-resolution visual imagery with fast mobile load speeds.",
      "Designing an intuitive archival navigation system for multi-year publication dossiers.",
    ],
    personalContribution:
      "Executive Member of The Editorial Board, MMMUT. Solely responsible for designing, developing, and actively maintaining the official website.",
    githubUrl: "https://github.com/riteshydv05",
  },
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
      "Zero-downtime asynchronous pipeline processing multi-page land records concurrently.",
    ],
    githubUrl: "https://github.com/riteshydv05",
  },
  {
    id: "machine-guru",
    title: "MACHINE GURU",
    subtitle: "Interactive Machine Learning & Algorithm Exploration Platform",
    tagline:
      "Awarded Most Creative Solution: An educational platform designed to help developers and students explore machine learning concepts, model behaviors, and algorithmic implementations through interactive demos.",
    achievementBadge: "Most Creative Solution",
    coverImage: "/projects/machineguru.webp",
    tags: ["Python", "React", "Machine Learning", "FastAPI", "Tailwind CSS"],
    problemStatement:
      "Understanding machine learning algorithms often requires bridging abstract mathematical equations with concrete code behavior. Learners struggle to visualize decision boundaries, loss convergence, and parameter sensitivity without interactive experimentation.",
    solution:
      "Engineered Machine Guru as an interactive educational hub—recognized for its creative solution—where users can visualize algorithmic pipelines, explore classical ML models (regression, classification, clustering), and inspect step-by-step mathematical intuitions in real time.",
    systemArchitecture: {
      summary:
        "Interactive client-server architecture pairing visual exploratory frontends with Python-powered machine learning inference and visualization engines.",
      nodes: [
        {
          step: 1,
          title: "Interactive Visualization Frontend",
          description:
            "Canvas and SVG-driven parameter controls allowing users to adjust hyperparameters and data distributions.",
          technologies: ["React", "Tailwind CSS"],
        },
        {
          step: 2,
          title: "Model Execution & Inference Engine",
          description:
            "FastAPI backend executing machine learning model computations and decision boundaries.",
          technologies: ["FastAPI", "Python"],
        },
        {
          step: 3,
          title: "Algorithmic Walkthroughs & Docs",
          description:
            "Modular breakdowns of algorithmic mathematics, loss functions, and evaluation metrics.",
          technologies: ["Python", "React"],
        },
      ],
    },
    implementationDetails: [
      "Awarded Most Creative Solution for innovative educational approach and real-time visualization UX.",
      "Developed interactive parameter sliders and visual plot renderers in React.",
      "Implemented modular Python endpoints calculating model training loops and decision boundaries dynamically.",
      "Structured comprehensive guides detailing mathematical foundations and real-world engineering trade-offs.",
    ],
    keyFeatures: [
      "Awarded Most Creative Solution for innovative technical learning design.",
      "Interactive model parameter tuning and instant visual feedback.",
      "Decision boundary visualizations for classification and clustering algorithms.",
      "Modular architectural layout suitable for self-paced student learning.",
    ],
    technicalChallenges: [
      "Rendering real-time decision boundary surfaces efficiently without blocking UI thread.",
      "Translating complex mathematical concepts into clean, accessible visual representations.",
    ],
    personalContribution:
      "Designed and developed the platform architecture, implemented the frontend interactive components, and wrote algorithmic explanation modules, earning recognition for the Most Creative Solution.",
    metricsOrResults: [
      "Recognized for Most Creative Solution in machine learning education and algorithm demonstration.",
    ],
    githubUrl: "https://github.com/riteshydv05",
  },
];

export const skillCategories: TechCategory[] = [
  {
    categoryName: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", description: "Modern ESNext, asynchronous patterns, DOM manipulation" },
      { name: "Python", description: "Data analysis with Pandas, scripting, automation" },
      { name: "Java", description: "Object-oriented programming, core data structures, algorithms" },
    ],
  },
  {
    categoryName: "Frontend",
    skills: [
      { name: "React", description: "Component architecture, hooks, state management, SPA design" },
      { name: "Tailwind CSS", description: "Utility-first responsive layouts, custom design systems" },
    ],
  },
  {
    categoryName: "Backend",
    skills: [
      { name: "Node.js", description: "Event-driven runtime environment, asynchronous backend services" },
      { name: "Express.js", description: "RESTful API architecture, routing, middleware integration" },
    ],
  },
  {
    categoryName: "Databases",
    skills: [
      { name: "MongoDB", description: "NoSQL document modeling, aggregation pipelines, Mongoose ODM" },
      { name: "Firebase", description: "Realtime database, authentication, cloud storage integrations" },
    ],
  },
  {
    categoryName: "Tools and Technologies",
    skills: [
      { name: "Git", description: "Version control, branching strategies, commit workflows" },
      { name: "GitHub", description: "Code collaboration, repository management, releases" },
      { name: "Power BI", description: "Business intelligence dashboards, data visualization, reporting" },
      { name: "Figma", description: "UI/UX wireframing, component mockups, design prototyping" },
      { name: "Microsoft Excel", description: "Data organization, formula functions, pivot tables" },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "techfest-2025",
    title: "Winner — IIT Bombay Techfest 2025",
    organization: "IIT Bombay",
    year: "2025",
    badge: "WINNER",
    description:
      "Won first place at Asia's largest science and technology festival, IIT Bombay Techfest 2025, for the Cognito Learning Hub full-stack platform.",
  },
  {
    id: "infotsav-2025",
    title: "Finalist — Infotsav'25 Hackathon",
    organization: "IIIT Gwalior",
    year: "2025",
    badge: "FINALIST",
    description:
      "Selected as a hackathon finalist at IIIT Gwalior for architecting and building a collaborative ed-tech application using the MERN stack.",
  },
];

export const leadershipRole: LeadershipRole = {
  role: "Executive Member",
  organization: "The Editorial Board, MMMUT",
  websiteUrl: "https://www.theeditorialboard.in/",
  description:
    "Designed and actively maintain the official website of the university's Editorial Board (theeditorialboard.in), contributing technical expertise and design leadership to ensure an effective digital presence for campus media and publications.",
  keyContributions: [
    "Designed and actively maintain the official web portal of The Editorial Board, MMMUT (https://www.theeditorialboard.in/).",
    "Manage content updates, visual layouts, and responsive cross-device compatibility.",
    "Collaborate with student editors and writers to publish university initiatives and newsletters.",
  ],
};

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Madan Mohan Malaviya University of Technology, Gorakhpur",
    duration: "2024–2028",
    score: "CGPA: 8.14/10",
  },
  {
    degree: "Class XII — CBSE Board",
    institution: "Central Board of Secondary Education",
    duration: "2023",
    score: "83%",
  },
  {
    degree: "Class X — CBSE Board",
    institution: "Central Board of Secondary Education",
    duration: "2021",
    score: "93%",
  },
];
