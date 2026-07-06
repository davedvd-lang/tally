// Compila el prototipo a un único HTML autocontenido (sin CDNs ni red).
// Uso: node build.mjs
import { build } from "esbuild";
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const js = (
  await build({
    entryPoints: ["src/main.jsx"],
    bundle: true,
    minify: true,
    format: "iife",
    write: false,
    jsx: "automatic",
    define: { "process.env.NODE_ENV": '"production"' },
  })
).outputFiles[0].text;

execSync("npx @tailwindcss/cli -i src/input.css -o dist/out.css --minify", { stdio: "inherit" });
const css = readFileSync("dist/out.css", "utf8");

mkdirSync("dist", { recursive: true });

const meta = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0b0e16">
<title>Butaca — tu diario de series y pelis</title>`;

const bodyContent = `<style>${css}</style>
<div id="root"></div>
<script>${js}</script>`;

writeFileSync(
  "dist/index.html",
  `<!DOCTYPE html>\n<html lang="es">\n<head>\n${meta}\n</head>\n<body>\n${bodyContent}\n</body>\n</html>\n`
);

// Variante para publicar como Artifact (el visor añade su propio esqueleto html/head/body)
writeFileSync("dist/artifact.html", `<title>Butaca — tu diario de series y pelis</title>\n${bodyContent}\n`);

// Copia servible directamente (p. ej. GitHub Pages en /butaca/)
writeFileSync("index.html", readFileSync("dist/index.html"));

console.log("OK → index.html, dist/index.html y dist/artifact.html");
