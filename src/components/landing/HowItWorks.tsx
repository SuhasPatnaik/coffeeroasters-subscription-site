import { stepsList } from "../../utils/constants";
import Button from "../shared/Button";

export default function HowItWorks() {
  return (
    <>
      <h1 className="font-heading text-neutral-500 text-center text-h3">
        How it works?
      </h1>
      {stepsList.map((step, index) => {
        return (
          <div
            key={index}
            className="grid place-items-center text-center gap-y-4 text-neutral-900"
          >
            <p className="font-heading text-h1 text-secondary-accent">
              {step.number}
            </p>
            <h1 className="font-heading text-h3">{step.name}</h1>
            <p className="text-balance">{step.description}</p>
          </div>
        );
      })}
      <Button>Create your plan</Button>
    </>
  );
}
