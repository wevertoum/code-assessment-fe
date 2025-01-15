import { capitalize } from "./helpers";
import { it, expect } from "vitest";

it("should return a capitalized string", () => {
  expect(capitalize("weverton")).toBe("Weverton");
});
