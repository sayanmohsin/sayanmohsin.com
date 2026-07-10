export interface VersionManifest {
  latest: string
  versions: VersionEntry[]
}

export interface VersionEntry {
  version: string
  date: string
  notes: string
  files: Record<string, { url: string }>
}

export type PlatformKey = "macos-arm" | "macos-intel" | "windows" | "linux"

export interface PlatformDef {
  key: PlatformKey
  label: string
  short: string
}

export const MANIFEST_URL = "https://storage.googleapis.com/clipstash-releases/versions.json"

export const PLATFORMS: PlatformDef[] = [
  { key: "macos-arm", label: "macOS (Apple Silicon)", short: "mac-arm" },
  { key: "macos-intel", label: "macOS (Intel)", short: "mac-intel" },
  { key: "windows", label: "Windows", short: "win" },
  { key: "linux", label: "Linux", short: "linux" },
]

export async function fetchManifest(): Promise<VersionManifest> {
  const res = await fetch(MANIFEST_URL)
  if (!res.ok) throw new Error(`Failed: ${res.status}`)
  return res.json()
}
