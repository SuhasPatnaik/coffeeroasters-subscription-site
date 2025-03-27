import { useState } from "react";
import Button from "../shared/Button";
import OrderConfirmationModal from "./OrderConfirmationModal";
import OrderSummaryText from "./OrderSummaryText";

export default function OrderSummary({ selectedPreferences }) {
  const [showModal, setShowModal] = useState(false);

  const handleCreatePlan = () => {
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
        <Button onClick={handleCreatePlan}>Create my plan!</Button>
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
