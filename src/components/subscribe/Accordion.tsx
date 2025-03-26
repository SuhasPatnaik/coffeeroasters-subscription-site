import { useEffect, useState } from "react";
import ExpandingBorderButton from "./ExpandingBorderButton";

interface Option {
  name: string;
  description: string;
}

interface Preference {
  type: string;
  question: string;
  options: Option[];
}

interface AccordionProps {
  preference: Preference;
  onOptionClick: (
    menuIndex: number,
    optionIndex: number,
    optionName: string
  ) => void;
  selectedMenuIndex: number;
  selectedOptionIndex: number;
  isCapsuleSelected: boolean;
  ref?: React.Ref<HTMLHeadingElement>;
}

export default function Accordion({
  preference,
  onOptionClick,
  selectedMenuIndex,
  selectedOptionIndex,
  isCapsuleSelected,
  ref,
}: AccordionProps) {
  const [expandAccordion, setExpandAccordion] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isCapsuleSelected && preference.type === "Grind Option") {
      setExpandAccordion(false);
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isCapsuleSelected, preference.type]);

  const handleQuestionClick = () => {
    if (isDisabled) return;
    setExpandAccordion((prev) => !prev);
  };

  return (
    <>
      <ExpandingBorderButton onClick={handleQuestionClick}>
        <h1
          className={`font-heading text-h4 text-neutral-500 w-56 text-left lg:w-full lg:text-h3 ${
            isDisabled && "opacity-50"
          }`}
          ref={ref}
        >
          {preference.question}
        </h1>
        <div>
          <img
            src="/images/plan/desktop/icon-arrow.svg"
            alt="Arrow indicating if the accordion is open or close"
            className={`transition-transform ${
              expandAccordion ? "rotate-180" : ""
            }
            ${isDisabled && "opacity-50"}
            `}
          />
        </div>
      </ExpandingBorderButton>
      {expandAccordion && (
        <div className="lg:flex lg:gap-8">
          {preference.options.map((option, index) => {
            return (
              <button
                key={index}
                className={`rounded-md py-8 px-6 flex flex-col gap-2 text-left cursor-pointer lg:w-1/3 ${
                  selectedOptionIndex === index
                    ? "bg-primary-accent text-neutral-200"
                    : "bg-gray-200 hover:bg-secondary-accent text-neutral-900"
                }`}
                onClick={() =>
                  onOptionClick(selectedMenuIndex, index, option.name)
                }
              >
                <h2 className="font-heading text-h4">{option.name}</h2>
                <p>{option.description}</p>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
