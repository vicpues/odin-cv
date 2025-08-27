import Input from "../Input/Input";
import handleChange from "../Input/handleChange";

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
        inputProps={{
          min: DEFAULT_MIN,
          max: CURRENT_YEAR,
          onChange: (e) => {
            validateInputs(e);
            handleChange(e);
          },
        }}
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

  function validateInputs(e) {
    const fromElement = getFromElement(e);
    const fromValue = new Number(fromElement.value);
    const toElement = getToElement(e);
    const toValue = new Number(toElement.value);

    // Start at current year when interacting with an empty From:
    if (from === "") fromElement.value = CURRENT_YEAR;

    // Update To: if it's not empty and From: becomes greater than it
    if (toElement.value && toValue < fromValue) toElement.value = fromValue;
  }
}

function getFromElement(e) {
  return getForm(e).querySelector(`input[name="from"]`);
}

function getToElement(e) {
  return getForm(e).querySelector(`input[name="to"]`);
}

function getForm(e) {
  return e.target.form;
}
