import { preferenceMenu } from "../../utils/constants";
import Accordion from "./Accordion";

export default function PreferenceQuestionnaire({
  onOptionClick,
  selectedOptions,
}) {
  return (
    <div className="flex flex-col gap-8">
      {preferenceMenu.map((preference, index) => {
        return (
          <Accordion
            key={index}
            preference={preference}
            onOptionClick={onOptionClick}
            selectedMenuIndex={index}
            selectedOptionIndex={selectedOptions[index] ?? null}
          />
        );
      })}
    </div>
  );
}
