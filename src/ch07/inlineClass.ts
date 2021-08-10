// export class TrackingInformation {
//   constructor(
//     private _shippingCompany: string,
//     private _trackingNumber: number,
//   ) {}

//   public get shippingCompany(): string {
//     return this._shippingCompany;
//   }
//   public set shippingCompany(arg: string) {
//     this._shippingCompany = arg;
//   }
//   public get trackingNumber(): number {
//     return this._trackingNumber;
//   }
//   public set trackingNumber(arg: number) {
//     this._trackingNumber = arg;
//   }
//   public get display() {
//     return `${this.shippingCompany}: ${this.trackingNumber}`;
//   }
// }

export class Shipment {
  constructor(
    private _shippingCompany: string,
    private _trackingNumber: number,
  ) {}
  public get shippingCompany() {
    return this._shippingCompany;
  }
  public set shippingCompany(arg: string) {
    this._shippingCompany = arg;
  }
  public get trackingNumber() {
    return this._trackingNumber;
  }
  public set trackingNumber(arg: number) {
    this._trackingNumber = arg;
  }
  public get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}
