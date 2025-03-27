import { pricingTable } from "./data";

export const getTotalShipmentCost = (weight: string, frequency: string) => {
  const weightPricing = pricingTable[weight];

  if (!weightPricing) return "Invalid weight selection";
  if (!weightPricing[frequency]) return "Invalid frequency selection";

  const pricePerShipment = weightPricing[frequency];

  // frequency multipliers
  const frequencyMultipliers: Record<string, number> = {
    "Every week": 4,
    "Every 2 weeks": 2,
    "Every month": 1,
  };

  const monthlyCost = pricePerShipment * frequencyMultipliers[frequency];

  return monthlyCost;
};
