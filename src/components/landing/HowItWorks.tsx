import Button from "../shared/Button";
import Steps from "../shared/Steps";

export default function HowItWorks() {
  return (
    <section>
      <h1 className="font-heading text-neutral-500 text-center text-h3">
        How it works?
      </h1>
      <Steps />
      <Button>Create your plan</Button>
    </section>
  );
}
