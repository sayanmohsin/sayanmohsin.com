export interface Download {
  os: "mac" | "windows" | "linux" | "ios" | "android"
  label: string
  url: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  fullDescription: string
  emoji: string
  githubUrl?: string
  websiteUrl?: string
  downloads?: Download[]
  featured: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: "thingd",
    name: "thingd",
    tagline: "Open-source Rust data engine for AI agents",
    description:
      "Object-shaped storage, durable queues, event streams, full-text search, graph links, and 29 MCP-native tools — all in one static binary.",
    fullDescription:
      "thingd is a high-performance, object-first data engine that combines persistent object storage, durable queues, append-only event streams, full-text search (FTS5 with Porter stemming), graph links, and 29 MCP-native tools into a single static binary. No stitching together separate infrastructure. Run it embedded (in-process), as a standalone sidecar, or in a cluster. In-memory or persistent SQLite — same API everywhere. thingd is the engine that powers clipstash, dartcam, and thingd Cloud.",
    emoji: "🗄️",
    githubUrl: "https://github.com/sayanmohsin/thingd",
    featured: true,
    tags: ["Rust", "SQLite", "MCP", "TypeScript", "CLI"],
  },
  {
    slug: "thingd-cloud",
    name: "thingd Cloud",
    tagline: "Managed hosting for thingd",
    description:
      "Hosted MCP endpoints, API key management, team dashboard, tenant isolation, and backups.",
    fullDescription:
      "thingd Cloud is the SaaS control-plane around the open-source thingd engine. It provides managed hosted MCP endpoints, API key management, tenant isolation, billing, dashboards, and account management. If you want thingd without the ops overhead, thingd Cloud runs it for you.",
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
      "Captures clipboard history locally with full-text search, pinning, and paste-on-select.",
    fullDescription:
      "clipstash is a privacy-first clipboard manager that captures clipboard history locally and provides full-text search, pinning, and paste-on-select. It has a free local tier and a premium tier ($5/mo) that adds cross-device sync, natural language search, and link sharing. Built with Tauri 2.x + Svelte 5 for the desktop app, and thingd (SQLite) for local storage with thingd Cloud for sync.",
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
      "Snap a photo of the dartboard for automatic score detection, or tap in manually.",
    fullDescription:
      "dartcam is a minimal dart scoring app for Android, iOS, and web. Users can either snap a photo of the dartboard (on-device image processing detects where darts landed) or tap in scores manually. Supports match modes (301/501/701/1001), double-out enforcement, bust detection, undo, 2-8 player multiplayer, and match persistence. Built with Flutter and Dart, with a Rust native library via flutter_rust_bridge for storage.",
    emoji: "🎯",
    githubUrl: "https://github.com/sayanmohsin/dartcam",
    downloads: [
      { os: "ios", label: "iOS", url: "#" },
      { os: "android", label: "Android", url: "#" },
    ],
    featured: false,
    tags: ["Flutter", "Dart", "Rust", "Mobile"],
  },
]
