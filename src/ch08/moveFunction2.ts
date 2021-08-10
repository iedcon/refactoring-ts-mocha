export class Account {
  constructor(private _daysOverDrawn: number, private _type: AccountType) {}

  get type() {
    return this._type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverDrawn > 0)
      result += this.type.overdraftCharge(this.daysOverDrawn);
    return result;
  }

  get daysOverDrawn() {
    return this._daysOverDrawn;
  }
}

export class AccountType {
  constructor(private _isPremium: boolean) {}

  get isPremium() {
    return this._isPremium;
  }

  overdraftCharge(daysOverDrawn: number) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverDrawn <= 7) return baseCharge;
      else return baseCharge + (daysOverDrawn - 7) * 0.85;
    } else return daysOverDrawn * 1.75;
  }
}
