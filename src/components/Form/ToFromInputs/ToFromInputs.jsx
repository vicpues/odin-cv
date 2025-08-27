import Input from "../Input/Input";

export default function ToFromInputs({ to, from }) {
  const DEFAULT_MIN = 1900;
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <>
      <Input
        label="From:"
        name="from"
        type="number"
        placeholder={CURRENT_YEAR}
        defaultValue={from}
        inputProps={{ min: DEFAULT_MIN, max: CURRENT_YEAR }}
      />

      <Input
        label="To:"
        name="to"
        type="number"
        defaultValue={to}
        placeholder={from ? "Current" : ""}
        inputProps={{
          disabled: !from,
          min: from ? from : DEFAULT_MIN,
          max: CURRENT_YEAR,
        }}
      />
    </>
  );
}
