export type LinkType = "github" | "website" | "appstore" | "playstore" | "download"

export interface ProjectLink {
  type: LinkType
  url: string
  label?: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  fullDescription: string
  emoji: string
  links?: ProjectLink[]
  featured: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: "thingd",
    name: "thingd",
    tagline: "Open-source Rust data engine for AI agents",
    description:
      "Object-shaped storage, durable queues, event streams, full-text search, graph links, and 31 MCP-native tools — all in one static binary.",
    fullDescription:
      "thingd is an object-first data engine for AI agents and applications. It combines durable queues (leases, retries, dead-letter queues), append-only event streams, SQLite FTS5 full-text search, directed graph links, distributed locks, workflow DAGs, and 31 built-in MCP tools into a single static binary (~15MB). Run it embedded (in-process), as a sidecar, in Docker, or on Kubernetes — same API, same primitives. thingd is the engine that powers Clipbuf, DartCam, and thingd Cloud.",
    emoji: "🗄️",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/thingd" },
      { type: "website", url: "https://engine.thingd.cloud" },
      { type: "website", url: "https://thingd.cloud" },
    ],
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
      "thingd Cloud is the managed SaaS layer around the open-source thingd engine. It provides hosted HTTPS MCP endpoints, multi-tenant project and instance management, scoped API keys with per-instance ACL, write approval workflows, full audit logging, and OpenTelemetry instrumentation — so teams get the power of thingd without self-hosting the infrastructure.",
    emoji: "☁️",
    links: [
      { type: "website", url: "https://thingd.cloud" },
    ],
    featured: false,
    tags: ["NestJS", "React", "TypeScript", "SaaS"],
  },
  {
    slug: "clipbuf",
    name: "clipbuf",
    tagline: "Privacy-first clipboard manager",
    description:
      "Captures clipboard history locally with full-text search, pinning, and paste-on-select.",
    fullDescription:
      "Clipbuf is a fast, privacy-first clipboard manager for macOS, Windows, and Linux. It captures clipboard history automatically with full-text search (SQLite FTS5), pinning, keyboard navigation, paste-on-select, system tray integration, image previews, and dark/light theme. Built with Tauri 2 + Svelte 5 for the desktop app, with a Rust backend and thingd (SQLite) for local storage. All processing stays local.",
    emoji: "📋",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/clipbuf" },
      { type: "download", url: "https://github.com/sayanmohsin/clipbuf/releases/tag/v0.9.0-beta.7" },
    ],
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
      "DartCam is a minimal dart scoring app for iOS, Android, and web. Snap a photo of the board for automatic score detection — all on-device image processing, no internet required. Or tap in scores manually with multiplier validation. Supports 301/501/701/1001 with double-out enforcement, bust detection, undo, and 2-8 player multiplayer with automatic turn rotation. Built with Flutter and Dart, with a Rust native library via flutter_rust_bridge for event-sourced persistence on thingd-core.",
    emoji: "🎯",
    links: [
      { type: "appstore", url: "#" },
      { type: "playstore", url: "#" },
    ],
    featured: false,
    tags: ["Flutter", "Dart", "Rust", "Mobile"],
  },
]
