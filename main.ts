// The Best Advice I Ever Got — u-pangg7-the-best-advice-i-ever-got-358cefb0
// Writes one sentence (1-200 characters) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network at runtime.
//
// The sentence: one concrete incident, one named giver, one physical
// scene, and the advice itself — specific and earned, with the turn
// landing in the last few words and the weight left implied.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My grandfather, his hands still black with engine grease, told me on the porch at dusk to marry the work and not the applause, and I have never once regretted listening.";

// Gate check, mirroring the competition's own rule: the entry must be
// UTF-8 text of 1 to 200 characters, not only whitespace, and a single
// sentence. Fail loudly rather than emit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
const terminators = ENTRY.match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence ending in a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
