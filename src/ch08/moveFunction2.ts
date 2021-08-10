export class Account {
  constructor(private _daysOverDrawn: number, private _type: AccountType) {}

  get type() {
    return this._type;
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverDrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get daysOverDrawn() {
    return this._daysOverDrawn;
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverDrawn <= 7) return baseCharge;
      else return baseCharge + (this.daysOverDrawn - 7) * 0.85;
    } else return this.daysOverDrawn * 1.75;
  }
}

export class AccountType {
  constructor(private _isPremium: boolean) {}

  get isPremium() {
    return this._isPremium;
  }
}
