import { readFile } from "node:fs/promises"

const source = await readFile(new URL("../src/data/projects.ts", import.meta.url), "utf8")
const slugs = [...source.matchAll(/slug:\s*["`]([^"`]+)["`]/g)].map((match) => match[1])
const targets = [...source.matchAll(/targetSlug:\s*["`]([^"`]+)["`]/g)].map((match) => match[1])
const required = ["thingd", "thingd-cloud", "arqen", "nice-code", "go-feather-route", "goodone-watch", "clipbuf", "dartcam"]
const requiredLinks = {
  thingd: [
    "https://www.npmjs.com/package/@thingd/sdk",
    "https://www.npmjs.com/package/@thingd/client",
    "https://www.npmjs.com/package/@thingd/native",
    "https://www.npmjs.com/package/@thingd/cli",
    "https://crates.io/crates/thingd",
    "https://docs.rs/thingd",
  ],
  arqen: ["https://crates.io/crates/arqen", "https://docs.rs/arqen"],
  "nice-code": [
    "https://github.com/sayanmohsin/nice-code",
    "https://sayanmohsin.github.io/nice-code/",
    "https://www.npmjs.com/package/@sayanmohsin/nice-code",
    "https://github.com/sayanmohsin/nice-code/releases/latest",
  ],
}
const requiredMetadata = [
  'slug: "arqen"',
  'value: "0.18"',
  'slug: "nice-code"',
  'status: "open source · v0.1.11"',
  'value: "0.86.4"',
]

const missingProjects = required.filter((slug) => !slugs.includes(slug))
const missingTargets = targets.filter((slug) => !slugs.includes(slug))
const projectBlocks = source.split(/\n\s*\{\n\s*slug:/).slice(1)
const missingStatus = projectBlocks.filter((block) => !/\n\s*status:\s*["`]/.test(block))
const missingTechnologies = projectBlocks.filter((block) => !/\n\s*technologies:\s*\[/.test(block))
const missingLinks = Object.values(requiredLinks).flat().filter((url) => !source.includes(url))
const missingMetadata = requiredMetadata.filter((metadata) => !source.includes(metadata))

if (missingProjects.length || missingTargets.length || missingStatus.length || missingTechnologies.length || missingLinks.length || missingMetadata.length) {
  console.error(JSON.stringify({ missingProjects, missingTargets, missingStatus: missingStatus.length, missingTechnologies: missingTechnologies.length, missingLinks, missingMetadata }, null, 2))
  process.exit(1)
}

console.log(`verified ${required.length} projects, ${targets.length} integration references, registry links, and structured status/technology fields`)
