import { expect } from 'chai';
import { getOrganization } from '../../src/ch07/encapsulateRecord';

describe('encapsule recort', function () {
  let organization: { name: string; country: string };
  this.beforeEach(function () {
    organization = getOrganization();
  });
  it('h1 with name', function () {
    let result = '';
    result += `<h1>${organization.name}</h1>`;
    expect(result).equal('<h1>애크미 구스베리</h1>');
  });
  it('set new name', function () {
    const newName = 'leo';
    organization.name = newName;
    expect(organization.name).equal(newName);
  });
});
