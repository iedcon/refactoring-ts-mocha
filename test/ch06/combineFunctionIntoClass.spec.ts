import { assert, expect } from 'chai';
import { Reading } from '../../src/ch06/combineFunctionsIntoClass';

describe('charge', function () {
  const acquireReading = () => {
    return {
      customer: 'ivan',
      quantity: 10,
      month: 5,
      year: 2017,
    };
  };
  it('base charge', function () {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const baseCharge = aReading.baseCharge;
    expect(baseCharge).equal(5);
  });
  it('taxable charge', function () {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const taxableCharge = aReading.taxableCharge;
    expect(taxableCharge).equal(1);
  });
  it('base charge w function', function () {
    const rawReading = acquireReading();
    const aReading = new Reading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
    expect(basicChargeAmount).equal(5);
  });
});
