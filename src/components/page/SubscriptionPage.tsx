import { useState } from "react";
import { useLocation } from "react-router";
import Steps from "../shared/Steps";
import Hero from "../subscribe/Hero";
import PreferenceQuestionnaire from "../subscribe/PreferenceQuestionnaire";
import OrderSummary from "../subscribe/OrderSummary";

interface OptionSelection {
  optionIndex: number;
  optionName: string;
}

export default function SubscriptionPage() {
  const location = useLocation();
  const isDarkTheme = location.pathname === "/subscribe";

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (
    menuIndex: number,
    optionIndex: number,
    optionName: string
  ) => {
    setSelectedOptions((prev: Record<number, OptionSelection>) => ({
      ...prev,
      [menuIndex]: { optionIndex, optionName },
    }));
  };

  return (
    <main className="py-10 flex flex-col gap-24">
      <Hero />
      <Steps isDarkTheme={isDarkTheme} />
      <PreferenceQuestionnaire
        onOptionClick={handleOptionClick}
        selectedOptions={selectedOptions}
      />
      <OrderSummary selectedPreferences={selectedOptions} />
    </main>
  );
}
