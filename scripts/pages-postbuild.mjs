import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const src = [
  "dist/client",
  ".output/public",
  "dist",
].find(
  (dir) =>
    existsSync(join(dir, "_shell.html")) || existsSync(join(dir, "index.html")),
);

if (!src) {
  console.error("[pages] no _shell.html / index.html found");
  process.exit(1);
}

const tmp = join(".grok", "pages-out");
rmSync(tmp, { recursive: true, force: true });
copyDir(src, tmp);

const shell = existsSync(join(tmp, "index.html"))
  ? join(tmp, "index.html")
  : join(tmp, "_shell.html");

const html = readFileSync(shell).filter((byte) => byte !== 0);
writeFileSync(join(tmp, "index.html"), html);
writeFileSync(join(tmp, "404.html"), html);
writeFileSync(join(tmp, ".nojekyll"), "");

rmSync("dist", { recursive: true, force: true });
renameSync(tmp, "dist");
console.log(`[pages] ready at dist/ from ${src}/`);

function copyDir(from, to) {
  mkdirSync(to, { recursive: true });
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    if (entry.name === "server") continue;
    const a = join(from, entry.name);
    const b = join(to, entry.name);
    if (entry.isDirectory()) copyDir(a, b);
    else copyFileSync(a, b);
  }
}
