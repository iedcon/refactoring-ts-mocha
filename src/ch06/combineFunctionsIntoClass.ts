type TReading = {
  customer: string;
  quantity: number;
  month: number;
  year: number;
};

export class Reading {
  private _customer: string;
  private _quantity: number;
  private _month: number;
  private _year: number;

  constructor(data: TReading) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  public get customer() {
    return this._customer;
  }
  public get quantity() {
    return this._quantity;
  }
  public get month() {
    return this._month;
  }
  public get year() {
    return this._year;
  }
  public get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  public get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

function baseRate(month: number, year: number) {
  return 0.5;
}

function taxThreshold(year: number) {
  return 4;
}
