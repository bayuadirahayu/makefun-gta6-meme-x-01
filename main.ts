// main.ts — gta6-meme-x-01 entry program.
// Copies POST.json from this repository into the output directory.
// That is all the program does: the house reads the X post itself.
// Deterministic: same input bytes in, same output bytes out, every run.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// POST.json holds the X post address; the meme PNG itself is posted on X.
copyFileSync(join(here, 'POST.json'), join(outDir, 'POST.json'));
