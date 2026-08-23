import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());

test("source contains the CI/CD demo content", async () => {
  const html = await readFile(resolve(root, "src/index.html"), "utf8");
  assert.match(html, /Continuous Delivery fail/);
  assert.match(html, /Continuous Integration/);
});

test("build output exists after build", async () => {
  await access(resolve(root, "dist/index.html"));
  const html = await readFile(resolve(root, "dist/index.html"), "utf8");
  assert.match(html, /__BUILD_TIME__/);
});
