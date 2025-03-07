import Button from "../shared/Button";
import OrderSummaryText from "./OrderSummaryText";

export default function OrderConfirmationModal({
  selectedPreferences,
  onClose,
}) {
  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[90vw] h-[90vh] relative">
          <h2 className="font-heading text-h3 mb-4 bg-neutral-900 py-6 pl-6 rounded-t-lg">
            Order Summary
          </h2>
          <div className="flex flex-col px-8 pt-10 pb-4 gap-6">
            <p className="font-heading text-h4/loose text-neutral-500">
              <OrderSummaryText selectedPreferences={selectedPreferences} />
            </p>
            <p className="text-neutral-900 text-balance">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{" "}
            </p>
            <Button onClick={onClose} className="w-full">
              Checkout - ${} / mo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
