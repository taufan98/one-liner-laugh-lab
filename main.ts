// One-Liner Laugh Lab — writes a single original one-liner to /output/entry.txt.
// The prompt: the excuse a robot vacuum gives after eating a sock.
// The joke: the vacuum pleads its case like a cop booking a suspect — the sock
// was loitering, resisted arrest, and is doing life in the dustbin.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The sock was loitering, resisted arrest, and is now serving life in my dustbin.";

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
if (LINE.trim().length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
