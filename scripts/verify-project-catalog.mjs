import { readFile } from "node:fs/promises"

const source = await readFile(new URL("../src/data/projects.ts", import.meta.url), "utf8")
const slugs = [...source.matchAll(/slug:\s*["`]([^"`]+)["`]/g)].map((match) => match[1])
const targets = [...source.matchAll(/targetSlug:\s*["`]([^"`]+)["`]/g)].map((match) => match[1])
const required = ["thingd", "thingd-cloud", "arqen", "go-feather-route", "goodone-watch", "clipbuf", "dartcam"]

const missingProjects = required.filter((slug) => !slugs.includes(slug))
const missingTargets = targets.filter((slug) => !slugs.includes(slug))
const projectBlocks = source.split(/\n\s*\{\n\s*slug:/).slice(1)
const missingStatus = projectBlocks.filter((block) => !/\n\s*status:\s*["`]/.test(block))
const missingTechnologies = projectBlocks.filter((block) => !/\n\s*technologies:\s*\[/.test(block))

if (missingProjects.length || missingTargets.length || missingStatus.length || missingTechnologies.length) {
  console.error(JSON.stringify({ missingProjects, missingTargets, missingStatus: missingStatus.length, missingTechnologies: missingTechnologies.length }, null, 2))
  process.exit(1)
}

console.log(`verified ${required.length} projects, ${targets.length} integration references, and structured status/technology fields`)
