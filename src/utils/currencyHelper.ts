export function formatCurrency(currency: string, amount: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    minimumFractionDigits: 2,
    currency,
  }).format(amount);
}
