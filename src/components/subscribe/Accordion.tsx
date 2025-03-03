import { useState } from "react";

export default function Accordion({ preference }) {
  const [expandAccordion, setExpandAccordion] = useState(false);

  const handleClick = (expandAccordion) => {
    setExpandAccordion((expandAccordion) => !expandAccordion);
  };

  return (
    <>
      <button
        className="flex justify-between w-full items-center cursor-pointer"
        onClick={(expandAccordion) => handleClick(expandAccordion)}
      >
        <h1 className="font-heading text-h4 text-neutral-500">
          {preference.question}
        </h1>
        <div>
          <img
            src="/images/plan/desktop/icon-arrow.svg"
            alt="Arrow indicating if the accordion is open or close"
          />
        </div>
      </button>
      {expandAccordion &&
        preference.options.map((option, index) => {
          return (
            <div
              key={index}
              className="bg-gray-200 rounded-md py-8 px-6 flex flex-col gap-2"
            >
              <h2 className="font-heading text-h4 text-neutral-900">
                {option.name}
              </h2>
              <p className="text-neutral-900">{option.description}</p>
            </div>
          );
        })}
    </>
  );
}
