export class Person {
  private _telephoneNumber: TelephoneNumber;
  constructor(
    private _name: string,
    officeAreaCode: string,
    officeNumber: string,
  ) {
    this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
  }

  public get name(): string {
    return this._name;
  }
  public set name(arg: string) {
    this._name = arg;
  }
  public get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  public get officeAreaCode(): string {
    return this._telephoneNumber.areaCode;
  }
  public set officeAreaCode(arg: string) {
    this._telephoneNumber.areaCode = arg;
  }
  public get officeNumber(): string {
    return this._telephoneNumber.number;
  }
  public set officeNumber(arg: string) {
    this._telephoneNumber.number = arg;
  }
}

class TelephoneNumber {
  constructor(private _areaCode: string, private _number: string) {}

  public get areaCode(): string {
    return this._areaCode;
  }
  public set areaCode(arg: string) {
    this._areaCode = arg;
  }
  public get number(): string {
    return this._number;
  }
  public set number(arg: string) {
    this._number = arg;
  }
  public toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}
