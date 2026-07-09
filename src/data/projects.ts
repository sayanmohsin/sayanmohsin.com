export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  emoji: string
  githubUrl?: string
  websiteUrl?: string
  featured: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: "thingd",
    name: "thingd",
    tagline: "Open-source Rust data engine for AI agents",
    description:
      "Object-shaped storage, durable queues, event streams, full-text search, graph links, and 29 MCP-native tools — all in one static binary. No stitching together separate infrastructure.",
    emoji: "🗄️",
    githubUrl: "https://github.com/sayanmohsin/thingd",
    featured: true,
    tags: ["Rust", "SQLite", "MCP", "TypeScript"],
  },
  {
    slug: "thingd-cloud",
    name: "thingd Cloud",
    tagline: "Managed hosting for thingd",
    description:
      "Hosted MCP endpoints, API key management, team dashboard, tenant isolation, and backups. Run thingd without the ops overhead.",
    emoji: "☁️",
    websiteUrl: "https://thingd.cloud",
    featured: false,
    tags: ["Fastify", "React", "TypeScript", "SaaS"],
  },
  {
    slug: "clipstash",
    name: "clipstash",
    tagline: "Privacy-first clipboard manager",
    description:
      "Captures clipboard history locally with full-text search, pinning, and paste-on-select. Premium tier adds cross-device sync and natural language search.",
    emoji: "📋",
    githubUrl: "https://github.com/sayanmohsin/clipstash",
    featured: false,
    tags: ["Tauri", "Svelte", "Rust", "TypeScript"],
  },
  {
    slug: "dartcam",
    name: "dartcam",
    tagline: "Minimal dart scoring app",
    description:
      "Snap a photo of the dartboard for automatic score detection, or tap in manually. Supports 301/501/701/1001, double-out, and 2–8 player matches.",
    emoji: "🎯",
    githubUrl: "https://github.com/sayanmohsin/dartcam",
    featured: false,
    tags: ["Flutter", "Dart", "Rust", "Mobile"],
  },
]
