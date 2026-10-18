// Prueba offline del plugin: valida el manifiesto y repite las respuestas reales grabadas
// en test/fixtures.json (sin internet). La grabación se limpió de tokens e IP antes de guardarse.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { validate } from "../sdk/validate.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const replay = join(root, "test", "fixtures.json");
const manifest = JSON.parse(readFileSync(join(root, "kino-plugin.json"), "utf8"));

test("Kino would accept the manifest", async () => {
  const r = await validate(root);
  assert.deepEqual(r.problems, []);
  assert.equal(manifest.entry, "plugin.js");
  assert.equal(manifest.icon, "icon.png");
  assert.ok(!manifest.entry.startsWith("./"));
  assert.ok(!manifest.icon.startsWith("./"));
  assert.ok(manifest.capabilities.includes("resolve"));
  assert.ok(manifest.capabilities.includes("download"));
  assert.equal(manifest.apiVersion, 4);
});

test("search finds Nickelodeon titles offline, with accents ignored", async () => {
  const r = await validate(root, { run: "search", args: ["bob esponja"] });
  assert.deepEqual(r.problems, []);
  assert.ok(r.output.items.some((i) => i.title === "Bob Esponja"));
  const sinTilde = await validate(root, { run: "search", args: ["padrinos magicos"] });
  assert.deepEqual(sinTilde.problems, []);
  assert.ok(sinTilde.output.items.some((i) => /Padrinos/.test(i.title)));
  const vacio = await validate(root, { run: "search", args: ["zzzz"] });
  assert.deepEqual(vacio.problems, []);
  assert.equal(vacio.output.items.length, 0);
});

test("home rows carry a genre, a ref and playable items", async () => {
  const r = await validate(root, { run: "home", args: [] });
  assert.deepEqual(r.problems, []);
  assert.ok(r.output.length >= 6);
  for (const row of r.output) {
    assert.ok(row.ref, row.id);
    assert.ok(row.title);
    assert.ok(row.items.length > 0, row.id);
    for (const it of row.items) assert.match(it.ref, /^(s|e):/);
  }
});

test("browse pages a Home row", async () => {
  const r = await validate(root, { run: "browse", args: ["row:series", null] });
  assert.deepEqual(r.problems, []);
  assert.equal(r.output.items.length, 30);
  assert.equal(r.output.next, "30");
  const next = await validate(root, { run: "browse", args: ["row:series", "30"] });
  assert.deepEqual(next.problems, []);
  assert.ok(next.output.items.length > 0);
  const malo = await validate(root, { run: "browse", args: ["row:nada", null] });
  assert.ok(malo.problems.length > 0);
});

test("episodes lists real chapters from the recorded answer", async () => {
  const r = await validate(root, { run: "episodes", args: ["s:icarly-lt"], replay });
  assert.deepEqual(r.problems, []);
  assert.equal(r.output.series.title, "iCarly");
  assert.ok(r.output.episodes.length >= 10);
  for (const ep of r.output.episodes) {
    assert.match(ep.ref, /^e:/);
    assert.ok(ep.number >= 1);
    assert.ok(ep.season >= 1);
  }
});

test("resolve returns the signed HLS url and its header", async () => {
  const r = await validate(root, { run: "resolve", args: ["e:67cf35491b63ec7ef4b06164"], replay });
  assert.deepEqual(r.problems, []);
  assert.match(r.output.url, /^https:\/\/ipv4\.pluto\.tv\/api\/tn\/video\/playout\/v2\/stitch\/hls\/episode\/67cf35491b63ec7ef4b06164\/master\.m3u8\?/);
  assert.match(r.output.headers.Authorization, /^Bearer /);
  assert.equal(r.output.mime, "application/x-mpegURL");
});
