export type LinkType = "github" | "website" | "npm" | "crate" | "appstore" | "playstore" | "download"

export interface ProjectLink {
  type: LinkType
  url: string
  label?: string
}

export type TechnologyRole = "runtime" | "framework" | "storage" | "protocol" | "deployment" | "sdk" | "library" | "client"
export type IntegrationMode = "production" | "local" | "optional" | "planned"

export interface ProjectTechnology {
  name: string
  role: TechnologyRole
  mark: string
}

export interface ProjectIntegration {
  targetSlug: string
  label: string
  mode: IntegrationMode
  description: string
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
  status: string
  relatedSlugs?: string[]
  tags: string[]
  technologies: ProjectTechnology[]
  integrations?: ProjectIntegration[]
  highlights?: string[]
  accent?: string
  metrics?: { value: string; label: string }[]
  downloadManifestUrl?: string
}

export const projects: Project[] = [
  {
    slug: "thingd",
    name: "thingd",
    tagline: "An open-source object-first data engine",
    description: "A Rust data engine with persistent storage, queues, events, search, and MCP access for applications and agents.",
    fullDescription: "thingd is an early-to-mid stage 0.x data engine for applications and agents. The Rust engine provides persistent adapters, Tantivy full-text search, vector-ready retrieval, durable queues, event streams, graph links, and an MCP server. The TypeScript and Node.js packages add memory, native, cloud, and browser-facing clients, while the CLI provides administration and diagnostics. RocksDB is the default durable storage backend; ThingDB RAM and the separate ThingDB cache are in-memory modes. The project is functional and tested, but is not presented as production-ready.",
    emoji: "🗄️",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/thingd" },
      { type: "website", url: "https://engine.thingd.cloud" },
      { type: "website", url: "https://thingd.cloud" },
      { type: "npm", url: "https://www.npmjs.com/package/@thingd/sdk", label: "@thingd/sdk on npm" },
      { type: "npm", url: "https://www.npmjs.com/package/@thingd/client", label: "@thingd/client on npm" },
      { type: "npm", url: "https://www.npmjs.com/package/@thingd/native", label: "@thingd/native on npm" },
      { type: "npm", url: "https://www.npmjs.com/package/@thingd/cli", label: "@thingd/cli on npm" },
      { type: "crate", url: "https://crates.io/crates/thingd", label: "thingd on crates.io" },
      { type: "website", url: "https://docs.rs/thingd", label: "Rust API docs" },
    ],
    featured: true,
    status: "early prototype",
    tags: ["open source", "data engine", "agent tools"],
    technologies: [
      { name: "Rust", role: "runtime", mark: "rs" },
      { name: "TypeScript / Node.js", role: "sdk", mark: "ts" },
      { name: "RocksDB", role: "storage", mark: "db" },
      { name: "ThingDB (experimental)", role: "storage", mark: "td" },
      { name: "Tantivy", role: "library", mark: "ta" },
    ],
    highlights: [
      "Persistent object, event, queue, graph, and search primitives in a Rust core",
      "Tantivy-backed full-text search and vector-ready retrieval",
      "Node.js SDK with memory, native, cloud, and browser-facing clients",
      "MCP server with 49 SDK tools and a Rust sidecar exposing 39 core tools",
    ],
    accent: "#e4572e",
    relatedSlugs: ["clipbuf", "dartcam", "goodone-watch"],
    metrics: [{ value: "0.86.4", label: "current release" }, { value: "49", label: "sdk tools" }],
  },
  {
    slug: "thingd-cloud",
    name: "thingd Cloud",
    tagline: "A hosted control plane and MCP access layer",
    description: "A private foundation for hosted Thingd projects, API keys, tenants, dashboards, Studio, and MCP access.",
    fullDescription: "thingd Cloud is a private planning and implementation repository for the hosted control plane around the open-source thingd engine. Its current foundation includes NestJS/Fastify TypeScript backend services, React/Vite web applications, workspace creation, API-key management, tenant and project boundaries, hosted MCP gateway access, dashboards, Studio surfaces, and a Thingd Publish prototype. The control plane and Studio are under active development; Publish delivery adapters and the broader SaaS product shape remain prototype or planned boundaries.",
    emoji: "☁️",
    links: [{ type: "website", url: "https://thingd.cloud" }],
    featured: false,
    status: "private prototype",
    tags: ["hosted control plane", "MCP gateway", "Studio"],
    technologies: [
      { name: "TypeScript", role: "runtime", mark: "ts" },
      { name: "NestJS / Fastify", role: "framework", mark: "nf" },
      { name: "React / Vite", role: "framework", mark: "rv" },
      { name: "PostgreSQL / MySQL", role: "storage", mark: "db" },
      { name: "Docker", role: "deployment", mark: "dk" },
    ],
    integrations: [
      { targetSlug: "thingd", label: "engine", mode: "production", description: "The hosted control plane connects configured runtimes to the open-source Thingd engine." },
    ],
    highlights: [
      "API keys, project and instance boundaries, and tenant-aware control-plane flows",
      "Hosted HTTPS MCP gateway for configured Thingd runtimes",
      "React/Vite dashboard and Studio surfaces backed by TypeScript services",
      "Thingd Publish remains an active prototype with delivery paths still being validated",
    ],
    accent: "#f2a93b",
    relatedSlugs: ["thingd"],
    metrics: [{ value: "2", label: "web surfaces" }, { value: "0.1", label: "private foundation" }],
  },
  {
    slug: "arqen",
    name: "Arqen",
    tagline: "A Rust-first toolkit for application backends",
    description: "A Tokio, Axum, and Tower toolkit for typed tools, durable jobs, manifests, and explicit storage boundaries.",
    fullDescription: "Arqen is a Rust-first backend toolkit built around Tokio, Tower, Axum, tracing, and an adapter contract for application storage. Its feature-gated modules cover HTTP servers and clients, typed tools, durable jobs, manifests, migrations, maintenance, connectors, and optional native or HTTP Thingd adapters. GoodOne Watch uses Arqen's public APIs. Native Thingd compatibility is pinned and validated as a separate adoption boundary rather than implied to be universal.",
    emoji: "◈",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/arqen", label: "GitHub" },
      { type: "website", url: "https://sayanmohsin.github.io/arqen/", label: "documentation" },
      { type: "crate", url: "https://crates.io/crates/arqen", label: "arqen on crates.io" },
      { type: "website", url: "https://docs.rs/arqen", label: "Rust API docs" },
    ],
    featured: true,
    status: "in active use",
    tags: ["backend toolkit", "typed tools", "durable jobs"],
    technologies: [
      { name: "Rust", role: "runtime", mark: "rs" },
      { name: "Tokio", role: "runtime", mark: "to" },
      { name: "Axum / Tower", role: "framework", mark: "at" },
    ],
    integrations: [
      { targetSlug: "thingd", label: "storage adapters", mode: "optional", description: "Native and HTTP Thingd adapters are feature-gated; compatibility is validated against a pinned range." },
      { targetSlug: "goodone-watch", label: "backend foundation", mode: "production", description: "GoodOne Watch uses Arqen's HTTP, health, storage, and application-boundary APIs." },
    ],
    highlights: [
      "Tokio, Axum, Tower, and tracing foundation for Rust services",
      "Typed tools with structured inputs, outputs, permissions, and audit metadata",
      "Durable jobs with retries, leases, idempotency, and dead letters",
      "Native Thingd compatibility is feature-gated and operationally explicit",
    ],
    accent: "#3f8efc",
    relatedSlugs: ["goodone-watch", "thingd"],
    metrics: [{ value: "0.18", label: "current release" }, { value: "5", label: "core boundaries" }],
  },
  {
    slug: "nice-code",
    name: "Nice Code",
    tagline: "Engineering guardrails with evidence",
    description: "A Rust-powered review tool and Node-compatible CLI for finding recurring engineering risks in human- and AI-written code.",
    fullDescription: "Nice Code combines a Rust analysis engine with a Node-compatible launcher to catch recurring engineering risks that require more context than a compiler or linter can provide. It reviews operational context, async work, error handling, persistence changes, secret exposure, and unsupported performance claims, while keeping findings source-backed and compact. The public npm package provides the matching launcher and downloads verified platform binaries; Nice Code complements a project's native tooling rather than replacing it.",
    emoji: "✓",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/nice-code", label: "GitHub" },
      { type: "website", url: "https://sayanmohsin.github.io/nice-code/", label: "documentation" },
      { type: "npm", url: "https://www.npmjs.com/package/@sayanmohsin/nice-code", label: "@sayanmohsin/nice-code on npm" },
      { type: "download", url: "https://github.com/sayanmohsin/nice-code/releases/latest", label: "GitHub Releases" },
    ],
    featured: true,
    status: "open source · v0.1.11",
    tags: ["static analysis", "engineering guardrails", "developer tooling"],
    technologies: [
      { name: "Rust", role: "runtime", mark: "rs" },
      { name: "Node.js", role: "runtime", mark: "js" },
      { name: "CLI", role: "client", mark: "cli" },
      { name: "Tree-sitter", role: "library", mark: "ts" },
    ],
    integrations: [
      { targetSlug: "thingd", label: "engineering checks", mode: "local", description: "Nice Code is used as a repository-local quality gate while developing the Thingd engine and packages." },
      { targetSlug: "arqen", label: "engineering checks", mode: "local", description: "Arqen uses Nice Code as an explicit repository check alongside Rust and documentation validation." },
    ],
    highlights: [
      "Rust analysis engine with a Node-compatible public launcher",
      "Source-backed findings for async, operations, persistence, security, and performance claims",
      "CI-friendly output with compact reports, baselines, and native-tool status separation",
      "Verified platform binaries distributed through GitHub Releases and npm",
    ],
    accent: "#f2b84b",
    relatedSlugs: ["thingd", "arqen"],
    metrics: [{ value: "0.1.11", label: "current release" }, { value: "Rust", label: "analysis engine" }],
  },
  {
    slug: "go-feather-route",
    name: "Go Feather Route",
    tagline: "A small OpenAI-compatible model gateway",
    description: "A Go gateway for provider routing, aliases, authentication, retries, streaming, and operational health checks.",
    fullDescription: "Go Feather Route gives applications one focused boundary for OpenAI-compatible chat and embeddings providers. It keeps credentials server-side while handling bearer authentication, model aliases, provider routing, request limits, retries, timeouts, bounded concurrency, JSON and Server-Sent Events responses, liveness and readiness endpoints, model status, and Prometheus-style metrics. It runs as a small Go service or non-root multi-architecture Docker image. Thingd connectivity is a separate future MCP capability, not a gateway dependency.",
    emoji: "⇄",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/go-feather-route", label: "GitHub" },
      { type: "website", url: "https://sayanmohsin.github.io/go-feather-route/", label: "documentation" },
      { type: "website", url: "https://sayanmohsin.github.io/go-feather-route/api", label: "API reference" },
      { type: "website", url: "https://hub.docker.com/r/sayanmohsin/go-feather-route", label: "Docker image" },
    ],
    featured: true,
    status: "open source · v0.1.0",
    tags: ["model gateway", "routing", "streaming"],
    technologies: [
      { name: "Go 1.27", role: "runtime", mark: "go" },
      { name: "Docker", role: "deployment", mark: "dk" },
    ],
    highlights: [
      "OpenAI-compatible chat and embeddings with provider base URLs and aliases",
      "Bearer auth, request limits, retries, timeouts, and bounded concurrent work",
      "JSON and Server-Sent Events responses with client cancellation",
      "Liveness, readiness, model status, metrics, and static non-root Docker images",
    ],
    accent: "#50c878",
    relatedSlugs: [],
    metrics: [{ value: "0.1.0", label: "current release" }, { value: "SSE", label: "streaming" }],
  },
  {
    slug: "goodone-watch",
    name: "GoodOne Watch",
    tagline: "Find your next good one.",
    description: "A cross-platform watch companion for availability, personal libraries, progress, ratings, and recommendations.",
    fullDescription: "GoodOne Watch is a mobile-first Expo and React Native product with a TypeScript client and Rust backend. It normalizes country, subscription, language, and season-level availability, then combines that catalog with user-owned libraries, progress, ratings, notes, and deterministic recommendations. The backend is built on Arqen and uses a production HTTP-only boundary to separately deployed Thingd. Local development can enable native Thingd, migration, maintenance, and connector features; those are not the production storage path.",
    emoji: "🎬",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/goodone-watch" },
      { type: "website", url: "https://goodone.watch", label: "goodone.watch" },
    ],
    featured: false,
    status: "in progress",
    tags: ["watch companion", "availability", "recommendations"],
    technologies: [
      { name: "Expo / React Native", role: "framework", mark: "rn" },
      { name: "TypeScript", role: "runtime", mark: "ts" },
      { name: "Rust", role: "runtime", mark: "rs" },
    ],
    integrations: [
      { targetSlug: "arqen", label: "backend foundation", mode: "production", description: "The Rust backend uses Arqen's public HTTP, logging, and application-boundary APIs." },
      { targetSlug: "thingd", label: "production persistence", mode: "production", description: "Production uses a separately deployed Thingd HTTP service for user and catalog state." },
      { targetSlug: "thingd", label: "native development mode", mode: "local", description: "Local builds can enable native Thingd, migration, maintenance, and connector features." },
    ],
    highlights: [
      "Country-, service-, and language-aware availability with honest unknown states",
      "Season-level availability for series whose providers do not line up",
      "User-scoped watch state, progress, ratings, notes, likes, and dislikes",
      "TMDB and OMDb enrich a normalized catalog without becoming the user-state source",
    ],
    accent: "#8257e6",
    relatedSlugs: ["arqen", "thingd"],
    metrics: [{ value: "3", label: "platform targets" }, { value: "season", label: "level availability" }],
  },
  {
    slug: "clipbuf",
    name: "clipbuf",
    tagline: "A private clipboard manager with optional cloud sync",
    description: "A private-beta desktop and web product for local clipboard history, search, pinning, and premium cross-device features.",
    fullDescription: "clipbuf captures clipboard history locally and makes it searchable, pinnable, and quick to paste. The desktop product uses Tauri 2, Svelte 5, TypeScript, Tailwind CSS, Rust, and a Thingd-backed local store. The web product uses React 19 and Vite and connects to the hosted cloud path. Local use is free; premium features include cross-device sync, natural-language search, and link sharing. clipbuf is private beta, not an open-source or fully offline product claim.",
    emoji: "📋",
    links: [{ type: "github", url: "https://github.com/sayanmohsin/clipbuf" }],
    featured: false,
    status: "private beta",
    tags: ["desktop", "clipboard", "cloud sync"],
    technologies: [
      { name: "Tauri 2 / Svelte 5", role: "framework", mark: "ts" },
      { name: "React / Vite", role: "framework", mark: "rv" },
      { name: "TypeScript", role: "runtime", mark: "ts" },
      { name: "Rust", role: "runtime", mark: "rs" },
      { name: "Tailwind CSS", role: "library", mark: "tw" },
    ],
    integrations: [
      { targetSlug: "thingd", label: "local storage", mode: "production", description: "The desktop product uses a local Thingd-backed store for clipboard history." },
      { targetSlug: "thingd-cloud", label: "premium cloud path", mode: "optional", description: "Web and premium features use the hosted cloud path for sync and shared capabilities." },
    ],
    highlights: [
      "Local clipboard capture, full-text search, pinning, and paste-on-select",
      "Tauri/Svelte desktop app plus a React/Vite web product",
      "Free local use with premium cross-device sync, natural-language search, and link sharing",
      "Desktop release line is currently 0.9.0-beta.22",
    ],
    accent: "#6675f5",
    downloadManifestUrl: "https://storage.googleapis.com/clipbuf-releases/versions.json",
    relatedSlugs: ["thingd", "thingd-cloud"],
    metrics: [{ value: "2", label: "product surfaces" }, { value: "0.9", label: "beta line" }],
  },
  {
    slug: "dartcam",
    name: "dartcam",
    tagline: "Snap a board or tap to score.",
    description: "A Flutter dart scorer with on-device camera detection, manual scoring, event-sourced matches, and optional sync.",
    fullDescription: "DartCam is a Flutter and Dart mobile app for Android and iOS. It uses the camera and a TFLite DeepDarts D2 YOLOv4-tiny model to detect darts and calibration points on-device, with a manual dartboard picker as a fallback. Match state and player statistics are stored locally through embedded Thingd/RocksDB accessed by flutter_rust_bridge. Optional aggregate sync reaches thingd.cloud through an email-scoped identifier; it does not imply a full account system. The current app is beta v0.2.1+2, with builds distributed through GitHub Releases.",
    emoji: "🎯",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/dartcam" },
      { type: "download", url: "https://github.com/sayanmohsin/dartcam/releases", label: "GitHub Releases" },
    ],
    featured: false,
    status: "beta · v0.2.1+2",
    tags: ["dart scoring", "camera detection", "mobile"],
    technologies: [
      { name: "Flutter / Dart", role: "framework", mark: "fl" },
      { name: "Camera", role: "library", mark: "cam" },
      { name: "TFLite / DeepDarts", role: "library", mark: "ml" },
      { name: "flutter_rust_bridge", role: "library", mark: "frb" },
      { name: "RocksDB", role: "storage", mark: "db" },
    ],
    integrations: [
      { targetSlug: "thingd", label: "embedded persistence", mode: "production", description: "Local match history and player data use embedded Thingd/RocksDB through the Rust bridge." },
      { targetSlug: "thingd-cloud", label: "aggregate sync", mode: "optional", description: "Optional cloud sync pushes aggregate match results using an email-scoped identifier." },
    ],
    highlights: [
      "On-device TFLite DeepDarts detection with manual scoring fallback",
      "301, 501, 701, and 1001 modes with turn, bust, and double-out rules",
      "2–8 player matches with event-sourced local persistence",
      "81 Dart tests and 27 Rust tests documented in the current repository",
    ],
    accent: "#ef6f6c",
    relatedSlugs: ["thingd", "thingd-cloud"],
    metrics: [{ value: "2–8", label: "players" }, { value: "108", label: "documented tests" }],
  },
]

const projectSlugs = new Set(projects.map((project) => project.slug))
for (const project of projects) {
  if (!project.status || project.technologies.length === 0) {
    throw new Error(`Project ${project.slug} must define status and technologies`)
  }
  for (const integration of project.integrations ?? []) {
    if (!projectSlugs.has(integration.targetSlug)) {
      throw new Error(`Project ${project.slug} references missing integration target ${integration.targetSlug}`)
    }
  }
}
