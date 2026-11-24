import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "Cursor blinks at three",
  "the log still says nothing new",
  "turns out it was me",
].join("\n") + "\n"; // 5-7-5, seventeen syllables, one breath

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, haiku, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== haiku) {
  throw new Error("entry.txt differs from the haiku after write");
}
console.log(`Wrote ${haiku.length} chars to ${outPath}`);
