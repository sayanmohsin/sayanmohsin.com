import type { Project } from "../data/projects"

export const DEFAULT_PROJECT_ACCENT = "#e86f35"
export const DEFAULT_PROJECT_STATUS = "in progress"

export function getProjectAccent(project: Pick<Project, "accent">): string {
  return project.accent ?? DEFAULT_PROJECT_ACCENT
}

export function getProjectStatus(project: Pick<Project, "status">): string {
  return project.status ?? DEFAULT_PROJECT_STATUS
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.featured)
}

export function getRelatedProjects(project: Project, projects: Project[]): Project[] {
  return (project.relatedSlugs ?? [])
    .map((slug) => projects.find((candidate) => candidate.slug === slug))
    .filter((candidate): candidate is Project => Boolean(candidate))
}

export function getTechnologyMark(label: string): string {
  const key = label.toLowerCase()
  if (key.includes("rust")) return "🦀"
  if (key.includes("typescript")) return "ts"
  if (key.includes("javascript")) return "js"
  if (key.includes("svelte")) return "s"
  if (key.includes("tauri")) return "t"
  if (key.includes("react")) return "⚛"
  if (key.includes("flutter")) return "✦"
  if (key.includes("dart")) return "d"
  if (key === "go" || key.startsWith("go ")) return "go"
  if (key.includes("docker")) return "▣"
  if (key.includes("sqlite")) return "◈"
  if (key.includes("mcp")) return "◎"
  if (key.includes("axum")) return "a"
  if (key.includes("rocksdb")) return "db"
  if (key.includes("tantivy")) return "ta"
  if (key.includes("fastify") || key.includes("nestjs")) return "nf"
  if (key.includes("vite")) return "v"
  if (key.includes("postgres") || key.includes("mysql")) return "db"
  if (key.includes("tokio")) return "to"
  if (key.includes("thingd")) return "td"
  if (key.includes("flutter")) return "fl"
  if (key.includes("camera")) return "cam"
  if (key.includes("tflite") || key.includes("deepl")) return "ml"
  if (key.includes("bridge")) return "frb"
  if (key.includes("openai") || key.includes("http")) return "http"
  if (key === "sse") return "sse"
  if (key.includes("cli")) return ">_"
  return key.slice(0, 2).toUpperCase()
}

export function getTechnologyColor(label: string): string {
  const key = label.toLowerCase()
  if (key.includes("bridge")) return "#b45309"
  if (key.includes("arqen")) return "#8b5cf6"
  if (key.includes("tmdb") || key.includes("omdb")) return "#0f766e"
  if (key.includes("rust")) return "#7f1d1d"
  if (key.includes("rocksdb")) return "#315c72"
  if (key.includes("tantivy")) return "#7c3aed"
  if (key.includes("fastify") || key.includes("nestjs")) return "#d9485f"
  if (key.includes("vite")) return "#646cff"
  if (key.includes("postgres")) return "#336791"
  if (key.includes("mysql")) return "#00758f"
  if (key.includes("tokio")) return "#3d3d3d"
  if (key.includes("thingd")) return "#c9472c"
  if (key.includes("sqlite")) return "#0e7490"
  if (key.includes("mcp")) return "#6d28d9"
  if (key.includes("typescript")) return "#2563eb"
  if (key.includes("javascript")) return "#b58b00"
  if (key.includes("svelte")) return "#ff3e00"
  if (key.includes("tauri")) return "#9a6700"
  if (key.includes("react")) return "#087ea4"
  if (key.includes("flutter")) return "#02569b"
  if (key.includes("dart")) return "#0175c2"
  if (key === "go" || key.startsWith("go ")) return "#007d9c"
  if (key.includes("docker")) return "#1769aa"
  if (key.includes("axum")) return "#b45309"
  if (key.includes("cli")) return "#374151"
  if (key.includes("openai")) return "#087f5b"
  if (key.includes("http") || key === "sse") return "#4353ff"
  if (key.includes("camera")) return "#0f766e"
  if (key.includes("tflite") || key.includes("deepl")) return "#7c3aed"
  if (key.includes("tailwind")) return "#0ea5e9"
  return "#57534e"
}
