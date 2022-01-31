export const formatMoney = (amount: number, decimals = 0) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: decimals,
  });
  return formatter.format(amount);
};
