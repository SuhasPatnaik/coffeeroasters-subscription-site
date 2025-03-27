import { stepsList } from "../../utils/data";

interface StepsProps {
  isDarkTheme?: boolean;
}

export default function Steps({ isDarkTheme }: StepsProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-16 px-4 md:gap-0 ${
        isDarkTheme
          ? "bg-neutral-900 text-neutral-200 rounded-xl py-24 px-16"
          : "text-neutral-900"
      }`}
    >
      {stepsList.map((step, index) => {
        return (
          <div
            key={index}
            className={`grid place-items-center text-center gap-y-4 md:gap-y-10 md:place-items-start md:text-left md:pt-16 ${
              index < 2 && "md:border-t-2 md:border-secondary-accent"
            } relative`}
          >
            <span
              className={`absolute h-8 w-8 border-2 border-primary-accent rounded-full transform -translate-y-1/2 ${
                isDarkTheme ? "bg-neutral-900" : "bg-white"
              }`}
            ></span>
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
