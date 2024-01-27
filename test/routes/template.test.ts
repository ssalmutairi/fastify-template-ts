import { test } from "node:test";
import * as assert from "node:assert";
import { build } from "../helper";

test("template is loaded", async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: "/template",
  });

  assert.equal(res.payload, "this is a template");
});
