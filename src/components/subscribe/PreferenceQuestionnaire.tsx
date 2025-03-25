import { useEffect, useRef, useState } from "react";
import { preferenceMenu } from "../../utils/constants";
import Accordion from "./Accordion";

export default function PreferenceQuestionnaire({
  onOptionClick,
  selectedOptions,
}) {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
  const accordionRefs = useRef([]);

  const isCapsule = selectedOptions?.[0]?.optionName === "Capsule";

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToAccordion = (index) => {
    accordionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:gap-32 lg:px-16">
      {isLgScreen && (
        <div className="flex flex-col gap-6 min-w-fit sticky top-8 h-fit">
          {preferenceMenu.map((preference, index) => (
            <div
              className="font-heading text-neutral-500 text-h4 hover:text-neutral-900 not-last:border-b-1 not-last:border-neutral-500 pr-8 pb-4 cursor-pointer"
              onClick={() => scrollToAccordion(index)}
            >
              {preference.type}
            </div>
          ))}
        </div>
      )}
      <div className="lg:w-full lg:flex lg:flex-col lg:gap-12">
        {preferenceMenu.map((preference, index) => {
          return (
            <Accordion
              key={index}
              preference={preference}
              onOptionClick={onOptionClick}
              selectedMenuIndex={index}
              selectedOptionIndex={selectedOptions[index]?.optionIndex ?? null}
              ref={(ele) => (accordionRefs.current[index] = ele)}
              isCapsuleSelected={isCapsule}
            />
          );
        })}
      </div>
    </section>
  );
}
