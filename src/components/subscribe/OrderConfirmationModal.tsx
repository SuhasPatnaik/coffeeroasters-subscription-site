import Button from "../shared/Button";
import OrderSummaryText from "./OrderSummaryText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { preferenceMenu } from "../../utils/constants";

interface OrderConfirmationModalProps {
  selectedPreferences: Record<number, { optionName: string }>;
  onClose: () => void;
}

export default function OrderConfirmationModal({
  selectedPreferences,
  onClose,
}: OrderConfirmationModalProps) {
  const handleCheckout = () => {};

  const quantity =
    selectedPreferences[2].optionName === "250g"
      ? "quarter"
      : selectedPreferences[2].optionName === "500g"
      ? "half"
      : "full";

  const frequency = selectedPreferences[4].optionName;

  const totalAmount = preferenceMenu
    .at(-1)
    .options.find((option) => option.name === frequency).subscriptionCost[
    quantity
  ];

  console.log("totalAmount", totalAmount);

  return (
    <>
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[90vw] h-[80vh] relative">
          <div className="flex justify-between bg-neutral-900 p-6">
            <h2 className="font-heading text-h3 rounded-t-lg">Order Summary</h2>
            <button className="cursor-pointer" onClick={onClose}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ fontSize: "1.75rem" }}
              />{" "}
            </button>
          </div>
          <div className="flex flex-col px-8 pt-10 pb-4 gap-8">
            <p className="font-heading text-h4/loose text-neutral-500">
              <OrderSummaryText selectedPreferences={selectedPreferences} />
            </p>
            <p className="text-neutral-900 text-balance">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{" "}
            </p>
            <Button onClick={() => handleCheckout} className="w-full">
              Checkout - ${totalAmount} / mo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
