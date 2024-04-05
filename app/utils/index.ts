import { PriceType } from 'types/appTypes';

// In this function we are adding random number between 10 and 30 and returning new price and percentage
// returning new price, old price, currency and percentage
export const getMockedOldPriceAndPercentage = (
  price: PriceType
): {
  newPrice: string;
  oldPrice: string;
  currency: string;
  percentage: number;
} => {
  const newPrice = parseFloat(price.amount);
  const addedAmount = Math.floor(Math.random() * 21) + 10;
  const oldPrice = newPrice + addedAmount;
  const currency = price.currency;
  const percentage = Math.floor(((oldPrice - newPrice) / oldPrice) * 100);
  return {
    newPrice: `${newPrice.toFixed(2)}`,
    oldPrice: `${oldPrice.toFixed(2)}`,
    currency,
    percentage,
  };
};
