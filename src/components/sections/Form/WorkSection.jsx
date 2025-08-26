import FormSection from "./FormSection/FormSection";
import Input from "./Input/Input";
import InputGroup from "./InputGroup/InputGroup";

export default function WorkSection({ data }) {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <FormSection id="work-details" title="Work experience">
      <InputGroup data={data}>
        <Input
          label="Company name"
          name="company"
          type="text"
          placeholder="ex. 'Monsters Inc.'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="Job title"
          name="position"
          type="text"
          placeholder="ex. 'Scare floor supervisor'"
          inputProps={{ autoCapitalize: "words" }}
        />

        <Input
          label="From:"
          name="from"
          type="number"
          inputProps={{ min: 1900, max: CURRENT_YEAR }}
        />

        <Input
          label="To:"
          name="to"
          type="number"
          inputProps={{ min: 1900, max: CURRENT_YEAR }}
        />

        <Input
          label="Responsibilities"
          name="details"
          type="textarea"
          placeholder={
            "example:\n-Coordinating scare teams\n-Creating performance reports"
          }
          inputProps={{ autoCapitalize: "sentence" }}
        />
      </InputGroup>
    </FormSection>
  );
}
