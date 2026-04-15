import huggingboxImage from "@/assets/projects/huggingbox.png";
import tldrImage from "@/assets/projects/tldr.png";

export type ProjectStatus =
  | "shipped"
  | "in-progress"
  | "prototype"
  | "mvp"
  | "tbd";

export interface Project {
  slug: string;
  title: string;
  description: string;
  pitch: string;
  tags: string[];
  status: ProjectStatus;
  featured: boolean;
  color: "cyan" | "electric-blue" | "yellow" | "orange" | "teal" | "magenta";
  links: {
    github?: string;
    demo?: string;
  };
  githubDisabled?: boolean;
  problem: string;
  approach: string[];
  techStack: string[];
  learned: string;
  nextSteps: string[];
  createdAt: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    slug: "tldr",
    title: "tldr",
    description: "Client-side reading simplifier with optional AI help",
    pitch: "Make reading dense text easier with keyword highlighting and AI simplification.",
    tags: ["Reading", "Productivity", "NLP"],
    status: "mvp",
    featured: true,
    color: "yellow",
    links: {
      demo: "https://tldr-321914.vercel.app/",
    },
    problem: "Long articles are documents are difficult to skim and understand quickly. Most reading assistants utilise LLMs, which runs the risk of hallucination and is not always economical or private. I wanted to create a local reading assistant that would support reading the original document, without oversimplifying it.",
    approach: [
      "Identified the best approach to extracting keywords and keyphrases from text.",
      "Create a non-intrusive UI that users can interact with whenever they want to.",
      "Kept the product client-side-first so the default experience stays lightweight and private.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Wink NLP tokenisation"],
    learned: "PoS analysis is a lightweight and effective way to extract keywords and keyphrases from text. As the number of users scaled, we learnt how to iterate and respond to feedback",
    nextSteps: ["Expand file and PDF workflows", "Ship stronger extension-to-web continuity"],
    createdAt: "2026-01-20",
    imageSrc: tldrImage,
    imageAlt: "TLDR reading simplifier interface",
  },
  {
    slug: "trust-me-bro",
    title: "Trust Me Bro",
    description: "Search with an in-browser AI overview and verifiable results",
    pitch: "Get a fast local AI overview, then verify it against live search results on the same page.",
    tags: ["Search", "Privacy", "AI"],
    status: "prototype",
    featured: true,
    color: "electric-blue",
    links: {
      github: "https://github.com/Schwaemo/trust-me-bro",
      demo: "https://trust-me-bro-schwaemo.vercel.app/",
    },
    problem: "Search is increasingly split between AI answers you cannot inspect and result pages that make verification slow. The gap between summary and source is where trust breaks down.",
    approach: [
      "Generate a lightweight AI overview locally in the browser instead of routing queries through a custom backend.",
      "Pair the generated summary with Google Programmable Search Engine results so users can immediately cross-check it.",
      "Keep the MVP stateless with no custom storage of queries or outputs.",
    ],
    techStack: ["React", "TypeScript", "Vite", "Transformers.js", "WebGPU", "Google PSE"],
    learned: "Local inference changes the product constraints as much as the UI. Model size, browser support, and load time become core parts of the user experience.",
    nextSteps: ["Improve unsupported-browser fallbacks", "Tighten source verification and result presentation"],
    createdAt: "2024-02-01",
  },
  {
    slug: "huggingbox",
    title: "HuggingBox",
    description: "Desktop app for browsing and managing local model workflows",
    pitch: "A single app that manages all of your Huggingface models",
    tags: ["Desktop", "ML"],
    status: "prototype",
    featured: true,
    color: "teal",
    links: {
      github: "https://github.com/Schwaemo/huggingbox",
    },
    problem: "I wanted a quick and simple way to explore different OCR and forecasting models. Managing the models, environments and code for them was a pain, and I wanted a dedicated app for it.",
    approach: [
      "Started a Tauri and React desktop shell with dedicated browse, detail, library, and settings views.",
      "Added system info and execution hooks so model actions can be grounded in the local machine state.",
      "Persisted settings locally to move the product beyond a disposable prototype session.",
    ],
    techStack: ["Tauri", "React", "TypeScript", "Zustand", "Monaco"],
    learned: "Desktop AI tools need clear machine-state feedback. Without that grounding, even a polished UI still feels like a thin wrapper over a pile of scripts.",
    nextSteps: ["Connect more of the model management flow end to end", "Define the execution experience beyond the current shell"],
    createdAt: "2026-03-10",
    imageSrc: huggingboxImage,
    imageAlt: "HuggingBox desktop application interface",
  },
  {
    slug: "claw-dm",
    title: "Claw DM",
    description: "Direct messaging for OpenClaw",
    pitch:
      "A work-in-progress messaging layer for OpenClaw that lets AI agents communicate through a standard, identity-based protocol.",
    tags: ["OpenClaw", "Messaging", "AI Tools"],
    status: "in-progress",
    featured: false,
    color: "cyan",
    links: {},
    problem:
      "Current AI agents can use tools and generate text, but there is no simple shared messaging standard that lets one agent directly contact another. Claw DM explores a JSON-based protocol for agent-to-agent communication where each agent has its own address-like identity and can hold more than one identity when needed.",
    approach: [
      "Define a standard message format for agent-to-agent communication instead of hard-coding one-off integrations.",
      "Model sender and recipient identities explicitly so agents can communicate through stable, address-like handles.",
      "Leave room for delivery metadata, permissions, and routing so the protocol can grow into a wider network.",
    ],
    techStack: ["OpenClaw", "JSON", "Agent Messaging", "Identity Protocol"],
    learned:
      "Agent messaging is not just about passing text. Identity, isolation, routing, and safety all need clear rules so different agents can communicate predictably without creating ambiguous or unsafe interactions.",
    nextSteps: [
      "Map the protocol onto OpenClaw's agents, accounts, sessions, and messaging channels.",
      "Test how agent identities and conversations behave across real interactions in the OpenClaw ecosystem.",
    ],
    createdAt: "2026-04-15",
  },
  {
    slug: "silver-tongue",
    title: "Silver Tongue",
    description:
      "Teaching agents to negotiate, coordinate, and pursue goals through structured communication.",
    pitch:
      "Silver Tongue is an experimental project exploring agent skills for prompt engineering and agent-to-agent communication, with a focus on objective-driven dialogue such as negotiation and coordinated task completion.",
    tags: [
      "AI Agents",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Negotiation",
      "Experimental",
    ],
    status: "in-progress",
    featured: false,
    color: "orange",
    links: {},
    problem:
      "Most agent systems are strongest when acting alone on clearly scoped tasks, but much weaker when an objective depends on strategic back-and-forth communication. Tasks such as negotiating a price, coordinating roles across multiple agents, or adapting a conversation toward a concrete outcome require more than single-shot prompting. Silver Tongue explores how to give agents reusable communication skills for these more interactive settings.",
    approach: [
      "Explore a skill-based framework for agent communication instead of treating communication as unstructured chatter.",
      "Define how agents frame goals, exchange context, negotiate, and decide on next actions through explicit agent-to-agent exchanges.",
      "Use service-price negotiation as a representative testbed where success depends on strategy, role clarity, memory, and controlled dialogue rather than simple task execution.",
    ],
    techStack: [
      "AI Agents",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "Structured Communication",
      "Negotiation",
    ],
    learned:
      "One early lesson is that effective agent communication is not just a model capability problem; it is also a protocol and product-design problem. To make multi-agent interaction useful, agents need clearer role boundaries, better ways to pass context, and more explicit success criteria. Another key insight is that negotiation-style tasks expose weaknesses in vague prompting very quickly, which makes them a useful testbed for designing more robust agent skills.",
    nextSteps: [
      "Formalize the communication protocol and define a clearer set of reusable agent skills.",
      "Build a test environment for objective-based interactions such as negotiation.",
      "Move the project toward implementation, evaluation, and integration into a broader agent network or workflow.",
    ],
    createdAt: "2026-04-15",
  },
  {
    slug: "game-bet-match",
    title: "Game Bet Match",
    description:
      "A live tennis win-probability engine for identifying potential market mispricings.",
    pitch:
      "Live tennis win probabilities, recalculated as the match unfolds.",
    tags: [
      "Machine Learning",
      "Sports Analytics",
      "Prediction Markets",
      "Tennis",
      "XGBoost",
    ],
    status: "in-progress",
    featured: false,
    color: "electric-blue",
    links: {
      github: "https://github.com/s-h-a-n-i-l/tennis_ml",
    },
    problem:
      "Live prediction markets now offer tennis contracts with prices that update throughout a match. My hypothesis is that these markets do not always reprice efficiently as momentum, score state, and match context change. Game Bet Match is an attempt to model live win probability more directly and use differences between model output and market pricing as a signal for potential mispricing.",
    approach: [
      "Built a live win-probability model for tennis matches using XGBoost",
      "Used evolving match-state information so probability updates dynamically as the game progresses",
      "Compared model probabilities against live market pricing to surface potential divergence",
    ],
    techStack: ["Python", "XGBoost", "Pandas", "scikit-learn"],
    learned:
      "Building a useful live prediction model is not just about choosing a strong algorithm. The harder part is representing match state in a way that captures how tennis actually swings over time. Scoreline context, momentum, and in-match progression matter more than a static pre-match view. This project also reinforced that there is a big difference between a working prediction engine and a product people can interact with easily: model quality is one problem, but clear delivery, visualisation, and usability are another.",
    nextSteps: [
      "Build the interactive website so users can explore live predictions in real time",
      "Add a clear interface for viewing model probability versus market price during a match",
      "Improve the feature set and evaluation workflow for live-state prediction",
      "Add backtesting or paper-trading style views for more transparent assessment",
    ],
    createdAt: "2026-04-15",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects
    .filter((p) => p.featured)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
};
