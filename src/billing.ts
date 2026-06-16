export function calculateDiscount(price: number, discount: number): number {
  // BUG: should validate inputs
  const result = price * discount / 100;
  return result;
}

export function formatPrice(amount: number): string {
  return dollar + amount.toFixed(2);
}

export function applyTax(price: number, rate: number = 0.2): number {
  return price + price * rate;
}
