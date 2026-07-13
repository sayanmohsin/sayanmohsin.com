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
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: "thingd",
    name: "thingd",
    tagline: "Open-source Rust data engine for AI agents",
    description:
      "thingd — open-source Rust data engine with SQLite, durable queues, event streams, full-text search, graph links, and 31 MCP tools. Fast, embeddable, one static binary.",
    fullDescription:
      "thingd is an object-first data engine for AI agents and applications. It combines durable queues (leases, retries, dead-letter queues), append-only event streams, SQLite FTS5 full-text search, directed graph links, distributed locks, workflow DAGs, and 31 built-in MCP tools into a single static binary (~15MB). Sub-millisecond local lookups and 10,000+ writes/second per node. Run it embedded (in-process), as a sidecar, in Docker, or on Kubernetes — same API, same primitives. thingd is the engine that powers clipbuf, dartcam, and thingd Cloud.",
    emoji: "🗄️",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/thingd" },
      { type: "website", url: "https://engine.thingd.cloud" },
      { type: "website", url: "https://thingd.cloud" },
    ],
    featured: true,
    tags: ["Rust", "SQLite", "MCP", "TypeScript", "CLI"],
    highlights: [
      "Sub-millisecond query response for local lookups",
      "10,000+ writes/second throughput on a single node",
      "~15MB static binary — embeddable in Rust, Python, TypeScript, or standalone",
      "Drives clipboard search on clipbuf, score history on dartcam, and cloud sync via thingd Cloud",
    ],
  },
  {
    slug: "thingd-cloud",
    name: "thingd Cloud",
    tagline: "Managed hosting for thingd",
    description:
      "thingd Cloud — managed SaaS hosting for the thingd Rust data engine. Hosted MCP endpoints, team dashboard, API keys, write approvals, and backups.",
    fullDescription:
      "thingd Cloud is the managed SaaS layer around the open-source thingd engine. It provides hosted HTTPS MCP endpoints, multi-tenant project and instance management, scoped API keys with per-instance ACL, write approval workflows, full audit logging, and OpenTelemetry instrumentation — so teams get the power of thingd without self-hosting the infrastructure. thingd Cloud also serves as the backend for apps like dartcam — handling user authentication (login/signup), account management, profile storage, cloud data sync, and app usage telemetry. Developers can integrate thingd Cloud into their own apps via REST API or MCP endpoints for instant auth, storage, and sync.",
    emoji: "☁️",
    links: [
      { type: "website", url: "https://thingd.cloud" },
    ],
    featured: false,
    tags: ["NestJS", "React", "TypeScript", "SaaS"],
    highlights: [
      "Managed user auth — login/signup out of the box",
      "Cloud data sync across devices — powers dartcam and more",
      "REST API + MCP endpoints for any app to integrate",
      "Multi-tenant isolation, audit logging, and automated backups",
    ],
  },
  {
    slug: "clipbuf",
    name: "clipbuf",
    tagline: "Privacy-first clipboard manager",
    description:
      "clipbuf — free and open-source clipboard manager for macOS, Windows, and Linux. Full-text search, pinning, paste-on-select. Built with Tauri and Svelte.",
    fullDescription:
      "Clipbuf is a fast, privacy-first clipboard manager for macOS, Windows, and Linux. It captures clipboard history automatically with full-text search (SQLite FTS5), pinning, keyboard navigation, paste-on-select, system tray integration, image previews, and dark/light theme. Built with Tauri 2 + Svelte 5 for the desktop app, with a Rust backend backed by thingd — the same data engine that handles durable queues and full-text search. Every clipboard entry is indexed via SQLite FTS5, returning search results in under 50ms even across thousands of entries. All processing stays local.",
    emoji: "📋",
    featured: false,
    tags: ["Tauri", "Svelte", "Rust", "TypeScript"],
    highlights: [
      "Full-text search across clipboard history in under 50ms",
      "Powered by thingd — local on-device storage engine",
      "Cross-platform: macOS, Windows, Linux — one consistent experience",
      "100% offline — clipboard data never leaves your machine",
    ],
  },
  {
    slug: "dartcam",
    name: "dartcam",
    tagline: "Minimal dart scoring app",
    description:
      "dartcam — dart score calculator for iOS and Android. Automatic score detection with on-device AI. Supports 301/501/701/1001 multiplayer.",
    fullDescription:
      "DartCam is a minimal dart scoring app for iOS, Android, and web. Snap a photo of the board for automatic score detection — all on-device image processing, no internet required. Or tap in scores manually with multiplier validation. Supports 301/501/701/1001 with double-out enforcement, bust detection, undo, and 2-8 player multiplayer with automatic turn rotation. Score history, player stats, and game state are stored locally via thingd's event-sourced engine — game queries and score calculations run in under 10ms. Optionally sync across devices through thingd Cloud, which handles user accounts (login/signup), profile storage, and cloud data sync.",
    emoji: "🎯",
    links: [
      { type: "appstore", url: "#" },
      { type: "playstore", url: "#" },
    ],
    featured: false,
    tags: ["Flutter", "Dart", "Rust", "Mobile"],
    highlights: [
      "Automatic score detection with on-device AI — no internet required",
      "Score history queries in under 10ms via thingd's local engine",
      "Cloud sync, accounts, and storage powered by thingd Cloud",
      "Login/signup, multi-device sync, and backup through thingd Cloud",
    ],
  },
]
