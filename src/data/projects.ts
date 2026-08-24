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
  status?: string
  relatedSlugs?: string[]
  tags: string[]
  highlights?: string[]
  accent?: string
  metrics?: { value: string; label: string }[]
  downloadManifestUrl?: string
}

export const projects: Project[] = [
  {
    slug: "thingd",
    name: "thingd",
    tagline: "Open-source Rust data engine for AI agents",
    description:
      "thingd — open-source Rust data engine with SQLite, durable queues, event streams, full-text search, graph links, and 31 MCP tools. Fast, embeddable, one static binary.",
    fullDescription:
      "thingd is an object-first data engine for AI agents and applications. It combines durable queues (leases, retries, dead-letter queues), append-only event streams, SQLite FTS5 full-text search, directed graph links, distributed locks, workflow DAGs, and 31 built-in MCP tools into a single static binary (~15MB). Sub-millisecond local lookups and 10,000+ writes/second per node. Run it embedded (in-process), as a sidecar, in Docker, or on Kubernetes — same API, same primitives. thingd powers clipboard search in clipbuf, score history in dartcam, catalog and library state in GoodOne Watch, and the managed layer in thingd Cloud.",
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
      "Provides catalog and library persistence for GoodOne Watch",
    ],
    accent: "#ff6b00",
    relatedSlugs: ["clipbuf", "dartcam", "goodone-watch"],
    metrics: [{ value: "15MB", label: "static binary" }, { value: "10k+", label: "writes / sec" }],
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
    accent: "#ff9e43",
    relatedSlugs: ["dartcam"],
    metrics: [{ value: "MCP", label: "native endpoints" }, { value: "multi", label: "tenant ready" }],
  },
  {
    slug: "arqen",
    name: "Arqen",
    tagline: "Backend infrastructure for agent-ready applications",
    description:
      "Arqen is Rust-first, language-agnostic backend infrastructure used by GoodOne Watch, with typed tools, durable jobs, discoverable APIs, and thingd integration.",
    fullDescription:
      "Arqen is a contract layer between applications, agents, and the systems that operate them. It makes typed tools, durable jobs, manifests, policies, logging, health, and deployment paths explicit while keeping the application boundary language-agnostic. GoodOne Watch uses Arqen's public APIs for its Rust backend, including the HTTP facade, health and readiness endpoints, agent endpoints, storage factory, and Thingd-backed persistence adapters.",
    emoji: "◈",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/arqen", label: "GitHub" },
      { type: "website", url: "https://sayanmohsin.github.io/arqen/", label: "documentation" },
    ],
    featured: true,
    status: "in use",
    tags: ["Rust", "Axum", "Typed tools", "Durable jobs", "CLI"],
    highlights: [
      "Typed tools with structured inputs, outputs, permissions, and audit metadata",
      "Durable jobs with retries, leases, idempotency, and dead letters",
      "Shared manifests for endpoints, tools, jobs, and runtime metadata",
      "Health, readiness, tracing, and deployment paths built into the application boundary",
    ],
    accent: "#4DA3FF",
    relatedSlugs: ["goodone-watch", "thingd"],
    metrics: [{ value: "typed", label: "tools" }, { value: "durable", label: "jobs" }],
  },
  {
    slug: "go-feather-route",
    name: "Go Feather Route",
    tagline: "A featherweight OpenAI-compatible model-routing gateway",
    description:
      "Go Feather Route is an open-source Go gateway for routing chat requests across OpenAI-compatible providers with authentication, aliases, retries, timeouts, streaming, and operational health checks.",
    fullDescription:
      "Go Feather Route gives applications one focused boundary for model-provider access. It keeps provider credentials server-side while handling bearer authentication, model aliases, request limits, retries, timeouts, bounded concurrency, JSON and Server-Sent Events responses, health and readiness endpoints, and Prometheus-style metrics. It runs as a small static Go binary or non-root multi-architecture Docker image, with optional Thingd MCP connectivity kept as a separate capability boundary. The project is public and open source under the Apache License 2.0.",
    emoji: "⇄",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/go-feather-route", label: "GitHub" },
      { type: "website", url: "https://sayanmohsin.github.io/go-feather-route/", label: "GitHub Pages documentation" },
      { type: "website", url: "https://sayanmohsin.github.io/go-feather-route/api", label: "API reference" },
      { type: "website", url: "https://sayanmohsin.github.io/go-feather-route/benchmarks", label: "Benchmarks" },
      { type: "website", url: "https://hub.docker.com/r/sayanmohsin/go-feather-route", label: "Docker Hub" },
    ],
    featured: true,
    status: "open source",
    tags: ["Go", "OpenAI-compatible", "Routing", "Streaming", "Docker", "Open source"],
    highlights: [
      "One authenticated boundary for OpenAI-compatible provider endpoints",
      "Model aliases, bounded requests, retries, timeouts, and concurrent work",
      "JSON and Server-Sent Events streaming with prompt client cancellation",
      "Liveness, readiness, model status, and Prometheus-style metrics",
      "Static, non-root, multi-architecture Docker images for small hosts",
      "Public open-source project licensed under Apache-2.0",
    ],
    accent: "#7DF9D2",
    relatedSlugs: ["thingd"],
    metrics: [{ value: "Go", label: "static binary" }, { value: "SSE", label: "streaming" }],
  },
  {
    slug: "goodone-watch",
    name: "GoodOne Watch",
    tagline: "Find your next good one.",
    description:
      "GoodOne Watch is a mobile-first, cross-platform assistant for finding and tracking movies and series across countries, streaming services, and languages.",
    fullDescription:
      "GoodOne Watch brings discovery, availability, and personal watch history into one calmer flow. Search for a movie or series, see where it is available for your country, services, and languages, then save it, track progress, rate it, or mark it watched. Its Rust backend is built on Arqen's public APIs and uses Thingd-backed persistence, so the product can keep availability honest, support season-level differences, and build explainable recommendations from explicit activity.",
    emoji: "🎬",
    links: [
      { type: "github", url: "https://github.com/sayanmohsin/goodone-watch" },
      { type: "website", url: "https://goodone.watch", label: "goodone.watch" },
    ],
    featured: false,
    status: "in progress",
    tags: ["Expo", "TypeScript", "React Native", "Rust", "Thingd"],
    highlights: [
      "Country-, service-, and language-aware availability with honest unknown states",
      "Season-level availability for series whose providers do not line up",
      "Watch-later, watching, watched, ratings, notes, likes, and dislikes",
      "Durable, user-scoped library and progress state backed by Thingd",
      "Explainable recommendations shaped by searches and explicit activity",
      "Rust backend built on Arqen's public HTTP, health, agent, and storage APIs",
    ],
    accent: "#8B7CFF",
    relatedSlugs: ["arqen", "thingd"],
    metrics: [{ value: "3", label: "platforms" }, { value: "season-level", label: "availability" }],
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
    accent: "#6b80ff",
    downloadManifestUrl: "https://storage.googleapis.com/clipbuf-releases/versions.json",
    relatedSlugs: ["thingd"],
    metrics: [{ value: "<50ms", label: "search" }, { value: "100%", label: "offline" }],
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
    featured: false,
    tags: ["Flutter", "Dart", "Rust", "Mobile"],
    highlights: [
      "Automatic score detection with on-device AI — no internet required",
      "Score history queries in under 10ms via thingd's local engine",
      "Cloud sync, accounts, and storage powered by thingd Cloud",
      "Login/signup, multi-device sync, and backup through thingd Cloud",
    ],
    accent: "#ff6b6b",
    relatedSlugs: ["thingd"],
    metrics: [{ value: "2–8", label: "players" }, { value: "<10ms", label: "score queries" }],
  },
]
