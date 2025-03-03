import { stepsList } from "../../utils/constants";

interface StepsProps {
  isDarkTheme?: boolean;
}

export default function Steps({ isDarkTheme }: StepsProps) {
  return (
    <div
      className={`flex flex-col gap-16 px-4 ${
        isDarkTheme
          ? "bg-neutral-900 text-neutral-200 rounded-xl py-20"
          : "text-neutral-900"
      }`}
    >
      {stepsList.map((step, index) => {
        return (
          <div
            key={index}
            className={`grid place-items-center text-center gap-y-4 `}
          >
            <p className="font-heading text-h1 text-secondary-accent">
              {step.number}
            </p>
            <h1 className="font-heading text-h3">{step.name}</h1>
            <p className="text-balance">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
