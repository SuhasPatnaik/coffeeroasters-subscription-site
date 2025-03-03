import Button from "../shared/Button";

export default function OrderSummary() {
  return (
    <div>
      <div
        className="rounded-lg py-10 px-8"
        style={{
          backgroundImage: `URL("/images/plan/mobile/bg-order-summary.png")`,
        }}
      >
        <h1 className="uppercase text-neutral-400 mb-2">order summary</h1>
        <p className="font-heading text-h4/loose">
          “I drink my coffee as{" "}
          <span className="text-primary-accent">_____/Filter</span>, with a{" "}
          <span className="text-primary-accent">_____/Decaf</span> type of bean.{" "}
          <span className="text-primary-accent">_____/250g</span> ground ala{" "}
          <span className="text-primary-accent">_____/Cafetiere</span>, sent to
          me <span className="text-primary-accent">_____/Every Week</span>.”
        </p>
      </div>
      <div className="text-center my-16">
        <Button>Create my plan!</Button>
      </div>
    </div>
  );
}
