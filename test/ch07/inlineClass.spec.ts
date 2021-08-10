import { expect } from 'chai';
import { Shipment } from '../../src/ch07/inlineClass';

describe('inline class', function () {
  let shipment: Shipment;
  this.beforeAll(function () {
    shipment = new Shipment('company', 123);
  });
  it('get tracking info', function () {
    expect(shipment.trackingInfo).to.eql('company: 123');
  });
  it('set company name', function () {
    shipment.shippingCompany = 'new';
    expect(shipment.shippingCompany).to.eql('new');
  });
  it('set trackingNumber', function () {
    shipment.trackingNumber = 456;
    expect(shipment.trackingNumber).to.eql(456);
  });
});
