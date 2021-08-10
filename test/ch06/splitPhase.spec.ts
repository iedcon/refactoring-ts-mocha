import { assert, expect } from 'chai';
import { priceOrder } from '../../src/ch06/splitPhase';

describe('split phase', function () {
  const product = {
    basePrice: 5000,
    discountThreshold: 5,
    discountRate: 0.1,
  };
  const shippingMethod = {
    discountThreshold: 50000,
    discountedFee: 1000,
    feePerCase: 2000,
  };
  it('base charge', function () {
    const price = priceOrder(product, 5, shippingMethod);
    expect(price).equal(35000);
  });
  it('discount product', function () {
    const price = priceOrder(product, 10, shippingMethod);
    expect(price).equal(67500);
  });
  it('discount shipping', function () {
    const expensiveProduct = {
      basePrice: 50000,
      discountThreshold: 5,
      discountRate: 0.1,
    };
    const price = priceOrder(expensiveProduct, 2, shippingMethod);
    expect(price).equal(102000);
  });
  it('discount all', function () {
    const price = priceOrder(product, 20, shippingMethod);
    expect(price).equal(112500);
  });
});
