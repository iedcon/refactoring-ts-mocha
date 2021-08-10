import { expect } from 'chai';
import { Order } from '../../src/ch07/replaceTempWithQuery';

describe('replace temp with query', function () {
  it('discount baseprice lte 1000', function () {
    const order = new Order(10, { price: 100 });
    const price = order.price;
    expect(price).to.eql(980);
  });
  it('discount baseprice gt 1000', function () {
    const order = new Order(20, { price: 100 });
    const price = order.price;
    expect(price).to.eql(1900);
  });
});
