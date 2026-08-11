// ─────────────────────────────────────────────────────────────
// Portfolio content — edit everything in one place.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Souham Ghosh",
  monogram: "SG",
  title: "AI Engineering Lead",
  subtitle: "Model Optimization · On-device AI · Team Leadership",
  location: "Chennai, India",
  phone: "+91 62007 10363",
  email: "souham.ghosh123@gmail.com",
  linkedin: "https://www.linkedin.com/in/sg-souham/",
  linkedinHandle: "in/sg-souham",
  github: "https://github.com/Sgsouham",
  githubHandle: "github.com/Sgsouham",
  resumePdf: "/resume.pdf",
  tagline:
    "I make models production-ready on constrained hardware — quantization, ONNX exportability, and on-device NPU enablement at scale.",
};

export const heroTerminalLines = [
  "souham@lead:~$ whoami",
  "AI Engineering Lead · 5+ yrs shipping production ML",
  "souham@lead:~$ cat specialization.txt",
  "quantization · custom Triton/CUDA kernels · LLM post-training",
  "souham@lead:~$ ./enable --models 20+ --on-device ✓",
  "16× latency reduction · 20+ on-device deployments enabled",
];

export const metrics = [
  { value: "5+", label: "Years shipping production ML" },
  { value: "20+", label: "Modern CV/NLP/LLM models" },
  { value: "16×", label: "BEVFormer inference latency reduction" },
  { value: "10", label: "Engineers led across dev & delivery" },
];

export const about = {
  heading: "Engineer first. Leader by conviction.",
  paragraphs: [
    "AI engineering lead with 5+ years shipping production model optimization and on-device AI enablement for enterprise customers — quantization tooling (PTQ/QAT), custom Triton/CUDA kernels, and LLM post-training (SFT/DPO/GRPO) on constrained hardware.",
    "I currently lead a 10-person engineering team spanning development and delivery: owning technical roadmaps, code-review standards, mentoring and upskilling, and cross-team coordination with customer engineering organizations.",
    "My deepest belief: measured, honest systems beat magic. Every number on this page was benchmarked, profiled, and validated — including the places where the honest answer was “this kernel loses to cuBLAS,” because negative results are how credibility is built.",
  ],
};

// ─── Experience ───────────────────────────────────────────────

export type Role = {
  company: string;
  companyNote?: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  highlights?: { value: string; label: string }[];
};

export const experience: Role[] = [
  {
    company: "Multicoreware Inc.",
    role: "Lead Associate — Model Optimization & On-device AI Enablement",
    period: "Jun 2022 – Present",
    location: "Chennai",
    companyNote: "Growth within one company: SWE → Senior SWE → Lead Associate",
    bullets: [
      "Project Lead — On-device Model Enablement Platform (Oct 2024 – Present): lead a 10-person engineering team delivering an on-device AI platform enabling 20+ CV/NLP/LLM models through export, compile, profile, and quantize pipelines — 12 enablement reports shipped to production.",
      "Established code-review standards and an Agile delivery cadence that kept every committed milestone on schedule; mentored engineers on quantization workflows and ONNX export constraints.",
      "Drive framework-level optimization across 20+ models — ONNX export graph constraints, static-vs-dynamic op handling, FP16/INT8 quantization schedules — with on-device latency and accuracy held within customer targets.",
      "Senior Software Engineer — BEV/GKT Perception Flagship (May 2023 – Oct 2024): owned end-to-end performance for a production multi-camera BEV perception stack (BEVFormer-class).",
      "Rebuilt multi-scale deformable attention and spatial-temporal query grid sampling from scratch as custom PyTorch operators with full ONNX exportability — 800 ms → 50 ms end-to-end (16×) at preserved accuracy via graph-level rewrites, operator fusion, and memory-layout tuning.",
      "Cut latency of a grid-sampling transformer (GKT) for BEV perception from 1.4 s to 59 ms at preserved accuracy.",
      "Software Engineer — Model Quantization Tooling (Jun 2022 – Apr 2023): engineered a model quantization zoo (PTQ/QAT, W8A8/W4A8) covering 30+ models across PyTorch and TensorFlow, with evaluation harnesses and CI workflows adopted by the wider team.",
    ],
    highlights: [
      { value: "16×", label: "BEVFormer latency cut" },
      { value: "20+", label: "models enabled on-device" },
      { value: "10", label: "person team led" },
      { value: "12", label: "enablement reports shipped" },
    ],
  },
  {
    company: "Rebrewed Technologies",
    role: "Data Scientist (Part-Time)",
    period: "Oct 2021 – Apr 2022",
    location: "Remote",
    bullets: [
      "Directed a team of 8 to deliver a portal for a pharmaceutical client automating product web hosting with Computer Vision and NLP across 5,260+ product images.",
      "Automated the web-hosting pipeline end-to-end — U2-Net background removal, YOLOv5 in-image detection, super-resolution, and Pytesseract OCR auto-fill — with 83% of fields auto-filled correctly.",
      "Implemented content-based filtering recommendation systems for hosted websites from scratch.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    period: "2020 – May 2022",
    location: "Kolkata",
    bullets: [
      "Shipped production enhancements to a power utility's customer-facing web platform (Spring Boot, Vue.js) as part of a 10-member team.",
    ],
  },
  {
    company: "NCFlexe, IIT Kanpur",
    role: "Research Intern",
    period: "Aug 2020 – Nov 2020",
    location: "Remote",
    bullets: [
      "Trained a cattle identification model based on muzzle patterns using One-Shot Learning on a 5,000-image dataset.",
      "Generated synthetic cattle data with a CycleGAN, expanding the dataset to 10,000 images; delivered the application as a mobile app.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────

export type ProjectStatus = "published" | "in-progress" | "planned";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  domain: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "triton-op-swap",
    tagline: "Drop-in Triton operators for a real LLM — with honest numbers",
    description:
      "Custom Triton kernels (attention, RoPE, RMSNorm, SiLU·up) swapped into Qwen2.5-1.5B through a one-call API — no retraining. 63/63 tests, byte-identical output, and every win or loss measured against PyTorch's native backends. The isolated attention swap loses to cuBLAS FA2; the fused kernels win 1.6–6.7×; the full swap nets +5.4% decode. Reported honestly, never claimed.",
    status: "published",
    domain: "Kernel Engineering",
    stack: ["OpenAI Triton", "PyTorch", "CUDA", "NCU/NSYS", "roofline analysis"],
    metrics: [
      { value: "6.7×", label: "best per-op speedup" },
      { value: "63/63", label: "tests passing" },
      { value: "+5.4%", label: "e2e decode, identical output" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Sgsouham/triton-op-swap" },
    ],
    featured: true,
  },
  {
    title: "speculative-decoding",
    tagline: "A measured walkthrough of why spec decoding loses at small scale",
    description:
      "Vanilla speculative decoding implemented from scratch, verified correct, and benchmarked honestly across 108 configurations and 6 model pairs — it lost every single time (0.22×–0.65×). Three benchmark traps nearly produced a fake win. This is the story of what I built, the traps, and exactly why the trick fails on this class of hardware.",
    status: "published",
    domain: "LLM Inference",
    stack: ["PyTorch", "Transformers", "benchmark harness", "uv"],
    metrics: [
      { value: "108", label: "configurations benchmarked" },
      { value: "21/21", label: "correctness tests" },
      { value: "0.22–0.65×", label: "honest measured result" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Sgsouham/speculative-decoding" },
    ],
    featured: true,
  },
  {
    title: "Triton Fused Multi-Scale Deformable-Attention Kernel",
    tagline: "BEV deformable attention, from first principles",
    description:
      "A block-tiled Triton kernel fusing bilinear sampling and level accumulation into a single launch, validated numerically against the PyTorch baseline (torch.allclose). Benchmarked from naive PyTorch (2.80 ms) to autotuned Triton (0.74 ms), profiled with NCU/NSYS and roofline analysis. The capstone for my BEV kernel engineering track.",
    status: "in-progress",
    domain: "Perception / Systems",
    stack: ["OpenAI Triton", "PyTorch", "profiling", "roofline"],
    metrics: [
      { value: "2.80 → 0.74 ms", label: "attention evolution" },
      { value: "100%", label: "numerical agreement (allclose)" },
    ],
  },
  {
    title: "GRPO Reasoning Trainer",
    tagline: "Post-training LLMs with verifiable rewards",
    description:
      "Custom Group Relative Policy Optimization (GRPO) trainer on Qwen2.5-1.5B with SymPy-verifiable GSM8K rewards (group size G=4), including a DPO baseline for comparison. Tracking reward, response-length, and accuracy curves during training to capture the emergence of self-correction — the LLM 'aha moment'.",
    status: "in-progress",
    domain: "LLM Post-training",
    stack: ["PyTorch", "Transformers", "SymPy", "GSM8K"],
    metrics: [
      { value: "G=4", label: "group size" },
      { value: "SymPy", label: "verifiable rewards" },
    ],
  },
  {
    title: "VLA On-Device Enablement",
    tagline: "Frontier embodied-AI, shipped to edge hardware",
    description:
      "Enabling a Vision-Language-Action model for on-device inference through the full pipeline — export → compile → profile → quantize — with on-device latency and accuracy numbers published in the standard enablement-report format. The frontier-model extension of my on-device AI platform work.",
    status: "planned",
    domain: "Robotics / Edge AI",
    stack: ["ONNX", "compilation", "quantization", "VLA"],
    metrics: [
      { value: "Export→Quantize", label: "full pipeline" },
      { value: "Latency/acc", label: "published numbers" },
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────

export type SkillCluster = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillClusters: SkillCluster[] = [
  {
    title: "Model Optimization",
    icon: "◆",
    skills: [
      "PTQ & QAT",
      "W8A8 / W4A8",
      "FP16 / INT8 schedules",
      "Knowledge distillation",
      "ONNX export constraints",
      "Static vs dynamic ops",
    ],
  },
  {
    title: "Custom Kernels & Compilers",
    icon: "▚",
    skills: [
      "OpenAI Triton",
      "CUDA C++",
      "TVM / MLIR lowering",
      "NCU / NSYS profiling",
      "Roofline analysis",
      "Operator fusion",
    ],
  },
  {
    title: "LLM Post-training & RL",
    icon: "◎",
    skills: [
      "SFT",
      "DPO",
      "GRPO",
      "PPO",
      "Verifiable rewards",
      "Reasoning training",
    ],
  },
  {
    title: "Leadership & Delivery",
    icon: "✦",
    skills: [
      "Technical roadmaps",
      "Code-review standards",
      "Mentoring & upskilling",
      "Cross-team coordination",
      "Agile delivery",
      "Stakeholder communication",
    ],
  },
];

export const languages = ["Python", "PyTorch", "TensorFlow", "C++", "Git / CI", "Vue.js", "Java"];

export const marqueeKeywords = [
  "Quantization",
  "Triton",
  "GRPO",
  "On-device AI",
  "CUDA",
  "ONNX Export",
  "DPO",
  "PTQ / QAT",
  "BEV Perception",
  "RL Post-training",
  "NPU Enablement",
  "Roofline Analysis",
];

// ─── Publications ─────────────────────────────────────────────

export type Publication = {
  title: string;
  venue: string;
  year: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "Unsupervised Learning Based Evaluation of Player Performances",
    venue: "Innovations in Systems and Software Engineering, vol. 17",
    year: "2021",
    note: "pp. 121–130",
  },
  {
    title: "Framework for Appraisal of Twenty-Twenty League Player",
    venue: "Proceedings of the Global AI Congress 2019 · Advances in Intelligent Systems and Computing (AISC), vol. 1112",
    year: "2020",
    note: "pp. 671–679",
  },
];

// ─── Education ────────────────────────────────────────────────

export const education = {
  school: "Institute of Engineering & Management",
  degree: "Bachelor of Technology in Information Technology",
  period: "2016 – 2020",
  location: "Kolkata, West Bengal",
};
