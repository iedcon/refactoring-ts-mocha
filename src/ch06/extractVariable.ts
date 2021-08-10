type Order = {
  quantity: number;
  itemPrice: number;
};

function price(order: Order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}

class OrderClass {
  private quantity: number;
  private itemPrice: number;
  constructor(aRecord: Order) {
    this.quantity = aRecord.quantity;
    this.itemPrice = aRecord.itemPrice;
  }

  public get basePrice() {
    return this.quantity * this.itemPrice;
  }

  public get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  public get shipping() {
    return Math.min(this.basePrice * 0.1, 100);
  }

  public get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
}

export { price, OrderClass };
