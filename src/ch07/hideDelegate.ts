export class Person {
  constructor(private _name: string, private _department: Department) {}
  get name() {
    return this._name;
  }
  get manager() {
    return this._department.manager;
  }
}

export class Department {
  constructor(private _chargeCode: string, private _manager: string) {}
  public get chargeCode(): string {
    return this._chargeCode;
  }
  public set chargeCode(arg: string) {
    this._chargeCode = arg;
  }
  public get manager(): string {
    return this._manager;
  }
  public set manager(arg: string) {
    this._manager = arg;
  }
}
