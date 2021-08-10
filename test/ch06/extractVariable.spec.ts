import { assert, expect } from "chai";
import { OrderClass, price } from "../../src/ch06/extractVariable";

describe("price", function () {
  it("quantity over 500", function () {
    const order = {
      quantity: 1000,
      itemPrice: 500,
    };
    const result = price(order);
    expect(result).equal(487600);
  });
});

describe("price in order class", function () {
  it("quantity over 500", function () {
    const order = new OrderClass({
      quantity: 1000,
      itemPrice: 500,
    });
    const result = order.price;
    expect(result).equal(487600);
  });
});
