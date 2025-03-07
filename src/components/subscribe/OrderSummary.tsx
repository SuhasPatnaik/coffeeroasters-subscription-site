import Button from "../shared/Button";
import OrderConfirmationModal from "./OrderConfirmationModal";
import { useState } from "react";
import OrderSummaryText from "./OrderSummaryText";

export default function OrderSummary({ selectedPreferences }) {
  const [showModal, setShowModal] = useState(false);

  // Added this to check if the button click function is working
  const handleCreatePlan = () => {
    console.log("Button clicked");
    setShowModal(true);
  };

  return (
    <section>
      <div
        className="rounded-lg py-10 px-8"
        style={{
          backgroundImage: `URL("/images/plan/mobile/bg-order-summary.png")`,
        }}
      >
        <h1 className="uppercase text-neutral-400 mb-2">order summary</h1>
        <p className="font-heading text-h4/loose">
          <OrderSummaryText selectedPreferences={selectedPreferences} />
        </p>
      </div>
      <div className="text-center my-16">
        <Button handleClick={handleCreatePlan}>Create my plan!</Button>
      </div>

      {showModal && (
        <OrderConfirmationModal
          selectedPreferences={selectedPreferences}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
