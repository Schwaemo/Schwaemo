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
