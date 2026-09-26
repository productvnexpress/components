#!/usr/bin/env node
/**
 * Builds the public shadcn registry from the per-component source files.
 *
 * Source of truth: <category>/<name>.json (registry-item.json, already
 * contains the full file contents) + <category>/<name>.tsx (main file,
 * kept alongside for readability/diffing).
 *
 * Output:
 *   - public/r/<name>.json   flat, ready to serve — consumers run
 *                            `npx shadcn add https://<host>/r/<name>.json`
 *   - registry.json          root manifest (metadata only, no file content)
 *                            for browsing and for `shadcn build` later on
 */
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "public", "r");
const SKIP_DIRS = new Set(["node_modules", ".git", "public", "scripts", ".claude"]);

mkdirSync(OUT_DIR, { recursive: true });

const categories = readdirSync(ROOT).filter((entry) => {
  if (SKIP_DIRS.has(entry) || entry.startsWith(".")) return false;
  return statSync(join(ROOT, entry)).isDirectory();
});

const items = [];
const errors = [];

for (const category of categories) {
  const dir = join(ROOT, category);
  const files = readdirSync(dir).filter((f) => f.endsWith(".json"));

  for (const file of files) {
    const fullPath = join(dir, file);
    let data;
    try {
      data = JSON.parse(readFileSync(fullPath, "utf8"));
    } catch (e) {
      errors.push(`${fullPath}: invalid JSON (${e.message})`);
      continue;
    }

    if (!data.name || !data.type || !Array.isArray(data.files)) {
      errors.push(`${fullPath}: missing name/type/files`);
      continue;
    }

    // Write the full item (with content) to the flat public output.
    writeFileSync(join(OUT_DIR, `${data.name}.json`), JSON.stringify(data, null, 2) + "\n");

    // Add a lightweight entry (no file content) to the root manifest.
    items.push({
      name: data.name,
      type: data.type,
      title: data.title,
      description: data.description,
      category,
      dependencies: data.dependencies,
      registryDependencies: data.registryDependencies,
      files: data.files.map((f) => ({ path: f.path, type: f.type })),
    });
  }
}

items.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "components",
  homepage: "",
  items,
};

writeFileSync(join(ROOT, "registry.json"), JSON.stringify(registry, null, 2) + "\n");

console.log(`Built ${items.length} components across ${categories.length} categories.`);
console.log(`  -> public/r/*.json (${items.length} files)`);
console.log(`  -> registry.json (manifest)`);

if (errors.length) {
  console.log(`\n${errors.length} problem(s):`);
  for (const e of errors) console.log(`  - ${e}`);
  process.exitCode = 1;
}
