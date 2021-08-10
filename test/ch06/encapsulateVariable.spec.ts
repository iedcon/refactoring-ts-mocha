import { assert, expect } from 'chai';
import { defaultOwner, setDefaultOwner } from '../../src/ch06/encapsulateVariable';

describe('defaultOwner', function () {
  type Spaceship = {
    owner: { firstName: string; lastName: string };
  };
  let owner: { firstName: string; lastName: string };
  this.beforeAll(function () {
    owner = defaultOwner();
  });
  it('change default owner', function () {
    setDefaultOwner({ firstName: 'Leveca', lastName: 'Parsons' });
    const newDefaultOwner = defaultOwner();
    expect(newDefaultOwner.firstName).equal('Leveca');
    expect(newDefaultOwner.lastName).equal('Parsons');
  });
  it('set spaceship default owner', function () {
    const spaceship = {} as Spaceship;
    spaceship.owner = owner;
    expect(spaceship.owner.firstName).equal('Martin');
    expect(spaceship.owner.lastName).equal('Fowler');
  });
  // Person 클래스를 활용하는 방법에서는 아예 재할당이 불가능
  //   it("can not be changed outside the code", () => {
  //     let defaultUser = defaultOwner();
  //     defaultUser.lastName = "new last name";
  //     assert.notEqual(defaultOwner().lastName, defaultUser.lastName);
  //   });
});
