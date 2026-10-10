export const portfolioData = {
  personalInfo: {
    name: "Alex Morgan",
    role: "Full-Stack Software Engineer & Cloud Architect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    taglines: [
      "Full-Stack Software Engineer",
      "Cloud & Distributed Systems Architect",
      "Modern React & Next.js Specialist",
      "Open Source Contributor & Mentor"
    ],
    bioSummary:
      "Bridging the gap between beautiful user experiences and high-throughput scalable backend architectures. Focused on React 19, TypeScript, cloud-native deployments, and modern AI workflows.",
    location: "San Francisco, CA (Open to Worldwide Remote & Relocation)",
    email: "alex.morgan.dev@example.com",
    phone: "+1 (555) 389-7241",
    status: "Available for Full-time Roles & High-Impact Contracts",
    availabilityBadge: "Open to Opportunities",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    calendly: "https://calendly.com",
    resumeUrl: "#resume",
    stats: [
      { id: 1, label: "Years Experience", value: "4+", detail: "Production software engineering" },
      { id: 2, label: "Projects Delivered", value: "35+", detail: "Web apps, APIs & cloud platforms" },
      { id: 3, label: "Users Reached", value: "250K+", detail: "Active monthly visitors" },
      { id: 4, label: "Open Source Stars", value: "1.4K+", detail: "Across public repositories" }
    ]
  },

  about: {
    story: [
      "Hey there! I am Alex, a software engineer with a deep passion for building resilient, responsive, and aesthetically refined digital experiences. My journey began when I hacked together my first web game at age 15, and since then, I've transformed that curiosity into engineering mission-critical applications that serve hundreds of thousands of users.",
      "Over the past 4+ years, I have architected distributed web services, spearheaded frontend modernizations using React and TypeScript, and deployed scalable Kubernetes clusters across multi-cloud environments.",
      "When I am not designing system architectures or writing clean, maintainable code, you'll find me contributing to open-source developer tooling, mentoring junior developers at local hackathons, or brewing pour-over specialty coffee."
    ],
    coreValues: [
      {
        title: "User-Centric Performance",
        desc: "Speed is a feature. I build interfaces that load in milliseconds with intuitive accessibility and micro-interactions.",
        icon: "Zap"
      },
      {
        title: "Clean & Resilient Architecture",
        desc: "Design patterns that scale gracefully. Maintainable codebases, comprehensive tests, and automated CI/CD pipelines.",
        icon: "Layers"
      },
      {
        title: "Continuous Learning & Empathy",
        desc: "Technology evolves relentlessly. I prioritize collaborative teamwork, clear documentation, and mentoring others.",
        icon: "Heart"
      },
      {
        title: "AI-Augmented Velocity",
        desc: "Integrating state-of-the-art LLMs, vector search, and intelligent automation into modern enterprise workflows.",
        icon: "Cpu"
      }
    ],
    techCategories: [
      {
        category: "Frontend Development",
        icon: "Layout",
        skills: [
          { name: "React 19 / 18", level: 95 },
          { name: "TypeScript", level: 92 },
          { name: "Next.js (App Router)", level: 90 },
          { name: "Tailwind CSS & Styling", level: 95 },
          { name: "State Management (Zustand / Redux)", level: 88 },
          { name: "Vite & Modern Tooling", level: 92 }
        ]
      },
      {
        category: "Backend & Systems",
        icon: "Server",
        skills: [
          { name: "Node.js & Express", level: 90 },
          { name: "Python & FastAPI", level: 86 },
          { name: "REST & GraphQL APIs", level: 92 },
          { name: "Microservices Architecture", level: 85 },
          { name: "WebSockets & Realtime", level: 88 },
          { name: "Go (Golang basics)", level: 75 }
        ]
      },
      {
        category: "Databases & Cloud",
        icon: "Cloud",
        skills: [
          { name: "PostgreSQL & Prisma", level: 92 },
          { name: "Redis & In-Memory Caching", level: 88 },
          { name: "AWS (S3, Lambda, ECS, RDS)", level: 86 },
          { name: "Docker & Containerization", level: 90 },
          { name: "Kubernetes & Helm", level: 80 },
          { name: "GitHub Actions CI/CD", level: 92 }
        ]
      },
      {
        category: "AI, Data & Tooling",
        icon: "Brain",
        skills: [
          { name: "OpenAI & Anthropic APIs", level: 88 },
          { name: "LangChain & Vector DBs", level: 82 },
          { name: "Jest, Vitest & Playwright", level: 85 },
          { name: "Git & Collaborative Workflows", level: 95 },
          { name: "Linux & Shell Scripting", level: 86 },
          { name: "Figma to Code Implementation", level: 90 }
        ]
      }
    ],
    funFacts: [
      { icon: "Coffee", label: "Specialty Coffee", detail: "Enthusiast of pour-over V60 and Aeropress techniques" },
      { icon: "Award", label: "3x Hackathon Winner", detail: "1st place at CalHacks, HackTech & DevPost Global" },
      { icon: "Activity", label: "Endurance Runner", detail: "Completed 2 half-marathons, targeting full 42km next year" },
      { icon: "BookOpen", label: "Continuous Reader", detail: "Read 24 books on distributed computing & tech philosophy" }
    ]
  },

  education: [
    {
      id: "edu-1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science & Engineering",
      location: "Berkeley, CA",
      period: "2020 – 2024",
      gpa: "3.94 / 4.00",
      honors: "Summa Cum Laude, Dean's Honors List (All 8 Semesters)",
      description:
        "Rigorous coursework covering modern distributed systems, algorithm complexity, software engineering principles, and machine learning foundations. Served as Head Teaching Assistant for 300+ students in Data Structures.",
      coursework: [
        "Distributed Systems & Cloud Computing",
        "Data Structures & Efficient Algorithms",
        "Operating Systems & Systems Programming",
        "Machine Learning & Artificial Intelligence",
        "Database System Architecture",
        "Computer Security & Cryptography"
      ],
      highlights: [
        "Selected as Outstanding Senior Thesis Presenter in Computer Science",
        "Elected Officer in Tau Beta Pi Engineering Honor Society",
        "Authored Capstone Project: 'Adaptive Distributed Cache Invalidation Protocols'"
      ]
    },
    {
      id: "edu-2",
      institution: "Stanford University (Executive Education)",
      degree: "Specialization in Advanced Cloud Architecture & Scalable Systems",
      location: "Online / Palo Alto, CA",
      period: "2023",
      gpa: "Top 5% Cohort Distinction",
      honors: "Honor Graduate with Distinction",
      description:
        "Intensive curriculum focused on large-scale distributed systems, multi-region cloud resilience, microservices observability, and fault-tolerant cloud design patterns.",
      coursework: [
        "Multi-Cloud Resiliency & Failover",
        "Event-Driven Microservices with Kafka",
        "Container Orchestration at Scale",
        "Cost & Throughput Optimization"
      ],
      highlights: [
        "Architected an automated multi-region failover simulator on AWS and GCP",
        "Collaborated with industry architects on high-concurrency stress testing"
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "NexusCloud – Distributed Telemetry & Observability Hub",
      category: "Full-Stack",
      shortDesc:
        "High-performance real-time telemetry, log streaming, and automated anomaly detection platform handling 50M+ events daily with sub-second dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      featured: true,
      tags: ["React 19", "TypeScript", "Node.js", "ClickHouse", "Docker", "Tailwind CSS"],
      metrics: "50M+ daily events processed with 99.99% uptime",
      demoUrl: "https://example.com/nexuscloud",
      githubUrl: "https://github.com/example/nexuscloud",
      caseStudy: {
        problem:
          "Engineering teams needed unified observability for hybrid cloud microservices without paying exorbitant vendor licensing fees for slow query interfaces.",
        solution:
          "Engineered a lightweight telemetry pipeline using ClickHouse columnar storage, WebSockets for live push notifications, and a responsive React canvas dashboard.",
        architecture: "React 19 frontend + Node.js ingestion gateway + ClickHouse analytical cluster + Redis caching layer.",
        keyResults: [
          "Reduced dashboard latency by 45% compared to legacy tools",
          "Cut infrastructure monitoring operational costs by 60%",
          "Handled bursts of over 12,000 logs per second without dropped packets"
        ]
      }
    },
    {
      id: "proj-2",
      title: "SynthMind – Collaborative Multi-Agent AI Workflow Suite",
      category: "AI & ML",
      shortDesc:
        "Autonomous multi-agent research workflow engine that decomposes complex queries into concurrent specialized subagents with live streaming thought traces.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      featured: true,
      tags: ["Python", "FastAPI", "React", "LangChain", "Vector DB", "WebSockets"],
      metrics: "10K+ weekly prompts generated with 3.5x faster research cycles",
      demoUrl: "https://example.com/synthmind",
      githubUrl: "https://github.com/example/synthmind",
      caseStudy: {
        problem:
          "Single-prompt LLMs struggle with multi-stage reasoning, tool execution, and verifying facts across multiple distinct APIs.",
        solution:
          "Created an agentic DAG pipeline where a coordinator agent assigns tasks to researcher, coder, and reviewer subagents with interactive visual traces.",
        architecture: "React 19 frontend with real-time SSE stream + FastAPI asynchronous backend + ChromaDB vector store.",
        keyResults: [
          "Increased factual accuracy by 78% on cross-domain verification tests",
          "Over 10,000 active research sessions created during private beta",
          "Sub-100ms response rendering via chunked HTTP streaming"
        ]
      }
    },
    {
      id: "proj-3",
      title: "PulseFlow – Real-Time Multiplayer Whiteboard & Wireframe Studio",
      category: "Web Applications",
      shortDesc:
        "Interactive collaborative canvas supporting zero-latency multiplayer drawing, smart geometric snapping, code exporting, and end-to-end encrypted rooms.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
      featured: true,
      tags: ["React", "HTML5 Canvas", "CRDT (Yjs)", "WebSockets", "Zustand", "Tailwind CSS"],
      metrics: "Sub-25ms peer sync with 15k+ active shared boards",
      demoUrl: "https://example.com/pulseflow",
      githubUrl: "https://github.com/example/pulseflow",
      caseStudy: {
        problem:
          "Existing remote whiteboard tools are bloated, slow on low-bandwidth networks, and suffer from state desynchronization conflicts.",
        solution:
          "Built a lightweight HTML5 Canvas renderer powered by CRDT conflict-free replicated data types and optimistic local updates.",
        architecture: "React frontend with 60fps Canvas engine + Yjs WebRTC provider + Cloudflare Workers turn relay.",
        keyResults: [
          "Seamless collaboration across 50 simultaneous cursors per board",
          "Zero conflict data loss during network reconnects",
          "Featured on Product Hunt Top 5 Developer Tools of the Day"
        ]
      }
    },
    {
      id: "proj-4",
      title: "HyperPay – Global Multi-Currency Checkout & Merchant Engine",
      category: "Full-Stack",
      shortDesc:
        "Ultra-fast checkout platform featuring biometric 1-click payments, instant cross-border settlement, and AI-powered chargeback fraud detection.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
      featured: false,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe API", "Redis", "Tailwind CSS"],
      metrics: "$1.4M+ transaction volume processed with 99.98% success rate",
      demoUrl: "https://example.com/hyperpay",
      githubUrl: "https://github.com/example/hyperpay",
      caseStudy: {
        problem:
          "High cart abandonment rates in international e-commerce caused by confusing checkout steps and localized currency friction.",
        solution:
          "Streamlined checkout flow to a single unified drawer with automated geolocation currency detection and instant mobile wallet integration.",
        architecture: "Next.js edge runtime + PostgreSQL with connection pooling + Redis rate-limiting.",
        keyResults: [
          "Boosted customer checkout conversion rate by 24%",
          "Average checkout completion time reduced from 90s to 18s",
          "Fully compliant with PCI-DSS Level 1 standards"
        ]
      }
    },
    {
      id: "proj-5",
      title: "EcoTrack – Cloud Infrastructure Carbon & Energy Intelligence",
      category: "Cloud & DevOps",
      shortDesc:
        "Automated cloud footprint auditor that analyzes AWS & GCP workload energy efficiency and recommends automated compute rightsizing policies.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80",
      featured: false,
      tags: ["React", "Python", "AWS Lambda", "TimescaleDB", "Chart.js", "Tailwind CSS"],
      metrics: "Reduced average customer cloud energy consumption by 18%",
      demoUrl: "https://example.com/ecotrack",
      githubUrl: "https://github.com/example/ecotrack",
      caseStudy: {
        problem:
          "Companies lack visibility into the environmental impact and wasted carbon footprint of idle cloud server clusters.",
        solution:
          "Constructed automated data connectors for AWS CloudWatch and GCP Billing that calculate kWh consumption and generate actionable savings reports.",
        architecture: "Serverless AWS Lambda scrapers + TimescaleDB time-series DB + React analytics dashboard.",
        keyResults: [
          "Identified over $40,000/year in idle zombie instance waste for pilot enterprise client",
          "Audited over 1,200 virtual machines across 6 cloud regions",
          "Generated audit-grade ESG compliance certificates"
        ]
      }
    },
    {
      id: "proj-6",
      title: "DevPulse – Engineering Velocity & DORA Metrics Suite",
      category: "Web Applications",
      shortDesc:
        "Engineering analytics dashboard calculating deployment frequency, lead time for changes, change failure rate, and PR review bottleneck insights.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
      featured: false,
      tags: ["React", "Node.js", "GitHub API", "GraphQL", "Tailwind CSS"],
      metrics: "Adopted by 40+ engineering teams, reduced PR cycle time by 32%",
      demoUrl: "https://example.com/devpulse",
      githubUrl: "https://github.com/example/devpulse",
      caseStudy: {
        problem:
          "Engineering leaders struggled to identify why sprint deadlines were missed without micromanaging individual developer commits.",
        solution:
          "Aggregated GitHub pull request events and CI/CD pipelines to calculate standardized DORA metrics and identify bottlenecks objectively.",
        architecture: "GraphQL webhooks + Node.js processing queues + React visual charts with custom SVG timelines.",
        keyResults: [
          "Decreased average pull request idle review time from 36h to 9h",
          "Increased team deployment frequency from bi-weekly to daily releases",
          "Received 4.9/5 satisfaction from lead software engineering directors"
        ]
      }
    }
  ],

  volunteering: [
    {
      id: "vol-1",
      role: "Lead Community Organizer & Senior Mentor",
      organization: "Google Developer Student Clubs & Tech Alliance",
      period: "2022 – Present",
      location: "San Francisco Bay Area",
      badge: "Community Leadership",
      description:
        "Directing hands-on technical workshops, career roadmaps, and mentoring underrepresented students breaking into software engineering and cloud technologies.",
      impactPoints: [
        "Mentored over 150+ students in modern web development, algorithms, and technical interview preparation",
        "Organized 12 in-person code sprints and regional hackathon welcoming 600+ collegiate participants",
        "Secured $15,000+ in sponsor funding from technology companies for student scholarships and equipment"
      ],
      skills: ["Technical Mentorship", "Community Organizing", "Public Speaking", "Workshops"]
    },
    {
      id: "vol-2",
      role: "Open-Source Lead Software Engineer",
      organization: "Code for Good & Non-Profit Digital Pantry Project",
      period: "2021 – 2023",
      location: "Remote",
      badge: "Social Impact Tech",
      description:
        "Volunteered engineering time to build and deploy an open-source, mobile-accessible food shelter inventory management system used by community pantries.",
      impactPoints: [
        "Architected real-time inventory tracking used across 14 local food distribution centers",
        "Reduced perishable food spoilage by 28% through predictive expiration alerts",
        "Engineered accessibility-first UI compliant with WCAG 2.1 AA guidelines for non-technical volunteers"
      ],
      skills: ["Open Source", "WCAG Accessibility", "Full-Stack React", "Social Impact"]
    },
    {
      id: "vol-3",
      role: "Weekend STEM & Coding Youth Instructor",
      organization: "Youth & Girls in Tech Initiative",
      period: "2021 – 2022",
      location: "Oakland, CA",
      badge: "Youth Education",
      description:
        "Taught fundamentals of web programming, computational thinking, and creative coding to middle and high school students from underprivileged school districts.",
      impactPoints: [
        "Taught interactive weekly coding labs to over 80 young students",
        "Guided students to create their very first portfolio websites and interactive JavaScript animations",
        "Awarded Volunteer of the Year in Education by the regional tech outreach board"
      ],
      skills: ["Curriculum Design", "STEM Education", "Youth Empowerment", "Creative Coding"]
    }
  ],

  certificates: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "October 2024",
      validUntil: "October 2027",
      credentialId: "AWS-SAA-88492019",
      verifyUrl: "https://aws.amazon.com/verification",
      badgeColor: "from-amber-500 to-orange-600",
      icon: "Cloud",
      skills: ["VPC & Networking", "High Availability & Multi-AZ", "S3 & DynamoDB", "IAM Security", "Serverless Lambda"]
    },
    {
      id: "cert-2",
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud (GCP)",
      issueDate: "August 2024",
      validUntil: "August 2026",
      credentialId: "GCP-PCA-49102840",
      verifyUrl: "https://cloud.google.com/certification",
      badgeColor: "from-blue-500 to-indigo-600",
      icon: "Server",
      skills: ["Google Kubernetes Engine (GKE)", "BigQuery & Bigtable", "Cloud IAM & Governance", "Disaster Recovery", "Hybrid Connectivity"]
    },
    {
      id: "cert-3",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta / Coursera",
      issueDate: "April 2024",
      validUntil: "Lifetime Credential",
      credentialId: "META-FED-93821034",
      verifyUrl: "https://coursera.org/verify",
      badgeColor: "from-sky-500 to-blue-600",
      icon: "Code",
      skills: ["React Architecture", "Advanced JavaScript (ES6+)", "UI/UX System Design", "Jest Testing", "Performance Optimization"]
    },
    {
      id: "cert-4",
      title: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      issueDate: "January 2024",
      validUntil: "January 2027",
      credentialId: "LF-CKAD-7201948",
      verifyUrl: "https://www.cncf.io/certification/ckad/",
      badgeColor: "from-cyan-500 to-blue-700",
      icon: "Box",
      skills: ["Container Design Patterns", "Kubernetes Pods & Services", "ConfigMaps & Secrets", "Helm Packaging", "Logging & Monitoring"]
    },
    {
      id: "cert-5",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI / Andrew Ng",
      issueDate: "November 2023",
      validUntil: "Lifetime Credential",
      credentialId: "DLAI-DL-51029482",
      verifyUrl: "https://deeplearning.ai",
      badgeColor: "from-purple-500 to-pink-600",
      icon: "Cpu",
      skills: ["Neural Networks & Backprop", "Convolutional Neural Networks", "Transformers & Attention", "Hyperparameter Tuning"]
    },
    {
      id: "cert-6",
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      issueDate: "September 2023",
      validUntil: "September 2025",
      credentialId: "HASHI-TA-3901928",
      verifyUrl: "https://hashicorp.com/certification",
      badgeColor: "from-violet-600 to-purple-800",
      icon: "Layers",
      skills: ["Infrastructure as Code", "Terraform State Management", "HCL Syntax", "Module Reusability", "Terraform Cloud"]
    }
  ],

  testimonials: [
    {
      id: "t-1",
      author: "Sarah Chen",
      role: "VP of Engineering at FinScale",
      content:
        "Alex is in the top tier of full-stack engineers I've worked with. Not only did Alex build out our telemetry dashboard weeks ahead of schedule, but the codebase was exceptionally clean and well-tested.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "t-2",
      author: "Marcus Vance",
      role: "Staff Infrastructure Architect",
      content:
        "Rarely do you find an engineer who can design pixel-perfect, responsive React components in the morning and optimize distributed database queries and Kubernetes ingress in the afternoon. Alex is that rare breed.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "t-3",
      author: "Elena Rostova",
      role: "Community Director, Google Developer Groups",
      content:
        "Alex's enthusiasm for community leadership and teaching young developers is boundless. The workshops Alex led consistently received the highest student ratings.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    }
  ],

  faqs: [
    {
      q: "What types of roles or engagements are you looking for?",
      a: "I am open to full-time Senior Full-Stack or Frontend Software Engineer roles, high-impact consulting engagements, and technical advisory roles with innovative startups."
    },
    {
      q: "What is your primary tech stack?",
      a: "My daily drivers are React 19 / Next.js with TypeScript, Tailwind CSS, Node.js / Express or Python FastAPI on the backend, PostgreSQL, and AWS / Docker containerized environments."
    },
    {
      q: "Are you open to remote work or relocation?",
      a: "Yes! I am based in San Francisco, CA and work comfortably across global timezones (US Eastern/Pacific and European hours). I am also open to relocation for the right opportunity."
    },
    {
      q: "Can you provide references or code samples?",
      a: "Absolutely! My public GitHub profile features repositories with comprehensive commit histories, documentation, and automated tests. Professional references are available upon request."
    }
  ]
};
