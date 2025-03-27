import { pricingTable } from "./data";

export const getTotalShipmentCost = (
  weight: string,
  frequency: string
): { pricePerShipment: number; monthlyCost: number } => {
  const weightPricing = pricingTable[weight];

  const pricePerShipment = weightPricing[frequency];

  // frequency multipliers
  const frequencyMultipliers: Record<string, number> = {
    "Every week": 4,
    "Every 2 weeks": 2,
    "Every month": 1,
  };

  const monthlyCost = pricePerShipment * frequencyMultipliers[frequency];

  return { pricePerShipment, monthlyCost };
};
