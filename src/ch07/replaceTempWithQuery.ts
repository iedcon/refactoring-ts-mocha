export class Order {
  private _quantity: number;
  private _item: { price: number };
  constructor(quantity: number, item: { price: number }) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  private get discountFactor() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }

  private get basePrice() {
    return this._quantity * this._item.price;
  }
}
