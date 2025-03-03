import { useState } from "react";

export default function Accordion({ preference }) {
  const [expandAccordion, setExpandAccordion] = useState(false);

  const handleClick = (expandAccordion) => {
    setExpandAccordion((expandAccordion) => !expandAccordion);
  };

  return (
    <>
      <button
        className="flex justify-between w-full cursor-pointer items-center"
        onClick={(expandAccordion) => handleClick(expandAccordion)}
      >
        <h1 className="font-heading text-h4 text-neutral-500 w-56 text-left">
          {preference.question}
        </h1>
        <div>
          <img
            src="/images/plan/desktop/icon-arrow.svg"
            alt="Arrow indicating if the accordion is open or close"
            className={`${
              expandAccordion
                ? "rotate-180 transition-transform"
                : "transition-transform"
            }`}
          />
        </div>
      </button>
      {expandAccordion &&
        preference.options.map((option, index) => {
          return (
            <button
              key={index}
              className="bg-gray-200 text-neutral-900 rounded-md py-8 px-6 flex flex-col gap-2 text-left cursor-pointer hover:bg-secondary-accent focus:bg-primary-accent focus:text-neutral-200"
            >
              <h2 className="font-heading text-h4">{option.name}</h2>
              <p>{option.description}</p>
            </button>
          );
        })}
    </>
  );
}
