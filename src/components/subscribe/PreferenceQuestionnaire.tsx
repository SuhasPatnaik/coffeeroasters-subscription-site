import { preferenceMenu } from "../../utils/constants";
import Accordion from "./Accordion";

export default function PreferenceQuestionnaire() {
  return (
    <div className="flex flex-col gap-8">
      {preferenceMenu.map((preference, index) => {
        return (
          <div key={index} className="flex flex-col gap-6">
            <Accordion preference={preference} />
          </div>
        );
      })}
    </div>
  );
}
