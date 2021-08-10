let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

export function defaultOwner() {
  // Like Object.assign({}, defaultOwnerData)
  //   return { ...defaultOwnerData };
  return new Person(defaultOwnerData);
}
export function setDefaultOwner(arg: { firstName: string; lastName: string }) {
  defaultOwnerData = arg;
}

class Person {
  private _lastName: string;
  private _firstName: string;
  constructor(data: { firstName: string; lastName: string }) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
