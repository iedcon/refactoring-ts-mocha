import { expect } from 'chai';
import { Person } from '../../src/ch07/extractClass';

describe('extract class', function () {
  let person: Person;
  this.beforeAll(function () {
    person = new Person('leo', '031', '123-4567');
  });
  it('telephone number correct', function () {
    expect(person.telephoneNumber).to.eql('(031) 123-4567');
  });
  it('set name correct', function () {
    const name = person.name;
    person.name = 'change';
    expect(person.name).to.not.eql(name);
    expect(person.name).to.eql('change');
  });
  it('set officeAreaCode correct', function () {
    const officeAreaCode = person.officeAreaCode;
    person.officeAreaCode = '02';
    expect(person.officeAreaCode).to.not.eql(officeAreaCode);
    expect(person.telephoneNumber).to.eql('(02) 123-4567');
  });
  it('set officeNumber correct', function () {
    const officeNumber = person.officeNumber;
    person.officeNumber = '321-7654';
    expect(person.officeNumber).to.not.eql(officeNumber);
    expect(person.telephoneNumber).to.eql('(02) 321-7654');
  });
});
