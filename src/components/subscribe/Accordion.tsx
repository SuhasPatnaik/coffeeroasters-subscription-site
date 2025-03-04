import { useState } from "react";

export default function Accordion({
  preference,
  onOptionClick,
  selectedMenuIndex,
  selectedOptionIndex,
}) {
  const [expandAccordion, setExpandAccordion] = useState(false);

  const handleQuestionClick = () => {
    setExpandAccordion((prev) => !prev);
  };

  return (
    <>
      <button
        className="flex justify-between w-full cursor-pointer items-center"
        onClick={handleQuestionClick}
      >
        <h1 className="font-heading text-h4 text-neutral-500 w-56 text-left">
          {preference.question}
        </h1>
        <div>
          <img
            src="/images/plan/desktop/icon-arrow.svg"
            alt="Arrow indicating if the accordion is open or close"
            className={`transition-transform ${
              expandAccordion ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {expandAccordion &&
        preference.options.map((option, index) => {
          return (
            <button
              key={index}
              className={`rounded-md py-8 px-6 flex flex-col gap-2 text-left cursor-pointer ${
                selectedOptionIndex === index
                  ? "bg-primary-accent text-neutral-200"
                  : "bg-gray-200 hover:bg-secondary-accent text-neutral-900"
              }`}
              onClick={() => onOptionClick(selectedMenuIndex, index)}
            >
              <h2 className="font-heading text-h4">{option.name}</h2>
              <p>{option.description}</p>
            </button>
          );
        })}
    </>
  );
}
