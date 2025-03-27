import Button from "../shared/Button";
import OrderSummaryText from "./OrderSummaryText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { getTotalShipmentCost } from "../../utils/pricing";
import { useState } from "react";

interface OrderConfirmationModalProps {
  selectedPreferences: Record<
    number,
    { optionIndex: number; optionName: string }
  >;
  onClose: () => void;
}

export default function OrderConfirmationModal({
  selectedPreferences,
  onClose,
}: OrderConfirmationModalProps) {
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleCheckout = () => {
    setOrderSuccess(true);
  };

  const quantity = selectedPreferences[2].optionName;

  const frequency = selectedPreferences[4].optionName;

  console.log("quantity", quantity);
  console.log("frequency", frequency);

  const { pricePerShipment, monthlyCost } = getTotalShipmentCost(
    quantity,
    frequency
  );

  return (
    <>
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-[90vw] h-[80vh] relative lg:w-[50vw] lg:rounded-2xl">
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
            <div>
              <p className="text-neutral-900 text-h4">
                Price per shipment: ${pricePerShipment}
              </p>
              <p className="text-neutral-900 text-h4">
                Frequency of delivery: "{frequency}"
              </p>
            </div>
            <p className="text-neutral-900 text-balance lg:text-wrap lg:italic">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.{" "}
            </p>
            <Button onClick={handleCheckout} className="w-full lg:w-fit">
              Checkout - ${monthlyCost} / mo
            </Button>
            {orderSuccess && (
              <img
                src="/images/success.gif"
                alt="Success gif"
                className="w-52 h-42 rounded-4xl  self-center"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
