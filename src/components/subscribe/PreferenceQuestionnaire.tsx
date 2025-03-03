import { preferenceMenu } from "../../utils/constants";
import Accordion from "./Accordion";

export default function PreferenceQuestionnaire() {
  return (
    <div>
      {preferenceMenu.map((preference, index) => {
        return (
          <div key={index}>
            <Accordion preference={preference} />
          </div>
        );
      })}
    </div>
  );
}
