import Button from "../shared/Button";

export default function OrderSummary({ selectedPreferences }) {
  const getPreferenceText = (index) =>
    selectedPreferences?.[index] ? (
      <span className="text-primary-accent inline-block">
        {selectedPreferences[index].optionName}
      </span>
    ) : (
      <span className={`border-b-1 w-16 inline-block text-primary-accent`} />
    );

  const isCapsule = selectedPreferences?.[0]?.optionName === "Capsule";

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
          {isCapsule ? (
            <>“I drink my coffee using {getPreferenceText(0)}</>
          ) : (
            <>“I drink my coffee as {getPreferenceText(0)}</>
          )}
          , with a {getPreferenceText(1)} type of bean. {getPreferenceText(2)}
          {!isCapsule && <>, ground ala {getPreferenceText(3)}</>}, sent to me{" "}
          {getPreferenceText(4)}.”
        </p>
      </div>
      <div className="text-center my-16">
        <Button>Create my plan!</Button>
      </div>
    </div>
  );
}
