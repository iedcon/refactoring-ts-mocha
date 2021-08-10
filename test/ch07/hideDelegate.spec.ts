import { expect } from 'chai';
import { Person, Department } from '../../src/ch07/hideDelegate';

describe('hide delegate', function () {
  it('get manager', function () {
    const person = new Person('leo', new Department('dev', 'paul'));
    expect(person.manager).to.eql('paul');
  });
});
