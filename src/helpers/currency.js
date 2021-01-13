export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const toActual = (number) =>
  number ? Number(number.replace(/[^0-9.-]+/g, "")) * 0.75 : 0;

export const currencyToNumber = (number) =>
  number ? Number(number.replace(/[^0-9.-]+/g, "")) : 0;
