export const PERSONAL_INFO = {
  name: "Harsh Gautam",
  role: "Full-Stack Developer & AI/ML Engineer",
  location: "Dhampur, UP, India",
  github: "https://github.com/harsh312-afk",
  website: "https://portfolio-harsh312-afk.vercel.app",
  email: "harsh.gautam.dsm@gmail.com",
  phone: "+91 6396753055",
  about:
    "Developer specializing in responsive React/Next.js interfaces, resilient FastAPI backends, and modular database architectures. Passionate about efficient systems, clean code, and open-source tooling.",
  badge: "Available for Full-Stack & AI Engineering Roles",
  heading: "Full-Stack Developer & AI/ML Engineer",
  tagline: "Building scalable web architectures, asynchronous APIs, and intelligent data systems from the Linux kernel to the browser.",
  quickStats: [
    { label: "15+ Repositories & Utilities", value: "15+" },
    { label: "Full-Stack & Systems Focus", value: "MERN & FastAPI" },
    { label: "B.Tech Computer Science", value: "Undergrad" }
  ]
};

export const SKILLS = {
  Languages: ["Python", "JavaScript (ES6+)", "TypeScript", "C/C++", "SQL", "Bash/Shell"],
  Frontend: ["React", "Next.js (App Router)", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"],
  Backend: ["FastAPI", "Node.js", "Express.js", "RESTful APIs", "Asynchronous Pipelines"],
  Databases: ["PostgreSQL (Neon)", "MongoDB", "MySQL"],
  "DevOps & Tools": ["Git & GitHub", "Linux (Arch/CachyOS)", "Hyprland", "Vercel", "Render", "Docker"]
};

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  architectureDetails: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "Full-Stack" | "Systems & Linux" | "Frontend & Telemetry";
}

export const PROJECTS: Project[] = [
  {
    id: "publishing-engine",
    title: "Personal Publishing Engine",
    tagline: "High-performance edge publishing platform with markdown parsing and dynamic metadata.",
    description: "Full-stack edge-optimized publishing engine decoupling a Next.js App Router client on Vercel from an asynchronous FastAPI REST microservice hosted on Render, backed by serverless Neon PostgreSQL.",
    techStack: ["Next.js (App Router)", "FastAPI", "PostgreSQL (Neon)", "Python", "Vercel", "Render"],
    highlights: [
      "Sub-100ms API response time via async SQLAlchemy and Pydantic schemas",
      "Automated database migrations with Alembic and connection pooling",
      "Zero-downtime deployment pipelines with edge ISR caching"
    ],
    architectureDetails: [
      "Decoupled microservice pattern: Next.js edge nodes handle static caching while FastAPI processes authenticated mutations",
      "Asynchronous connection pooling through asyncpg prevents serverless connection saturation on Neon Cloud",
      "Strict schema contracts between Pydantic v2 data models and TypeScript client interfaces"
    ],
    githubUrl: "https://github.com/harsh312-afk",
    liveUrl: "#",
    category: "Full-Stack"
  },
  {
    id: "enterprise-ops",
    title: "Enterprise Task & Ops Platform",
    tagline: "Role-based task management dashboard with real-time updates and status boards.",
    description: "Scalable full-stack operational suite featuring fine-grained RBAC permissions, real-time board mutations, JWT session management via HTTP-only cookies, and transactional integrity on MongoDB.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    highlights: [
      "Cryptographically signed JWT auth with automated refresh token rotation",
      "Fine-grained access control with role hierarchies (Admin, Manager, Member)",
      "Optimistic UI state updates ensuring instantaneous user feedback"
    ],
    architectureDetails: [
      "Stateless authentication: Short-lived access tokens (15m) paired with rotating refresh tokens stored in HTTP-Only SameSite strict cookies",
      "Compound indexed queries on task collection for high-throughput status updates (Backlog → In Progress → Review → Done)",
      "Optimistic mutation queue on the React client with rollback recovery upon network interruption"
    ],
    githubUrl: "https://github.com/harsh312-afk",
    liveUrl: "#",
    category: "Full-Stack"
  },
  {
    id: "ridelink-mobility",
    title: "RideLink — Urban Mobility Platform",
    tagline: "Production-grade ride booking platform with live map telemetry and dynamic surge engine.",
    description: "Interactive transit application featuring 8 vehicle tiers, itemized dynamic pricing engines, Leaflet road routing polylines, driver dispatch console, and real-time operations dashboard.",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Leaflet Maps", "OSM"],
    highlights: [
      "Dynamic surge multiplier calculation model (1.0x to 2.5x) with live KPI audits",
      "Driver simulation along vector road coordinates with 4-digit safety OTP verification",
      "Dual console views for passenger booking and driver partner dispatch"
    ],
    architectureDetails: [
      "Real-time heading bearing calculation for vehicle icons using geometric angles along road polylines",
      "Algorithmic surge multiplier combining pickup radius density, available fleet count, and rush-hour modifiers",
      "Safety SOS coordinator simulation and automated itemized PDF receipt generation"
    ],
    githubUrl: "https://github.com/harsh312-afk",
    liveUrl: "#",
    category: "Full-Stack"
  },
  {
    id: "weather-intelligence",
    title: "Real-Time Weather Intelligence",
    tagline: "Dynamic dashboard delivering interactive meteorological telemetry and cache-first state.",
    description: "Telemetry dashboard providing multi-city atmospheric monitoring, 5-day predictive forecasts, and weather-reactive CSS background simulations with smart query caching.",
    techStack: ["React", "Tailwind CSS", "OpenWeather API", "TypeScript", "Vite"],
    highlights: [
      "Debounced search queries reducing redundant 3rd-party API calls by 70%",
      "Client-side caching with stale-while-revalidate local fallback",
      "Responsive visual charts showing atmospheric humidity, pressure, and wind speed"
    ],
    architectureDetails: [
      "Custom useDebounce hook preventing API rate limit penalties during keystroke search",
      "Stale-while-revalidate cache layer in localStorage for instant reload performance",
      "CSS3 keyframe animations dynamically conditioned on live atmospheric telemetry codes"
    ],
    githubUrl: "https://github.com/harsh312-afk",
    liveUrl: "#",
    category: "Frontend & Telemetry"
  },
  {
    id: "dotfiles-toolkit",
    title: "Dotfiles & Automation Toolkit",
    tagline: "Modular configuration and deployment scripts for Arch-based Linux environments.",
    description: "Curated dotfiles and automated bash setup suite powering a custom Hyprland Wayland environment, dynamic Waybar status modules, UWSM session management, and keyboard-driven workflows.",
    techStack: ["Bash", "Hyprland", "Waybar", "UWSM", "Arch / CachyOS", "Lua"],
    highlights: [
      "Automated workstation provisioning reducing OS re-installs to a single script execution",
      "Custom status widgets for real-time CPU/GPU thermal and memory monitors",
      "Streamlined screen recording and window tiling workflows built for developer flow"
    ],
    architectureDetails: [
      "Zero-touch bash provisioning script with error trapping and idempotency checks",
      "Dynamic JSON status streams piped directly into Waybar for hardware monitoring",
      "Integrated UWSM systemd units ensuring clean Wayland compositor teardowns"
    ],
    githubUrl: "https://github.com/harsh312-afk",
    liveUrl: "#",
    category: "Systems & Linux"
  }
];

export const OPEN_SOURCE_SYSTEMS = [
  {
    title: "Hyprland & CachyOS Dotfiles",
    description: "Custom Wayland ricing setup with UWSM session manager, Waybar JSON status pipelines, and custom keybindings for tiling productivity.",
    tech: ["Bash", "Hyprland", "Waybar", "Linux"],
    stars: "Maintained",
    githubUrl: "https://github.com/harsh312-afk"
  },
  {
    title: "Linux Provisioning & Ricing Scripts",
    description: "Zero-touch Bash automation scripts that bootstrap package dependencies, configure audio/display pipelines, and install dev environments on Arch/Fedora.",
    tech: ["Shell Scripting", "Systemd", "Pacman/DNF"],
    stars: "Active",
    githubUrl: "https://github.com/harsh312-afk"
  },
  {
    title: "FastAPI REST Starter Microservice",
    description: "Batteries-included backend template with asynchronous Postgres connection pooling, Pydantic v2 schemas, JWT tokens, and Docker Compose.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    stars: "Template",
    githubUrl: "https://github.com/harsh312-afk"
  }
];

export const TIMELINE = [
  {
    period: "2024 — Present",
    role: "B.Tech Computer Science & Engineering",
    organization: "Ethics University",
    location: "Uttarakhand, India",
    description: "Core specialization in computer science fundamentals, data structures, algorithm design, distributed systems, and intelligent software architectures.",
    details: [
      "Rigorous coursework in computational linear algebra, discrete math, and algorithm analysis.",
      "Practical engineering in distributed systems, asynchronous API backends, and containerized deployments.",
      "Consistent academic performance (SGPA 6.80 & 6.67 across foundational semesters)."
    ]
  },
  {
    period: "2024 — Present",
    role: "Independent Full-Stack & Systems Engineer",
    organization: "Open Source & Personal Projects",
    location: "Remote",
    description: "Architected multiple production-grade web systems including RideLink, MERN Finance Tracker, and cloud FastAPI/Next.js publishing engines.",
    details: [
      "Designed resilient RESTful APIs using FastAPI and Node.js with strict validation and security headers.",
      "Implemented full CI/CD deployment pipelines on Vercel and Render with zero-downtime rollouts.",
      "Engineered automated developer tooling, Linux dotfiles, and shell utilities for Linux workstations."
    ]
  }
];
