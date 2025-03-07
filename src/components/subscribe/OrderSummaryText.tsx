export default function OrderSummaryText({ selectedPreferences }) {
  console.log(selectedPreferences?.[0]?.optionName);
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
    <>
      {isCapsule ? (
        <>
          “I drink my coffee using{" "}
          <span className="text-primary-accent inline-block">
            {selectedPreferences[0].optionName}s
          </span>
        </>
      ) : (
        <>“I drink my coffee as {getPreferenceText(0)}</>
      )}
      , with a {getPreferenceText(1)} type of bean. {getPreferenceText(2)}
      {!isCapsule && <>, ground ala {getPreferenceText(3)}</>}, sent to me{" "}
      {getPreferenceText(4)}”.
    </>
  );
}
