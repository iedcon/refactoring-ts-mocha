type Product = {
  basePrice: number;
  discountThreshold: number;
  discountRate: number;
};

type ShippingMethod = {
  discountThreshold: number;
  discountedFee: number;
  feePerCase: number;
};

type PriceData = {
  basePrice: number;
  quantity: number;
  discount: number;
};

export function priceOrder(
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod,
) {
  const priceData = caclulatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

function caclulatePricingData(product: Product, quantity: number) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return { basePrice, quantity, discount };
}

function applyShipping(priceData: PriceData, shippingMethod: ShippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}
