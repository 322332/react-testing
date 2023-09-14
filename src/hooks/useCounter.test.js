import { describe, it, expect } from "vitest";
import { setCounter } from "./useCounter";

describe("setCounter", () => {
  it("counter hook returns 1", () => {
    expect(setCounter(0)).toBe(1);
  });
});
