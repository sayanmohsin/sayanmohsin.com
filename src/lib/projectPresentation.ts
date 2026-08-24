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
  if (key.includes("cli")) return ">_"
  return key.slice(0, 2).toUpperCase()
}
