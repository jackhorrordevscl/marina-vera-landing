import { describe, expect, it } from "vitest";
import { publicSite } from "../src/config/publicSite";

describe("public site configuration", () => {
  it("does not configure an appointment data-collection channel", () => {
    expect(publicSite.external).not.toHaveProperty("appointment");
  });

  it("keeps navigation limited to local page fragments", () => {
    expect(publicSite.navigation.map((item) => item.href)).toEqual([
      "#inicio",
      "#acompanamiento",
      "#modalidades",
      "#sobre-mi",
      "#contacto",
    ]);
  });
});
