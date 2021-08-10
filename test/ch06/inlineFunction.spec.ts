import { assert, expect } from "chai";
import { rating, reportLines } from "../../src/ch06/inlineFunction";

describe("rating", function () {
  it("more than five", function () {
    const driver = {
      numberOfLateDeliveries: 6,
    };
    const score = rating(driver);
    expect(score).equal(2);
  });
  it("less or equal than five", function () {
    const driver = {
      numberOfLateDeliveries: 5,
    };
    const score = rating(driver);
    expect(score).equal(1);
  });
});

describe("reportLines", function () {
  it("reporting", function () {
    const customer = {
      name: "leo",
      location: "korea",
    };
    const lines = reportLines(customer);
    const expectResult = [
      ["name", "leo"],
      ["location", "korea"],
    ];

    let equal = 1;
    for (const [index, line] of lines.entries()) {
      for (const [idx, l] of line.entries()) {
        equal *= +(l === expectResult[index][idx]);
      }
    }
    expect(equal).equal(1);
  });
});
