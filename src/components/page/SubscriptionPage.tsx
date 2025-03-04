import { useLocation } from "react-router";
import Steps from "../shared/Steps";
import Hero from "../subscribe/Hero";
import PreferenceQuestionnaire from "../subscribe/PreferenceQuestionnaire";
import OrderSummary from "../subscribe/OrderSummary";
import { useState } from "react";

export default function SubscriptionPage() {
  const location = useLocation();
  const isDarkTheme = location.pathname === "/subscribe";

  const [selectedPreference, setSelectedPreference] = useState(null);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (menuIndex, optionIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [menuIndex]: optionIndex,
    }));
  };

  return (
    <div className="py-10 flex flex-col gap-24">
      <Hero />
      <Steps isDarkTheme={isDarkTheme} />
      <PreferenceQuestionnaire
        onOptionClick={handleOptionClick}
        selectedMenuIndex={selectedMenuIndex}
        selectedOptions={selectedOptions}
      />
      <OrderSummary />
    </div>
  );
}
