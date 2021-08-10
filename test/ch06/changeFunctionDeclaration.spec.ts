import { assert, expect } from "chai";
import { extractNewEnglanders } from "../../src/ch06/changeFunctionDeclaration";

describe("newEnglanders", function () {
  it("include newEnglanders", function () {
    const customers = [
      { address: { state: "MA" } },
      { address: { state: "CT" } },
      { address: { state: "NY" } },
      { address: { state: "CA" } },
    ];
    const result = extractNewEnglanders(customers);
    expect(result.length).equal(2);
  });
});
