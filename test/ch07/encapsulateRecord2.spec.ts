import { expect } from 'chai';
import { getCustomerData } from '../../src/ch07/encapsulateRecord2';

describe('encapsule nested', function () {
  const customerId = '1920';
  const year = '2016';
  const month = '2';
  it('compare', function () {
    const customers = getCustomerData();
    const later = customers.usage(customerId, year, month);
    const earlier = customers.usage(customerId, +year - 1 + '', month);
    expect(later - earlier).equal(-8);
  });
  it('change amount', function () {
    const customers = getCustomerData();
    customers.setUsage(customerId, year, month, 77);
    expect(customers.usage(customerId, year, month)).equal(77);
  });
});
