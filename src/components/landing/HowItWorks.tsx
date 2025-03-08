import { useNavigate } from "react-router";
import Button from "../shared/Button";
import Steps from "../shared/Steps";

export default function HowItWorks() {
  let navigate = useNavigate();
  return (
    <section className="flex flex-col gap-16 justify-center mb-20">
      <h1 className="font-heading text-neutral-500 text-center text-h3">
        How it works?
      </h1>
      <Steps />
      <Button onClick={() => navigate("/subscribe")}>Create your plan</Button>
    </section>
  );
}
