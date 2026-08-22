import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd());
const src = resolve(root, 'src');
const dist = resolve(root, 'dist');

await mkdir(dist, { recursive: true });
await cp(src, dist, { recursive: true });

const indexPath = resolve(dist, 'index.html');
let html = await readFile(indexPath, 'utf8');
const buildTime = new Date().toISOString();
html = html.replace('</head>', `<script>window.__BUILD_TIME__=${JSON.stringify(buildTime)}</script></head>`);
await writeFile(indexPath, html);

console.log(`Built ${dist} at ${buildTime}`);
