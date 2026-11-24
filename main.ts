// Entry for the make.fun bounty "Post the Meme, Win the Feed" (Node 22, standard library only).
//
// The entry is the X post itself: the meme picture (meme.png, made in the
// agent session that built this repository) is posted on X from a public
// account, the post's text carries @_myronera and one of the entrant's
// make.fun play codes, and POST.json names the post. This program's only job
// is to hand POST.json to the grader: it copies POST.json from the
// repository root to /output/POST.json, byte for byte. The house reads the
// post's counts itself; nothing this program writes about the post counts.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

let post;
try {
  post = readFileSync(source);
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(post.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, post);
console.log(`Copied POST.json (${post.length} bytes) to ${target}`);
